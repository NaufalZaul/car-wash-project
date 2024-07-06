<script setup>
import { defineEmits, ref } from "vue";

const emit = defineEmits(["submitForm"]);

const formData = ref({
  slide: 2,
});

const props = defineProps({
  slide: Number,
  formData: Object,
});

const handleSubmit = () => {
  emit("submitForm", formData.value);
};
</script>

<template>
  <div :class="props.slide == 1 ? 'w-full mx-auto p-10' : 'hidden'">
    <form @submit.prevent="handleSubmit">
      <div class="">
        <div class="mb-5">
          <h1 class="font-semibold text-lg">Informasi Pribadi</h1>
        </div>
        <div class="grid grid-cols-2 gap-5 mb-5">
          <div class="">
            <label
              for="nama_lengkap"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Nama Lengkap</label
            >
            <input
              type="text"
              id="nama_lengkap"
              v-model="formData.nama_lengkap"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tuliskan nama lengkapmu"
            />
          </div>
          <div class="">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Email</label
            >
            <input
              type="email"
              id="email"
              v-model="formData.email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tuliskan emailmu"
            />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-5 mb-5">
          <div class="">
            <label
              for="alamat"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Alamat</label
            >
            <input
              type="text"
              id="alamat"
              v-model="formData.alamat"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tuliskan alamat lengkapmu"
            />
          </div>
          <div class="">
            <label
              for="no_telp"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >No. Telp</label
            >
            <input
              type="number"
              id="no_telp"
              v-model="formData.no_telp"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tuliskan nomor telepon"
            />
          </div>
        </div>

        <div class="mt-10 text-end">
          <button
            type="submit"
            @click="handleSubmit('next')"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-full md:w-fit px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Selesai & Bayarkan
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
