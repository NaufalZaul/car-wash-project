<script setup>
import { RouterView } from "vue-router";
import SidebarComponent from "@/components/SidebarComponent.vue";
import store from "@/auth/auth";
import { onMounted } from "vue";
</script>

<template>
  <div id="app" class="bg-slate-950">
    <SidebarComponent />

    <div class="sm:ml-64 p-4 min-h-screen">
      <RouterView />
    </div>
  </div>
</template>
