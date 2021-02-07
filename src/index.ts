import { value, styler, physics } from "popmotion";
import { jelly } from "./utils/jelly";

export interface IJellyScrollOptions {
	friction?: number;
	strength?: number;
}

export function JellyScroll(
	containerID: string,
	opts: IJellyScrollOptions = {},
) {
	const state = {
		time: 0,
		y_value: 0,
	};
	const options = {
		friction: 0.5,
		strength: 100,
		...opts,
	};

	const container = document.getElementById(containerID) as HTMLElement;
	const containerStyler = styler(container);
	const yValue = value(0, (v: number) =>
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

declare global {
	interface Window {
		JellyScroll: typeof JellyScroll;
	}
}

if (typeof window !== "undefined") window.JellyScroll = JellyScroll;
