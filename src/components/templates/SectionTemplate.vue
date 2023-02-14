<template>
	<div
		class="w-full snapAlign relative px-12 md:px-24 grid grid-rows-1 justify-items-center items-center"
		><slot></slot
	></div>
</template>

<script></script>

<style scoped>
div {
	min-height: 100dvh;
}

@media screen and (min-width: 1024px) {
	.snapAlign {
		scroll-snap-align: start;
	}
}
</style>
