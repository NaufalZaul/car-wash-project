<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import { RouterView } from "vue-router";

onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div id="app" class="bg-slate-950">
    <NavbarComponent />
    <RouterView />
    <FooterComponent />
  </div>
</template>
