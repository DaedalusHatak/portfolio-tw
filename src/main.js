import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ButtonGlow from './components/templates/ButtonGlow.vue'

const app = createApp(App);
app.component('ButtonGlow',ButtonGlow);


app.mount('#app');