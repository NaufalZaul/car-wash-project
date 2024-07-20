import './assets/main.css'
import App from './App.vue'
import router from './routes/route'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app')
