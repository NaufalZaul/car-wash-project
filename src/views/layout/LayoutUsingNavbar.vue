<script setup>
import { RouterView } from "vue-router";
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
  <div id="app" class="bg-slate-950">
    <NavbarComponent />

    <div class="min-h-screen">
      <RouterView />
    </div>
    <FooterComponent />
  </div>
</template>
