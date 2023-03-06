<template>
    <div class="border-2 border-orange-1100">
					<img :src="image" alt="" />
				</div>
				<div class="grid justify-items-center"
					><p class="pt-3 pb-3">{{title}}</p>
					<a @click.prevent="proceedToPage(link)" :href="link"
						><ButtonGlow message="Go to project"></ButtonGlow></a
				></div>
</template>

<script>
export default {
	props: ['link','title','image'],
	data() {
		return {
			isVisible: true,
			
		};
	},

	methods: {
		proceedToPage(link) {
            this.$emit('currentLink',this.link)
			this.$emit('isVisible', this.isVisible);
		},
	},
};</script>

<style scoped>
img {
	aspect-ratio: 3/2;
	height: 100%;
	width: 100%;
}</style>