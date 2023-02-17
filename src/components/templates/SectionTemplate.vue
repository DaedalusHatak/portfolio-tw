<template>
	<div
		class="w-full svh snapAlign relative px-2 md:px-24 grid grid-rows-1 justify-items-center items-center"
		><slot></slot
	></div>
</template>

<script></script>

<style scoped>
.svh {
	
	min-height: 100svh;
	min-height: -webkit-fill-available;
	
}

@media screen and (min-width: 1024px) {
	.snapAlign {
		scroll-snap-align: start;
	}
}
</style>
