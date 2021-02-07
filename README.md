# JellyScroll on web

Easily add JellyScroll effect to your websites.

## Install Using NPM:

Run `npm i jelly-scroll` or `yarn add jelly-scroll`

## Install Using UNPKG:

Just import it like `<script src="https://unpkg.com/jelly-scroll/dist/browser/index.js"></script>`

## Usage:

```html
<!-- html -->
<script src="https://unpkg.com/jelly-scroll/dist/browser/index.js"></script>
<script>
	JellyScroll("containerID");
</script>
```

```js
// node
import { JellyScroll } from "jelly-scroll";

JellyScroll("containerID");
```

Advanced usage:

```js
JellyScroll("containerID", {
    friction?: .5, // recommended .5, sets jelly friction
    strength?: 100 // recommended 100, sets jelly strenght
});
```

# Contributing

Feel free to use Github's features
