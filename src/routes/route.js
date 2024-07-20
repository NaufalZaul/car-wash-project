import Beranda from '@/views/beranda.vue';
import Pemesanan from '@/views/pemesanan.vue';
import Login from '@/views/admin/Login.vue';
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import HalamanAdmin from '@/views/admin/HalamanAdmin.vue';
import BerandaAdmin from '@/views/admin/BerandaAdmin.vue';
import LayananAdmin from '@/views/admin/LayananAdmin.vue';
import store from '@/auth/auth';

const routes = [
  { path: '/', component: Beranda, name: 'beranda' },
  { path: '/pemesanan', component: Pemesanan, name: 'pemesanan' },
  { path: '/login', component: Login, name: 'login' },
  { path: '/admin', component: BerandaAdmin, name: 'beranda-admin' },
  { path: '/admin/layanan', component: LayananAdmin, name: 'layanan-admin' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = store();
  authStore.load()
  // authStore.logout()

  if (!authStore.token) {
    if (to.name == 'beranda' || to.name == 'pemesanan' || to.name == 'login') {
      next()
    } else {
      next({ name: 'login' });
    }
  } else if (!!authStore.token) {
    next();
  }
})

export default router;