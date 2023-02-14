<template>
	<div
		class="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center md:gap-12 px-5 gap-32"
		><div class="text-left lg:col-span-2"
			><div class="font-bold text-2xl text-orange-1100 text-with-line"
				>Expertise</div
			>

			<div class="font-bold text-4xl py-7">My Skills & Tools</div>
			<p class="text-gray-1100"
				>Tool that I use all the time is Visual Studio. <br />

				Tools that I use most of the time are Vue, Vite, Tailwind, Vuetify.<br />
				This site was built with a help of Figma which gonna be used more often
				later.<br>
				For development I'm going with Github
			</p>
		</div>
		<div class="lg:col-span-3">
			<ul class="text-left md:pl-12">
				<li class="grid grid-cols-3 py-3 items-center">
					<label for="file">HTML & CSS:</label>
					<div
						class="w-full col-span-2 bg-gray-200 rounded-full h-3.5 dark:bg-gray-700"
					>
						<div
							class="bg-orange-1100 h-3.5 rounded-full"
							style="width: 99%"
						></div> </div
				></li>
				<li class="grid grid-cols-3 py-3 items-center"
					><label for="file">Vue:</label>
					<div
						class="w-full col-span-2 bg-gray-200 rounded-full h-3.5 dark:bg-gray-700"
					>
						<div
							class="bg-orange-1100 h-3.5 rounded-full"
							style="width: 85%"
						></div> </div
				></li>
				<li class="grid grid-cols-3 py-3 items-center"
					><label for="file">Tailwind & Vuetify:</label>
					<div
						class="w-full col-span-2 bg-gray-200 rounded-full h-3.5 dark:bg-gray-700"
					>
						<div
							class="bg-orange-1100 h-3.5 rounded-full"
							style="width: 75%"
						></div> </div
				></li>
				<li class="grid grid-cols-3 py-3 items-center"
					><label for="file">Figma:</label>
					<div
						class="w-full col-span-2 bg-gray-200 rounded-full h-3.5 dark:bg-gray-700"
					>
						<div
							class="bg-orange-1100 h-3.5 rounded-full"
							style="width: 67%"
						></div> </div
				></li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
li {
	max-width: 650px;
}
div {
	scroll-snap-stop: always;
	scroll-snap-align: start;
	scroll-snap-type: y mandatory;
}
</style>
