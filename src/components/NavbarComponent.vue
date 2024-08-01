<script setup>
import store from "@/auth/auth";
import { onMounted, onUnmounted, ref } from "vue";
import { RouterLink } from "vue-router";

let activeNavbar = ref(false);
let toggleClickMenu = ref(false);

const authStore = store();

const scrollingNavbar = () => {
  activeNavbar.value = window.scrollY > 0;
};

const activeAfterClick = () => {
  toggleClickMenu.value = !toggleClickMenu.value;
};

onMounted(() => {
  window.addEventListener("scroll", scrollingNavbar);
});

onUnmounted(() => {
  window.removeEventListener("scroll", scrollingNavbar);
});
</script>

<template>
  <nav
    id="navbar-component sticky-banner"
    tabindex="-1"
    :class="[
      'fixed top-0 start-0 z-50 w-full',
      {
        'bg-transparent': !(activeNavbar || toggleClickMenu),
        'bg-slate-700 shadow': activeNavbar || toggleClickMenu,
      },
    ]"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <RouterLink
        to="/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <h1 class="font-bold text-3xl text-white">GLOWMAXX</h1>
      </RouterLink>
      <button
        v-on:click="activeAfterClick"
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden md:flex md:items-center">
        <div class="flex">
          <div
            class="bg-red-100 text-red-800 text-sm font-medium px-5 py-2.5 rounded-l-full dark:bg-red-900 dark:text-red-300 flex items-center h-fit"
          >
            <img
              class="me-2"
              width="18"
              height="18"
              src="https://img.icons8.com/ios-filled/150/991b1b/clock--v1.png"
              alt="clock--v1"
            />
            Tutup
          </div>
          <button
            id="dropdownDividerButton"
            data-dropdown-toggle="dropdownDivider"
            class="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-r-full text-sm px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            Jadwal Harian<svg
              class="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        </div>

        <div
          id="dropdownDivider"
          class="z-10 hidden bg-white rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200 divide-y divide-gray-100"
            aria-labelledby="dropdownDividerButton"
          >
            <li>
              <div class="block px-4 py-2">
                <h6>Senin - Sabtu</h6>
                <p class="font-normal mt-1">09.00 - 22.00 WIB</p>
              </div>
            </li>
            <li>
              <div class="block px-4 py-2">
                <h6>Minggu</h6>
                <p class="font-normal mt-1">09.00 - 15.00 WIB</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="hidden w-full md:flex md:w-auto bg-transparent"
        id="navbar-default"
      >
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-transparent md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <template v-if="!!authStore.token && authStore.role == 'user'">
            <li class="my-1 md:my-0">
              <RouterLink
                to="/pemesanan"
                class="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center"
                aria-current="page"
              >
                Pemesanan pencucian
              </RouterLink>
            </li>
            <li class="my-1 md:my-0">
              <RouterLink
                to="/kelola-pemesanan"
                class="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center"
                aria-current="page"
              >
                Pesanan saya
              </RouterLink>
            </li>
            <li class="my-1 md:my-0">
              <RouterLink
                to="/login"
                @click="authStore.logout()"
                class="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center"
                aria-current="page"
              >
                Logout
              </RouterLink>
            </li>
          </template>
          <template v-if="authStore.token == null">
            <li>
              <RouterLink
                to="/login"
                class="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center"
                aria-current="page"
              >
                <img
                  class="me-2"
                  width="23"
                  height="23"
                  src="https://img.icons8.com/windows/128/ffffff/share.png"
                  alt="share"
                />
                Login
              </RouterLink>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>
