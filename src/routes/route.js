import Beranda from '@/views/beranda.vue';
import Pemesanan from '@/views/pemesanan.vue';
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

// import HomeView from './HomeView.vue'
// import AboutView from './AboutView.vue'

const routes = [
  { path: '/', component: Beranda },
  { path: '/pemesanan', component: Pemesanan },
]

const router = createRouter({
  // history: createMemoryHistory(),
  history: createWebHistory(),
  routes,
})

export default router;