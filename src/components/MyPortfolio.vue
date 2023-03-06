<template>
	<div class="pt-16 px-5 self-start justify-center text-center">
		<h2 class="font-bold text-2xl text-orange-1100 text-with-line"
			>Portfolio</h2
		>
		<h2 class="text-3xl md:text-5xl font-semibold pb-12 mb-12"
			>My Creative Work</h2
		>
		<div
			class="py-12 grid lg:grid-cols-2 justify-items-center text-center gap-16 md:gap-44"
		>
			<div class="maxw" v-for="link in links">
				<project-card
					@currentLink="actLink"
					:link="link.link"
					@isVisible="isAvailable"
					:title="link.title"
					:image="link.img"
				></project-card> </div></div
	></div>
</template>

<style scoped>
.maxw {
	max-width: 500px;
}
.button-link {
	display: block;
	margin-top: 1em;
	padding: 1em;
	width: 10em;
}

</style>

<script>
import ProjectCard from './templates/ProjectCard.vue';
export default {
	components:{ProjectCard},
	data() {
		return {
			isVisible: null,
			actualLink:null,
			links: [{link:'http://pawel-kicinski.pl',title:'My Portfolio', img:'portfolio.png'}, {link:'http://projects.pawel-kicinski.pl',title:'Cięcie wodą 3D', img:'zsz1.png'}],

			
		};
	},

	methods: {
		isAvailable(data){
			this.isVisible = data;
			this.$emit('isVisible', this.isVisible);
			this.$emit('href',this.actualLink)
		},
		actLink(data){
			console.log(data);
			this.actualLink=data;
		},

	},
};
</script>
