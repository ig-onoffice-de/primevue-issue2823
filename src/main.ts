import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Menu from 'primevue/menu'

const app = createApp(App)
app.component('Menu', Menu)


app.mount('#app')
