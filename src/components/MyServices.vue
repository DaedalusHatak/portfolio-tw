<template>
	
	<div class="py-36 md:py-12 lg:grid justify-center relative text-center">
		<svg
		class="vector"
			width="214"
			height="414"
			viewBox="0 0 214 414"
			fill="none"
	
		>
			<path
				d="M212.61 412.849C168.876 336.309 64.106 208.613 -5.09799 310.147C-91.603 437.065 136.408 418.296 128.192 257.097C119.976 95.8985 -77.6363 -22.6582 -122.47 5.25062"
				stroke="#DC664A"
			/>
		</svg>
		<svg class="elipse" width="203" height="196" viewBox="0 0 203 196" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M80.8218 194.52C49.7056 191.85 20.912 176.994 0.705427 153.199L181.821 0.705297C201.826 24.6697 211.561 55.573 208.891 86.6891C206.207 117.971 191.206 146.906 167.189 167.128C143.171 187.35 112.104 197.203 80.8218 194.52Z" stroke="#DC664A"/>
</svg>

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
.vector{
	top:-250px;
	position:absolute;
	z-index: -1;
}
.elipse{
	position: absolute;
	bottom: 0;
	right:0;
}</style>
