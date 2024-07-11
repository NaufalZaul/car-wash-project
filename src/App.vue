<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import { RouterView } from "vue-router";
import HalamanAdmin from "./views/admin/HalamanAdmin.vue";

onMounted(() => {
  initFlowbite();
});

const segmentURL = window.location.pathname
  .split("/")
  .find((segment) => segment == "admin");

const segmentURLLogin = window.location.pathname
  .split("/")
  .find((segment) => segment == "login");
</script>

<template>
  <div id="app" class="bg-slate-950">
    <template v-if="segmentURL == undefined && segmentURLLogin == undefined">
      <NavbarComponent />
      <RouterView />
      <FooterComponent />
    </template>
    <template v-if="segmentURL !== undefined && segmentURLLogin == undefined">
      <HalamanAdmin />
    </template>
    <template v-if="segmentURLLogin == 'login'">
      <RouterView />
    </template>
  </div>
</template>
