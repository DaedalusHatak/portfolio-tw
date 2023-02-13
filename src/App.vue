<script>
import HeroSection from './components/HeroSection.vue';
import AboutMe from './components/AboutMe.vue';
import MyServices from './components/MyServices.vue';
import SectionTemplate from './components/templates/SectionTemplate.vue';
import MySkills from './components/MySkills.vue';
import MyPortfolio from './components/MyPortfolio.vue';
export default{
components:{HeroSection,AboutMe,SectionTemplate,MyServices,MySkills,MyPortfolio},
};
</script>

<template>
 <div>
    <section-template class=" bg-zinc-800"><hero-section></hero-section></section-template>
 <section-template class="bg-dark-1200"> <about-me></about-me></section-template>
 <section-template class="bg-dark-1100"> <my-services></my-services></section-template>
 <section-template class="bg-dark-1200"> <my-skills></my-skills></section-template>
 <section-template class="bg-dark-1100"> <my-portfolio></my-portfolio></section-template>
 </div>
</template>

<style scoped>

</style>
