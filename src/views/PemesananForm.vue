<script setup>
import { defineEmits, ref } from "vue";

const emit = defineEmits(["submitForm"]);

const formData = ref({});

const props = defineProps({
  slide: Number,
  formData: Object,
});

const handleSubmit = (button) => {
  if (button == "next") {
    emit("submitForm", formData.value);
    formData.value = { ...formData.value, slide: 4 };
  } else {
    emit("submitForm", formData.value);
    formData.value = { ...formData.value, slide: 2 };
  }
};
</script>

<template>
  <div :class="props.slide == 3 ? 'w-full mx-auto p-10' : 'hidden'">
    <form @submit.prevent="handleSubmit">
      <div class="mb-5 pb-5 border-b">
        <div class="mb-5">
          <h1 class="font-semibold text-lg">Informasi Pribadi</h1>
        </div>
        <div class="grid grid-cols-2 gap-5 mb-5">
          <div class="">
            <label
              for="nama_lengkap"
              class="block mb-2 text-sm text-gray-900 dark:text-white"
              >Nama Lengkap</label
            >
            <input
              type="text"
              id="nama_lengkap"
              class="bg-transparent border-0 text-gray-900 text-xl font-semibold p-0"
              :value="props.formData.nama_lengkap"
              disabled
            />
          </div>
          <div class="">
            <label
              for="email"
              class="block mb-2 text-sm text-gray-900 dark:text-white"
              >Email</label
            >
            <input
              type="email"
              id="email"
              class="bg-transparent border-0 text-gray-900 text-xl font-semibold p-0"
              :value="props.formData.email"
              disabled
            />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-5 mb-5">
          <div class="">
            <label
              for="alamat"
              class="block mb-2 text-sm text-gray-900 dark:text-white"
              >Alamat</label
            >
            <input
              type="text"
              id="alamat"
              class="bg-transparent border-0 text-gray-900 text-xl font-semibold p-0"
              :value="props.formData.alamat"
              disabled
            />
          </div>
          <div class="">
            <label
              for="no_telp"
              class="block mb-2 text-sm text-gray-900 dark:text-white"
              >No. Telp</label
            >
            <input
              type="number"
              id="no_telp"
              class="bg-transparent border-0 text-gray-900 text-xl font-semibold p-0"
              :value="props.formData.no_telp"
              disabled
            />
          </div>
        </div>
      </div>
      <div class="mb-5 pb-5 border-b">
        <div class="mb-5">
          <h1 class="font-semibold text-lg">Informasi Layanan</h1>
        </div>
        <div class="grid grid-cols-3 gap-5 mb-5">
          <div class="">
            <label
              for="tipe_mobil"
              class="block mb-2 text-sm text-gray-900 dark:text-white"
              >Tipe Mobil</label
            >
            <input
              type="text"
              id="tipe_mobil"
              class="bg-transparent border-0 text-gray-900 text-xl font-semibold p-0"
              :value="props.formData.tipe_mobil"
              disabled
            />
          </div>
          <div class="">
            <label
              for="jenis_layanan"
              class="block mb-2 text-sm text-gray-900 dark:text-white"
              >Jenis Layanan</label
            >
            <input
              type="text"
              id="jenis_layanan"
              class="bg-transparent border-0 text-gray-900 text-xl font-semibold p-0"
              :value="props.formData.jenis_layanan"
              disabled
            />
          </div>
          <div class="">
            <label
              for="harga_layanan"
              class="block mb-2 text-sm text-gray-900 dark:text-white"
              >Harga Layanan</label
            >
            <div class="flex">
              <p class="text-bold me-2">Rp</p>
              <input
                type="number"
                id="harga_layanan"
                class="bg-transparent border-0 text-gray-900 text-xl font-semibold p-0"
                :value="props.formData.harga_layanan"
                disabled
              />
            </div>
          </div>
        </div>
        <div class="">
          <div class="mb-5">
            <label
              for="jenis_layanan"
              class="block mb-2 text-sm text-gray-900 dark:text-white"
              >Deskripsi</label
            >
            <input
              type="text"
              id="jenis_layanan"
              class="bg-transparent border-0 text-gray-900 text-xl font-semibold p-0"
              :value="props.formData.deskripsi"
              disabled
            />
          </div>
        </div>
      </div>
      <div class="mt-10 flex justify-end">
        <button
          type="submit"
          @click="handleSubmit('prev')"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm me-2 sm:w-full md:w-fit px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Kembali
        </button>
        <button
          type="submit"
          @click="handleSubmit('next')"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm ms-2 sm:w-full md:w-fit px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit Pemesanan
        </button>
      </div>
    </form>
  </div>
</template>
