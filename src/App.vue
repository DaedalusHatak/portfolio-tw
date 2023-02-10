<script>
import HeroSection from './components/HeroSection.vue';
import AboutMe from './components/AboutMe.vue';
import MyServices from './components/MyServices.vue';
import SectionTemplate from './components/templates/SectionTemplate.vue';
import MySkills from './components/MySkills.vue';
export default{
components:{HeroSection,AboutMe,SectionTemplate,MyServices,MySkills},
};
</script>

<template>
 <section-template class=" bg-zinc-800"><hero-section></hero-section></section-template>
 <section-template class="bg-dark-1200"> <about-me></about-me></section-template>
 <section-template class="bg-dark-1100"> <my-services></my-services></section-template>
 <section-template class="bg-dark-1200"> <my-skills></my-skills></section-template>
</template>

<style scoped>

</style>
