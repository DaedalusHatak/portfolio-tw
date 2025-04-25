<script setup lang="ts">
import {ref} from 'vue'
type Skill = { skillName: string; percentage: Number,shortDesc:string };
const skills= ref<Skill[]>([
	{ skillName: 'HTML & CSS', percentage: 98,shortDesc:'Very good' },
	{ skillName: 'Tailwind', percentage: 93,shortDesc:'Very good' },
	{ skillName: 'Vue & Nuxt.js', percentage: 77,shortDesc:'Good' },
	{ skillName: 'React & Nextjs', percentage: 73,shortDesc:'Good' },
])
</script>
<template>
	<div
		class="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center md:gap-12 px-5 gap-32"
		><div class="text-left lg:col-span-2"
			><div class="font-bold text-2xl text-orange-1100 text-with-line"
				>Expertise</div
			>

			<div class="font-bold text-4xl py-7">My Skills & Tools</div>
			<p class="text-gray-1100"
				>I work with Visual Studio, and I'm going with Vue.js for my projects as
				it's good for smaller projects. <br />For better quality and performance
				adding Tailwind/Vuetify and Vite is what I'm going for. <br />
				I'm also using Github to improve my websites safely.
			</p>
		</div>
		<div class="lg:col-span-3">
			<ul class="text-left md:pl-12">
				<li v-for="skill in skills" class="grid grid-cols-3 py-3 items-center">
					<label for="file">{{skill.skillName}}</label>
					<div
						class="w-full col-span-2 bg-gray-200 rounded-full h-3.5 dark:bg-gray-700"
					>
						<div
							class="bg-orange-1100 h-3.5 rounded-full"
							:style="'width: ' + skill.percentage + '%'"
						></div>({{ skill.shortDesc }} )</div
				></li>
				
			</ul>
		</div>
	</div>
</template>

<style scoped>
li {
	max-width: 650px;
}
</style>
