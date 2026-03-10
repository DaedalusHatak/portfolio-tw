<template>
  <div class="pt-16 px-5 self-start text-center">
    <h2 class="font-bold text-2xl text-orange-1100 text-with-line">
      Portfolio
    </h2>
    <h2 class="text-3xl md:text-5xl font-semibold pb-12 mb-12">
      My Creative Work
    </h2>
    <div
      class="py-12 grid lg:grid-cols-2 justify-items-center text-center gap-16 md:gap-44"
    >
     
    <div v-for="project in projects" class="maxw">
        <div class="border-2 border-orange-1100">
          <img
            :src="project.src"
            :alt="project.name"
          />
        </div>
        <div class="grid justify-items-center">
          <p class="pt-3 pb-3">{{project.name}}</p>
        
          <a
            class="self-center"
            @click.prevent="actLink"
            :href="project.link"
            ><ButtonGlow message="Go to project"></ButtonGlow
          ></a>
        </div>
      </div>
  </div>
  </div>
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
  img {
    height: 100%;
    width: 100%;
    aspect-ratio: 3/2;
  }
</style>

<script>
 
  export default {
   

    data() {
      return {
        projects: [],
        isVisible: null,
        actualLink: null,
        links: [
          {
            link: "https://pawel-kicinski.pl",
            title: "My Portfolio",
            img: "portfolio.png",
          },
          {
            link: "https://projects.pawel-kicinski.pl/zsz/",
            title: "Cięcie wodą 3D",
            img: "zsz1.png",
          },
        ],
      };
    },
    async mounted(){
const res = await fetch('/data/projects.json')
this.projects = await res.json()
},
    methods: {
      actLink(data) {
        this.actualLink = data.target.parentElement.href;
        this.isVisible = true;
        this.$emit("href", this.actualLink);
        this.$emit("modalActive", this.isVisible);
      },
    },
  };
</script>
