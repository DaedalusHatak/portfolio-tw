import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ButtonGlow from './components/templates/ButtonGlow.vue'
import MyModal from './components/templates/MyModal.vue';

const app = createApp(App);
app.component('ButtonGlow',ButtonGlow);
app.component('MyModal',MyModal);


app.mount('#app');