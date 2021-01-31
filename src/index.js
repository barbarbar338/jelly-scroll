import { value, styler, physics } from "popmotion";
import lerp from "lerp";
import clamp from "clamp";

function jelly(v) {
	const input = [-5, 0, 5];
	const output = [-Math.PI / 7, 0, Math.PI / 7];

	let i = 1;
	for (; i < input.length; i++)
		if (input[i] > v || i === input.length - 1) break;

	const range = clamp((v - input[i - 1]) / (input[i] - input[i - 1]));
	const result = lerp(output[i - 1], output[i], range);

	return result;
}

function JellyScroll(containerID, opts = {}) {
	const state = {
		time: 0,
		y_value: 0,
	};
	const options = {
		friction: 0.5,
		strength: 100,
		...opts,
	};

	const container = document.getElementById(containerID);
	const containerStyler = styler(container);
	const yValue = value(0, (v) =>
		containerStyler.set({ transform: `skewY(${v}rad)` }),
	);

	document.addEventListener("scroll", () => {
		const now = Date.now();

		const time = now - state.time;
		const y_value = window.scrollY - state.y_value;

		state.time = now;
		state.y_value = window.scrollY;

		physics({
			to: jelly(y_value / time),
			friction: options.friction,
			restSpeed: false,
			from: yValue.get(),
			springStrength: options.strength,
			velocity: yValue.getVelocity(),
		}).start(yValue);
	});
}

if (typeof window !== "undefined") window.JellyScroll = JellyScroll;

export { JellyScroll };
