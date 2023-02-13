<template>
	<div class="py-12 lg:grid justify-center text-center">
    <div class="text-3xl text-orange-1100 font-bold pb-12 text-with-line">My services</div>
		<div class="text-5xl font-semibold pb-12 mb-12">What can I do best?</div>
		<div
			class="lg:grid text-center justify-self-center  grid-cols-3 gap-12 lg:w-4/6"
		>
			<card-template  title="Webflow Development" imag="1">
				Really boy law county she unable her sister. Feet you off its like like
				six. Among sex are leave law built now. In built table in an rapid
				blush. Merits behind on afraid or warmly.
			</card-template>
			<card-template class="bg-dark-1200" title="Figma Web Designing" imag="2">
				Really boy law county she unable her sister. Feet you off its like like
				six. Among sex are leave law built now. In built table in an rapid
				blush. Merits behind on afraid or warmly.
			</card-template>
			<card-template title="Shopify Development" imag="3">
				Really boy law county she unable her sister. Feet you off its like like
				six. Among sex are leave law built now. In built table in an rapid
				blush. Merits behind on afraid or warmly.
			</card-template>
		</div>
	</div>
</template>

<script>
import CardTemplate from './templates/CardTemplate.vue';
export default {
	components: { CardTemplate },
};
</script>


<style scoped>

div{
	scroll-snap-stop: always;
    scroll-snap-align: start;
    scroll-snap-type: y mandatory;
}
</style>
