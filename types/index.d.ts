declare module "jelly-scroll" {
	export function JellyScroll(
		containerID: string,
		options?: {
			friction?: number;
			strength?: number;
		},
	): void;
}
