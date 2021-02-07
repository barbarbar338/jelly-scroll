export const lerp = (start: number, end: number, alpha: number): number =>
	start * (1 - alpha) + end * alpha;
