<script setup>
import { getDataPackage } from "@/controllers/AdminController";
import { getDataService } from "@/controllers/PemesananController";
import { defineEmits, onMounted, ref } from "vue";

let tipeMobil = [];
let layanan = [];
let layananTambahan = [];
const formData = ref({});

onMounted(async () => {
  let data = await getDataService();
  let dataPackage = await getDataPackage();

  tipeMobil = data.tipeMobil;
  layanan = data.layanan;
  layananTambahan = dataPackage;
});

function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
}

const emit = defineEmits(["submitForm"]);

const props = defineProps({
  slide: Number,
  formData: Object,
});
const handleSubmit = (button) => {
  if (button == "next") {
    emit("submitForm", formData.value);
    formData.value = { ...formData.value, slide: 3 };
  } else {
    emit("submitForm", formData.value);
    formData.value = { ...formData.value, slide: 1 };
  }
};
</script>

<template>
  <div :class="props.slide == 2 ? 'w-full mx-auto p-10' : 'hidden'">
    <form @submit.prevent="handleSubmit">
      <div class="">
        <div class="mb-5">
          <h1 class="font-semibold text-lg">Informasi Layanan</h1>
        </div>
        <div class="grid grid-cols-3 gap-5 mb-5">
          <div class="">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Tipe Mobil</label
            >
            <select
              id="countries"
              v-model="formData.tipe_mobil"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Pilih tipe mobil</option>
              <option
                v-for="(car, index) in tipeMobil"
                :key="index"
                :value="car"
              >
                {{ car }}
              </option>
            </select>
          </div>
          <div class="">
            <label
              for="tanggal_pencucian"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Tanggal Pemesanan</label
            >
            <input
              type="date"
              id="tanggal_pencucian"
              v-model="formData.tanggal_pencucian"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
            />
          </div>
          <div class="">
            <label
              for="waktu_pencucian"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Waktu Pemesanan</label
            >
            <input
              type="time"
              id="waktu_pencucian"
              v-model="formData.waktu_pencucian"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
            />
          </div>
        </div>
        <div class="mb-5">
          <div class="">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Deskripsi</label
            >
            <textarea
              id="message"
              rows="4"
              v-model="formData.deskripsi"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
        </div>
      </div>
      <div class="">
        <div class="mb-5">
          <h1 class="font-semibold text-lg">Jenis Layanan</h1>
        </div>
        <div class="mb-5">
          <ul class="grid w-full gap-3 md:grid-cols-4">
            <li v-for="(service, index) in layanan" :key="index">
              <input
                type="radio"
                :id="service.service_type + `-${index}`"
                name="jenis_layanan"
                :value="service.id"
                v-model="formData.jenis_layanan"
                class="hidden peer"
              />
              <label
                :for="service.service_type + `-${index}`"
                class="inline-flex justify-between w-full h-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-white peer-checked:bg-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div class="block">
                  <div class="w-full text-lg font-semibold">
                    {{ formatRupiah(service.price) }}
                  </div>
                  <div class="w-full font-medium mb-3">
                    {{ service.service_type }}
                  </div>
                  <div class="w-full">Cuci Interior & Cuci Exterior</div>
                </div>
              </label>
            </li>
          </ul>
        </div>
      </div>

      <div class="">
        <div class="mb-5">
          <h1 class="font-semibold text-lg">Jenis Layanan Tambahan</h1>
        </div>
        <div class="mb-5">
          <ul class="grid w-full gap-3 md:grid-cols-4">
            <li v-for="(item, index) in layananTambahan" :key="index">
              <input
                type="radio"
                :id="`tambahan-${index}`"
                name="jenis_layanan_tambahan"
                :value="item.id"
                v-model="formData.jenis_layanan_tambahan"
                class="hidden peer"
              />
              <label
                :for="`tambahan-${index}`"
                class="inline-flex justify-between w-full h-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-white peer-checked:bg-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div class="block">
                  <div class="w-full text-lg font-semibold">
                    {{ formatRupiah(item.harga) }}
                  </div>
                  <div class="w-full font-medium mb-3">
                    {{ item.jenis_kaca }}
                  </div>
                  <div class="w-full capitalize">{{ item.merk_kaca }}</div>
                </div>
              </label>
            </li>
          </ul>
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
