<script>
import MyModal from './components/templates/MyModal.vue';
import HeroSection from './components/HeroSection.vue';
import AboutMe from './components/AboutMe.vue';
import MyServices from './components/MyServices.vue';
import SectionTemplate from './components/templates/SectionTemplate.vue';
import MySkills from './components/MySkills.vue';
import MyPortfolio from './components/MyPortfolio.vue';
import ContactForm from './components/ContactForm.vue';

export default {
	components: {
		HeroSection,
		AboutMe,
		SectionTemplate,
		MyServices,
		MySkills,
		MyPortfolio,
		ContactForm,
		MyModal,
	},
	data() {
		return {
			isModalVisible: false,
			hrefLink: null,
		};
	},
	methods: {
		confirmModal() {
			
			this.isModalVisible = true;
			window.onbeforeunload = null;

			window.location.href = this.hrefLink;
			this.hrefLink = null;
			this.isModalVisible = false;
		},
		closeModal() {
			this.isModalVisible = false;
		},

		buttonClicked(data) {
			this.isModalVisible = true;
		},
		linkSave(data) {
			this.hrefLink = data;
		},
	},

	mounted() {
		
		if (this.hrefLink) {
			window.onbeforeunload = () => {
				this.isModalVisible = true;
			};
		}
			
	
	},
};
</script>

<template>
	<MyModal
		class="z-10"
		v-show="isModalVisible"
		@close="closeModal"
		@proceed="confirmModal"
	></MyModal>

	<section-template class="bg-dark-1100"
		><hero-section class="md:self-end"></hero-section
	></section-template>
	<section-template class="bg-dark-1200">
		<about-me></about-me
	></section-template>
	<section-template class="bg-dark-1100">
		<my-services></my-services
	></section-template>
	<section-template class="bg-dark-1200">
		<my-skills></my-skills
	></section-template>
	<section-template class="bg-dark-1100">
		<my-portfolio @modal-active="buttonClicked" @href="linkSave"></my-portfolio
	></section-template>
	<section-template class="bg-dark-1200"
		><contact-form></contact-form
	></section-template>
</template>
