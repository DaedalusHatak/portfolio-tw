<template>
	<div class="grid glow-effect relative bg-orange-1200" type="submit"
		>Send message
		<svg class="glow-container absolute">
			<rect pathLength="100" class="glow-blur"></rect>
			<rect pathLength="100" class="glow-line"></rect>
		</svg>
	</div>
</template>

<style scoped>
div {
	width: 10em;
	padding: 1em;
	border-radius: 0.75em;
}
.glow-container {
	pointer-events: none;
	width: calc(100% + 20px);
	height: calc(100% + 20px);
	top: -10px;
	left: -10px;
	opacity: 0;
	/* outline: 3px solid red; */
}
.glow-line,
.glow-blur {
	width: calc(100% - 20px);
	height: calc(100% - 20px);
	x: 10px;
	y: 10px;
	rx: 0.75em;
	fill: transparent;
	stroke: rgb(255, 255, 255);
	stroke-width: 5px;
	stroke-dasharray: 20 30;
	stroke-linecap: round;
}

.glow-effect:is(:hover, :focus) :is(.glow-line, .glow-blur) {
	stroke-dashoffset: -85px;
	transition: stroke-dashoffset 1200ms ease-in;
}
.glow-line {
	stroke: #fff;
	stroke-width: 3px;
}
.glow-blur {
	filter: blur(5px);
}
.glow-effect:is(:hover, :focus) .glow-container {
	animation: glow-visibility ease-in-out 1200ms;
}

@keyframes glow-visibility {
	0%,
	100% {
		opacity: 0;
	}
	25%,
	75% {
		opacity: 1;
	}
}
</style>
