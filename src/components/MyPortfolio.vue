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
     
    <div class="maxw">
        <div class="border-2 border-orange-1100">
          <img
            src="../assets/Electron-Notification-App.png"
            alt=""
          />
        </div>
        <div class="grid justify-items-center">
          <p class="pt-3 pb-3">Powiadiomienia Electron</p>
          <a
            class="self-center"
            @click.prevent="actLink"
            href="https://github.com/DaedalusHatak/Electron-Notification-App"
            ><ButtonGlow message="Go to project"></ButtonGlow
          ></a>
        </div>
      </div>
      <div class="maxw">
        <div class="border-2 border-orange-1100">
          <img
            src="../assets/plazmet.png"
            alt=""
          />
        </div>
        <div class="grid justify-items-center">
          <p class="pt-3 pb-3">Plazmet</p>
          <a
            class="self-center"
            @click.prevent="actLink"
            href="https://plazmet.com.pl"
            ><ButtonGlow message="Go to project"></ButtonGlow
          ></a>
        </div>
      </div>
      <div class="maxw">
        <div class="border-2 border-orange-1100">
          <img
            src="../assets/zsz1.png"
            alt=""
          />
        </div>
        <div class="grid justify-items-center">
          <p class="pt-3 pb-3">Cięcie wodą 3D</p>
          <a
            class="self-center"
            @click.prevent="actLink"
            href="https://projects.pawel-kicinski.pl/zsz/"
            ><ButtonGlow message="Go to project"></ButtonGlow
          ></a>
        </div>
      </div>
      <div class="maxw">
        <div class="border-2 border-orange-1100">
          <img
            src="../assets/portfolio.png"
            alt=""
          />
        </div>
        <div class="grid justify-items-center">
          <p class="pt-3 pb-3">My portfolio</p>
          <a
            class="self-center"
            @click.prevent="actLink"
            href="https://pawel-kicinski.pl"
            ><ButtonGlow message="Go to project"></ButtonGlow
          ></a>
        </div>
      </div>

      <div class="maxw">
        <div class="border-2 border-orange-1100">
          <img
            src="../assets/multi-step.png"
            alt=""
          />
        </div>
        <div class="grid justify-items-center">
          <p class="pt-3 pb-3">Multi step form</p>
          <a
            class="self-center"
            @click.prevent="actLink"
            href="https://projects.pawel-kicinski.pl/multi-step/"
            ><ButtonGlow message="Go to project"></ButtonGlow
          ></a>
        </div>
      </div>

      <div class="maxw">
        <div class="border-2 border-orange-1100">
          <img
            src="../assets/Daedalus.png"
            alt=""
          />
        </div>
        <div class="grid justify-items-center">
          <p class="pt-3 pb-3">Netflix clone (Nuxt)</p>
          <a
            class="self-center"
            @click.prevent="actLink"
            href="https://nuxt.pawel-kicinski.pl/"
            ><ButtonGlow message="Go to project"></ButtonGlow
          ></a>
        </div>
      </div>

      <div class="maxw">
        <div class="border-2 border-orange-1100">
          <img
            src="../assets/Daedalus.png"
            alt=""
          />
        </div>
        <div class="grid justify-items-center">
          <p class="pt-3 pb-3">Netflix clone (Next.js)</p>
          <a
            class="self-center"
            @click.prevent="actLink"
            href="https://next.pawel-kicinski.pl/"
            ><ButtonGlow message="Go to project"></ButtonGlow
          ></a>
        </div>
        
      </div>

      <div class="maxw">
        <div class="border-2 border-orange-1100">
          <img
            src="../assets/flight.png"
            alt=""
          />
        </div>
        <div class="grid justify-items-center">
          <p class="pt-3 pb-3">Flight Manager (Next.js)</p>
          <a
            class="self-center"
            @click.prevent="actLink"
            href="https://flight.pawel-kicinski.pl/"
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
  import ProjectCard from "./templates/ProjectCard.vue";
  export default {
    components: { ProjectCard },

    data() {
      return {
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
