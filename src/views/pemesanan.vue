<script setup>
import { ref } from "vue";
import NavbarFormComponent from "../components/NavbarFormComponent.vue";
import DataDiriForm from "./DataDiriForm.vue";
import LayananForm from "./LayananForm.vue";
import PemesananForm from "./PemesananForm.vue";

const formData = ref({
  slide: 1,
});

const handleFormSubmit = (data) => {
  formData.value = { ...formData.value, ...data };
};
</script>

<template>
  <div class="min-h-screen p-8 md:p-20">
    <div class="text-white text-center mt-10">
      <h1 class="text-4xl md:text-5xl font-semibold mb-5">
        FORMULIR PEMESANAN
      </h1>
      <p class="text-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, eveniet.
      </p>
    </div>

    <div class="border rounded mt-10 bg-slate-50">
      <NavbarFormComponent :count="formData.slide" />
      <DataDiriForm
        @submitForm="handleFormSubmit"
        :formData="formData"
        :slide="formData.slide"
      />
      <LayananForm
        @submitForm="handleFormSubmit"
        :formData="formData"
        :slide="formData.slide"
      />
      <template v-if="formData.slide == 3">
        <PemesananForm
          @submitForm="handleFormSubmit"
          :formData="formData"
          :slide="formData.slide"
        />
      </template>
    </div>
  </div>
</template>

<style>
[data-carousel-item] {
  position: relative;
  height: 50vh;
}
</style>
