<template>
	<div class="p-6 pb-20 grid">
		<img class="justify-self-center py-10" :src="'icon-box-' + imag + '.png'" />
		<p class="text-xl leading-12 font-semibold">{{ title }}</p>
		<p class="text-gray-1300 leading-7">
			<slot></slot>
		</p>
	</div>
</template>

<script>
export default {
	props: ['title', 'imag'],
};
</script>

<style scoped>
div {
	scroll-snap-align: start;
	scroll-snap-stop: normal;
}
</style>
