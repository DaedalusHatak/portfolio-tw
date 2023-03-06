<template>
	<div class="pt-16 px-5 self-start justify-center text-center">
		<h2 class="font-bold text-2xl text-orange-1100 text-with-line"
			>Portfolio</h2
		>
		<h2 class="text-3xl md:text-5xl font-semibold pb-12 mb-12">My Creative Work</h2>
		<div
			class="py-12 grid lg:grid-cols-2  justify-items-center  text-center gap-16 md:gap-44"
		>
		<div class="maxw ">	
			<div class="border-2 border-orange-1100">
				<img src="../assets/zsz1.png" alt="" />
				
			</div>
			<div class="grid justify-items-center"><p class="pt-3 pb-3">Cięcie wodą 3D</p>
				<a href="http://projects.pawel-kicinski.pl"><ButtonGlow  message="Go to project"></ButtonGlow></a></div>
				
			</div>

			<div class="maxw ">	
			<div class="border-2 border-orange-1100">
				<img src="../assets/portfolio.png" alt="" />
				
			</div>
			<div class="grid justify-items-center"><p class="pt-3 pb-3">Cięcie wodą 3D</p>
				<a href="http://pawel-kicinski.pl"><ButtonGlow  message="Go to project"></ButtonGlow></a></div>
				
			</div>
		</div></div
	>
</template>

<style scoped>
.maxw{
	max-width: 500px;
}
.button-link{
	display:block;
margin-top: 1em;
padding:1em;
width: 10em;

}
img{
	aspect-ratio: 3/2;
	height: 100%;
	width: 100%;
}</style>

<script>
export default {};
</script>
