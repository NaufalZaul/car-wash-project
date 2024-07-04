<script setup>
import { defineEmits, ref } from "vue";

const emit = defineEmits(["submitForm"]);

const formData = ref({
  name: "",
  number: 4,
});

const props = defineProps({
  slide: Number,
});

const handleSubmit = () => {
  emit("submitForm", formData.value);
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
              value="Jaka Tarub"
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
              value="kasdkajn@gmail.com"
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
              value="Lorem ipsum dolor sit amet."
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
              value="0988728374208374"
              disabled
            />
          </div>
        </div>
      </div>
      <div class="mb-5 pb-5 border-b">
        <div class="mb-5">
          <h1 class="font-semibold text-lg">Informasi Kendaraan</h1>
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
              value="Lorem, ipsum dolor."
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
              value="Lorem, ipsum dolor."
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
                value="20.000"
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
              value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, totam?"
              disabled
            />
          </div>
        </div>
      </div>
      <div class="">
        <div class="mb-5">
          <h1 class="font-semibold text-lg">Tangal dan Waktu</h1>
        </div>
        <div class="grid grid-cols-2 gap-5 mb-5">
          <div class="">
            <label
              for="tanggal_pencucian"
              class="block mb-2 text-sm text-gray-900 dark:text-white"
              >Tanggal Pemesanan</label
            >
            <input
              type="date"
              id="tanggal_pencucian"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
            />
          </div>
          <div class="">
            <label
              for="waktu_pencucian"
              class="block mb-2 text-sm text-gray-900 dark:text-white"
              >Waktu Pemesanan</label
            >
            <input
              type="time"
              id="waktu_pencucian"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
            />
          </div>
        </div>
      </div>
      <div class="mt-10 flex justify-end">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm me-2 sm:w-full md:w-fit px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Kembali
        </button>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm ms-2 sm:w-full md:w-fit px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit Pemesanan
        </button>
      </div>
    </form>
  </div>
</template>
