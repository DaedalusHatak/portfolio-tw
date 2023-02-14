<template>
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
	<svg
		class="elipse"
		width="203"
		height="196"
		viewBox="0 0 203 196"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M80.8218 194.52C49.7056 191.85 20.912 176.994 0.705427 153.199L181.821 0.705297C201.826 24.6697 211.561 55.573 208.891 86.6891C206.207 117.971 191.206 146.906 167.189 167.128C143.171 187.35 112.104 197.203 80.8218 194.52Z"
			stroke="#DC664A"
		/>
	</svg>

	<div class="py-36 md:py-12 lg:grid px-3 justify-center relative text-center">
		<div class="text-3xl text-orange-1100 font-bold pb-12 text-with-line"
			>Contact</div
		>
		<div class="text-3xl md:text-5xl font-semibold pb-12 mb-12">Happy Clients</div>
		<div class="lg:grid text-left justify-self-center grid-cols-2 gap-40">
			<div>
				<h3 class="text-3xl text-orange-1100 font-bold pb-12 text-with-line"
					>Get in touch</h3
				>
				<p class="text-gray-1100"
					>"Said heaven dry made Them gathering the very second morning us be
					divide isn't. Saw Seasons winged replenish
				</p>
				<div class="pt-5 font-medium text-lg lg:text-2xl">
					<p class="flex items-center gap-5 py-5">
						<img src="../assets/coolicon.svg" alt="" />Poland, Bialystok</p
					>
					<p class="flex items-center gap-5 py-5">
						<img src="../assets/icon.svg" alt="" /><a class="hover-link" href="mailto:pawelkic.dev@gmail.com">pawelkic.dev@gmail.com</a></p
					>
					<p class="flex items-center gap-5 py-5"
						><img src="../assets/Vector.svg" alt="" /><a class="hover-link" href="tel:+48665123514">+48 665 123 514</a></p
					>
					<p class="flex items-center gap-5 py-5"
						><img src="../assets/Group 4230.svg" alt="" />Freelance available</p
					>
				</div>
			</div>
			<div class="">
				<form @submit.prevent="sendForm" class="flex flex-col mb-12" action="">
					<p class="text-3xl text-orange-1100 font-bold pb-12 text-with-line"
						>Contact Form</p
					>
					<input class="pl-8 my-3" placeholder="Full Name :" type="text" />
					<input class="pl-8 my-3" placeholder="E-mail :" type="text" />
					<textarea
						class="pl-8 pt-6 my-3"
						placeholder="Send message :"
						maxlength="300"
						cols="5"
						rows="5"
					></textarea>

					<button
						class="grid glow-effect relative w-max p-4 bg-orange-1200"
						type="submit"
						>Send message
						<svg class="glow-container absolute">
							<rect pathLength="100" class="glow-blur"></rect>
							<rect pathLength="100" class="glow-line"></rect>
						</svg> </button></form
			></div>
		</div>
	</div>
</template>

<script>
import CardTemplate from './templates/CardTemplate.vue';
export default {
	components: { CardTemplate },
	methods: {
		sendForm() {
			console.log('test');
		},
	},
};
</script>

<style scoped>


button {
	border-radius: 0.75em;
}
.vector {
	top: 0;
	left: 0;
	position: absolute;
	z-index: 0;
}
.elipse {
	position: absolute;
	bottom: 0;
	right: 0;
}
img {
	width: min-content;
}
form {
	max-width: 100%;
}
input,
textarea {
	min-height: 73px;
	border: 1px solid rgba(255, 255, 255, 0.39);
	background-color: transparent;
	resize: none;
}

.glow-container {
	pointer-events: none;
	width: calc(100% + 20px);
	height: calc(100% + 20px);
	top: -10px;
	left: -10px;
	opacity: 0;
	/* outline: 3px solid red; */
}
.glow-line,
.glow-blur {
	width: calc(100% - 20px);
	height: calc(100% - 20px);
	x: 10px;
	y: 10px;
	rx: 0.75em;
	fill: transparent;
	stroke: rgb(255, 255, 255);
	stroke-width: 5px;
	stroke-dasharray: 20 30;
	stroke-linecap: round;
}

.glow-effect:is(:hover, :focus) :is(.glow-line, .glow-blur) {
	stroke-dashoffset: -85px;
	transition: stroke-dashoffset 1200ms ease-in;
}
.glow-line {
	stroke: #fff;
	stroke-width: 3px;
}
.glow-blur {
	filter: blur(5px);
}
.glow-effect:is(:hover, :focus) .glow-container {
	animation: glow-visibility ease-in-out 1200ms;
}

@keyframes glow-visibility {
	0%,
	100% {
		opacity: 0;
	}
	25%,
	75% {
		opacity: 1;
	}
}
</style>
