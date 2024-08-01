<script setup>
import store from "@/auth/auth";
import {
  deleteDataBooking,
  exportToExcel,
  getDataBooking,
  getDataService,
} from "@/controllers/BerandaAdminController";
import { onMounted, ref } from "vue";

let authStore = store();

let dataBooking = [];
let dataService = [];
let dataFetched = ref(false);

onMounted(async () => {
  dataService = await getDataService();

  if (dataService.length != 0) {
    dataBooking = await getDataBooking(dataService);
    dataFetched.value = true;
  }
});
</script>

<template>
  <section class="dark:bg-gray-900">
    <div class="p-4 mx-auto max-w-screen-xl">
      <div class="hidden grid md:grid-cols-2 gap-8 mb-8">
        <div
          class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12"
        >
          <h2 class="text-gray-900 dark:text-white text-3xl mb-2">
            Total Pemesanan
          </h2>
          <div class="h-full flex items-center">
            <h2
              class="text-gray-900 dark:text-white text-8xl font-bold mb-2 me-5"
            >
              {{ dataBooking.length }}
            </h2>
            <p
              class="text-2xl font-normal text-gray-500 dark:text-gray-400 mb-4"
            >
              pemesanan
            </p>
          </div>
        </div>
        <div
          class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12"
        >
          <h2 class="text-gray-900 dark:text-white text-3xl mb-2">
            Pemesanan Berhasil
          </h2>
          <div class="h-full flex items-center">
            <h2
              class="text-gray-900 dark:text-white text-8xl font-bold mb-2 me-5"
            >
              20
            </h2>
            <p
              class="text-2xl font-normal text-gray-500 dark:text-gray-400 mb-4"
            >
              pemesanan
            </p>
          </div>
        </div>
      </div>
      <div
        class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12"
      >
        <div class="mb-5">
          <h1
            class="text-gray-900 dark:text-white text-2xl md:text-3xl font-extrabold mb-2"
          >
            Status Pencucian Kendaraan
          </h1>
          <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-5">
            Menampilkan seluruh data pemesanan pencucian mobil dan motor
          </p>
        </div>

        <div class="relative overflow-x-auto">
          <table
            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-3">ID Booking</th>
                <th scope="col" class="px-6 py-3">Nama Lengkap</th>
                <th scope="col" class="px-6 py-3">Waktu</th>
                <th scope="col" class="px-6 py-3">Tanggal</th>
                <th scope="col" class="px-6 py-3">Tipe Mobil</th>
                <th scope="col" class="px-6 py-3">Jenis Layanan</th>
                <th scope="col" class="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody class="text-black" v-if="dataFetched">
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                v-for="data in dataBooking"
                :key="data.id"
              >
                <td class="px-6 py-4">{{ data.id }}</td>
                <td scope="row" class="px-6 py-4 whitespace-nowrap">
                  {{ data.name }}
                </td>
                <td class="px-6 py-4">{{ data.booking_time }}</td>
                <td class="px-6 py-4">{{ data.booking_date }}</td>
                <td class="px-6 py-4">{{ data.car_type }}</td>
                <td class="px-6 py-4">{{ data.service_type }}</td>
                <td class="px-6 py-4">{{ data.status }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
