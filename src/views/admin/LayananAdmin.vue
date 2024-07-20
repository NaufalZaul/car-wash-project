<script setup>
import { ref } from "vue";
import ModalTambahLayananComponent from "@/components/ModalTambahLayananComponent.vue";
import ModalTambahKacaComponent from "@/components/ModalTambahKacaComponent.vue";
import ModalEditLayananComponent from "@/components/ModalEditLayananComponent.vue";
import ModalEditKacaComponent from "@/components/ModalEditKacaComponent.vue";
import ModalHapusLayananComponent from "@/components/ModalHapusLayananComponent.vue";
import ModalHapusKacaComponent from "@/components/ModalHapusKacaComponent.vue";

let dataService = [];
let dataPackage = [];
let dataFetched = ref(false);

const getDataService = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/services");
    const result = await response.json();
    if (response.ok) {
      result.data.data.find((item) => {
        dataService.push(item);
      });
      dataFetched.value = true;
    } else {
      console.error("Error fetching services");
    }
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};

const getDataPackage = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/package");
    const result = await response.json();
    if (response.ok) {
      result.data.data.find((item) => {
        dataPackage.push(item);
      });
      dataFetched.value = true;
    } else {
      console.error("Error fetching services");
    }
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};
getDataPackage();
getDataService();
</script>

<template>
  <section class="dark:bg-gray-900">
    <div class="p-4 mx-auto max-w-screen-xl">
      <div
        class="bg-gray-50 dark:bg-gray-800 border border-gray-200 mb-10 dark:border-gray-700 rounded-lg p-8 md:p-12"
      >
        <div class="">
          <h1
            class="text-gray-900 dark:text-white text-3xl md:text-3xl font-extrabold mb-2"
          >
            Kelola data layanan
          </h1>
          <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
            Mengelola seluruh data jenis layanan pada website
          </p>
          <ModalTambahLayananComponent />
        </div>
        <div class="relative overflow-x-auto">
          <table
            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-3">ID Layanan</th>
                <th scope="col" class="px-6 py-3">Tipe Mobil</th>
                <th scope="col" class="px-6 py-3">Jenis Layanan</th>
                <th scope="col" class="px-6 py-3">Harga</th>
                <th scope="col" class="px-6 py-3">Deskripsi</th>
                <th scope="col" class="px-6 py-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody v-if="dataFetched">
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                v-for="data in dataService"
                :key="data.id"
              >
                <td class="px-6 py-4">{{ data.id }}</td>
                <td class="px-6 py-4">{{ data.car_type }}</td>
                <td class="px-6 py-4">{{ data.service_type }}</td>
                <td class="px-6 py-4">{{ data.price }}</td>
                <td class="px-6 py-4">{{ data.description }}</td>
                <td class="px-6 py-4 text-center flex items-center">
                  <ModalEditLayananComponent :dataID="data.id" />
                  <ModalHapusLayananComponent :dataID="data.id" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div
        class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12"
      >
        <div class="">
          <h1
            class="text-gray-900 dark:text-white text-3xl md:text-3xl font-extrabold mb-2"
          >
            Kelola data layanan tambahan
          </h1>
          <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
            Mengelola seluruh data jenis layanan tambahan pada website
          </p>
          <ModalTambahKacaComponent />
        </div>
        <div class="relative overflow-x-auto">
          <table
            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-3">ID Layanan</th>
                <th scope="col" class="px-6 py-3">Merk Kaca</th>
                <th scope="col" class="px-6 py-3">Jenis Kaca</th>
                <th scope="col" class="px-6 py-3">Harga</th>
                <th scope="col" class="px-6 py-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody v-if="dataFetched">
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                v-for="data in dataPackage"
                :key="data.id"
              >
                <td class="px-6 py-4">{{ data.id }}</td>
                <td class="px-6 py-4">{{ data.merk_kaca }}</td>
                <td class="px-6 py-4">{{ data.jenis_kaca }}</td>
                <td class="px-6 py-4">{{ data.harga }}</td>
                <td class="px-6 py-4 text-center flex items-center">
                  <ModalEditKacaComponent :dataID="data.id" />
                  <ModalHapusKacaComponent :dataID="data.id" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
