<template>
	<div
		class="section  snapAlign relative  grid  justify-items-center items-center"
		><slot></slot
	></div>
</template>

<script></script>

<style scoped>
	.section {
		min-height: 100vh;  
  

	max-width: 100%;
}
@media screen and (min-width: 1024px) {
	.snapAlign {
		scroll-snap-align: start;
	}


}
</style>
