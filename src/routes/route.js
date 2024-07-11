import Beranda from '@/views/beranda.vue';
import Pemesanan from '@/views/pemesanan.vue';
import Login from '@/views/admin/Login.vue';
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import HalamanAdmin from '@/views/admin/HalamanAdmin.vue';
import BerandaAdmin from '@/views/admin/BerandaAdmin.vue';
import LayananAdmin from '@/views/admin/LayananAdmin.vue';
import LayananLainAdmin from '@/views/admin/LayananLainAdmin.vue';

// import HomeView from './HomeView.vue'
// import AboutView from './AboutView.vue'

const routes = [
  { path: '/', component: Beranda },
  { path: '/pemesanan', component: Pemesanan },
  { path: '/login', component: Login },
  { path: '/admin', component: BerandaAdmin, },
  { path: '/admin/layanan', component: LayananAdmin, },
  { path: '/admin/layanan-lain', component: LayananLainAdmin, },
]


const router = createRouter({
  // history: createMemoryHistory(),
  history: createWebHistory(),
  routes,
})

export default router;