<!-- Comment -->
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

  <div class="pt-6 lg:grid px-5 justify-center relative text-center">
    <div class="text-3xl text-orange-1100 font-bold pb-3 text-with-line">
      Contact
    </div>
    <div class="text-3xl md:text-5xl font-semibold pb-6">Happy Clients</div>
    <div class="lg:grid text-left justify-self-center grid-cols-2 gap-40">
      <div>
        <h3 class="text-3xl text-orange-1100 font-bold pb-6 text-with-line">
          Get in touch
        </h3>
        <p class="text-gray-1100">
          "Said heaven dry made Them gathering the very second morning us be
          divide isn't. Saw Seasons winged replenish
        </p>
        <div class="pt-5 font-medium text-md md:text-lg lg:text-2xl">
          <p class="flex items-center gap-5 py-5">
            <img src="../assets/place.svg" alt="" />Poland, Bialystok
          </p>
          <p class="flex items-center gap-5 py-5">
            <img src="../assets/mail.svg" alt="" /><a
              href="mailto:pawelkic.dev@gmail.com"
              >pawelkic.dev@gmail.com</a
            >
          </p>
          <p class="flex items-center gap-5 py-5">
            <img src="../assets/phone.svg" alt="" /><a
              href="tel:+48 665 123 514"
              >+48 665 123 514</a
            >
          </p>
          <p class="flex items-center gap-5 py-5">
            <img src="../assets/circlearrow.svg" alt="" />Freelance available
          </p>
        </div>
      </div>
      <div class="pb-16">
        <form @submit.prevent="sendForm" class="flex flex-col gap-3" action="">
          <p
            class="text-3xl text-orange-1100 font-bold pb-12 text-with-line w-max-full"
          >
            Contact Form
          </p>
          <div class="input pl-2 mb-3">
            <input
              class="py-5 pl-3"
              placeholder="Full Name :"
              id="name-input"
              type="text"
              name="name"
              v-model="name"
              required
            />
          </div>
          <div class="input pl-2 mb-3">
            <input
              class="py-5 pl-3"
              placeholder="E-mail :"
              id="email-input"
              type="email"
              name="email"
              v-model="email"
              required
            />
          </div>
          <div class="input pl-2 mb-3">
            <textarea
              class="py-5 pl-3"
              placeholder="Send message :"
              maxlength="300"
              cols="3"
              rows="5"
              type="text"
              name="message"
              id="message-input"
              form="contactForm"
              v-model="message"
              required
            ></textarea>
          </div>
          <button><ButtonGlow message="Send message"></ButtonGlow></button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardTemplate from "./templates/CardTemplate.vue";
import emailjs from "@emailjs/browser";
export default {
  components: { CardTemplate },
  data() {
    return {
      name: null,
      email: null,
      message: null,
    };
  },
  methods: {
    clearData() {
      this.name = null;
      this.email = null;
      this.message = null;
    },
    sendForm() {
      const data = new FormData();
      data.append("name", this.name);
      data.append("email", this.email);
      data.append("message", this.message);
      axios
        .post("/send-email", {name: this.name,email:this.email,message:this.message})
        .then((response) => {
          alert("Message was sent succesfully");
        })
        .catch((error) => {
          alert("Something went wrong, try again later");
        });
      this.clearData();
    },
  },
};
</script>

<style scoped>
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
.input {
  width: 100%;
  min-height: 73px;
  box-sizing: border-box;
}
.input--error {
  border-color: red;
}
input,
textarea {
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
  width: 100%;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.39);
  background-color: transparent;
  resize: none;
}
</style>
