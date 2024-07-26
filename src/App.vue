<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import store from "./auth/auth";

const authStore = store();

onMounted(() => {
  initFlowbite();
  authStore.load();
});

</script>

<template>
  <router-view />
</template>
