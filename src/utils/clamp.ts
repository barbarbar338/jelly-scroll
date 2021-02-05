export const clamp = (value: number, min = 0, max = 1): number =>
	min < max
		? value < min
			? min
			: value > max
			? max
			: value
		: value < max
		? max
		: value > min
		? min
		: value;
