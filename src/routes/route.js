import Beranda from '@/views/beranda.vue';
import Pemesanan from '@/views/pemesanan.vue';
import Login from '@/views/admin/Login.vue';
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import BerandaAdmin from '@/views/admin/BerandaAdmin.vue';
import LayananAdmin from '@/views/admin/LayananAdmin.vue';
import store from '@/auth/auth';
import Register from '@/views/admin/Register.vue';
import KelolaDataPesanan from '@/views/KelolaDataPesanan.vue';
import LayoutUsingNavbar from '@/views/layout/LayoutUsingNavbar.vue';
import LayoutUsingSidebar from '@/views/layout/LayoutUsingSidebar.vue';

const routes = [
  { path: '/login', component: Login, name: 'login' },
  { path: '/register', component: Register, name: 'register' },
  {
    path: '/',
    component: LayoutUsingNavbar,
    name: 'user',
    children: [
      { path: '', component: Beranda, name: 'beranda' },
      { path: 'pemesanan', component: Pemesanan, name: 'pemesanan' },
    ]
  },
  {
    path: '/kelola-pemesanan',
    component: LayoutUsingSidebar,
    children: [
      { path: '', component: KelolaDataPesanan, name: 'kelola-pemesanan' },
    ]
  },
  {
    path: '/admin',
    component: LayoutUsingSidebar,
    name: 'admin',
    children: [
      { path: '', component: BerandaAdmin, name: 'beranda-admin' },
      { path: 'layanan', component: LayananAdmin, name: 'layanan-admin' },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = store();
  const role = authStore.role;
  authStore.load()
  // authStore.logout()

  const publicPage = ['login', 'register', 'beranda'];
  const publicRequired = publicPage.includes(to.name);

  const userPage = ['beranda', 'pemesanan', 'kelola-pemesanan'];
  const userRequired = userPage.includes(to.name);

  const adminPage = ['beranda-admin', 'layanan-admin'];
  const adminRequired = adminPage.includes(to.name);


  if (!authStore.token) {
    if (publicRequired) {
      next()
    } else {
      next({ name: 'login' });
    }
  } else if (!!authStore.token) {
    next();
  }

  // if (role == 'user' && userRequired) {
  //   next();
  // } else if (role == 'admin' && adminRequired) {
  // } else {
  //   next({ name: 'beranda' });
  // }

  //   // if (to.name == 'beranda' ||
  //   //   to.name == 'pemesanan' ||
  //   //   to.name == 'login' ||
  //   //   to.name == 'register') {
  // // } else {
  // next({ name: 'login' });
  // // }
  // } else if (!!authStore.token) {
  //   next();
  // }
})

export default router;