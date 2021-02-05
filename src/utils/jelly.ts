import { lerp } from "./lerp";
import { clamp } from "./clamp";

export const jelly = (v: number): number => {
	const input = [-5, 0, 5];
	const output = [-Math.PI / 7, 0, Math.PI / 7];

	let i = 1;
	for (; i < input.length; i++)
		if (input[i] > v || i === input.length - 1) break;

	const range = clamp((v - input[i - 1]) / (input[i] - input[i - 1]));
	const result = lerp(output[i - 1], output[i], range);

	return result;
};
