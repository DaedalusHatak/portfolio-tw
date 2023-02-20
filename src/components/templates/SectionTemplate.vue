<template>
	<div class="svh snapAlign grid items-center relative px-2 md:px-24"
		><slot></slot
	></div>
</template>

<script></script>

<style scoped>
.svh {
	min-height: 100svh;
}
@media screen and (min-width: 1024px) and (min-height: 750px) {
	.snapAlign {
		scroll-snap-align: start;
	}
}
</style>
