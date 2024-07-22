<script setup>
import {
  deleteDataBooking,
  exportToExcel,
  getDataBooking,
  getDataService,
} from "@/controllers/BerandaAdminController";
import { onMounted, ref } from "vue";

let dataBooking = [];
let dataService = [];
let dataFetched = ref(false);

let showModal = ref({
  getID: 0,
  delete: false,
});

const openModal = {
  getID: (id) => (showModal.value.getID = id),
  hapus: () => (showModal.value.delete = true),
  close: () => {
    showModal.value.delete = false;
  },
};

onMounted(async () => {
  dataService = await getDataService();

  if (dataService.length != 0) {
    dataBooking = await getDataBooking(dataService);
    dataFetched.value = true;
  }
});

const deleteData = async () => {
  await deleteDataBooking(showModal.value.getID);
};

const exportData = async () => {
  await exportToExcel();
};
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
            class="text-gray-900 dark:text-white text-3xl md:text-3xl font-extrabold mb-2"
          >
            Status Pencucian Kendaraan
          </h1>
          <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-5">
            Menampilkan seluruh data pemesanan pencucian mobil dan motor
          </p>
          <button
            type="button"
            @click="exportData"
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Export data
          </button>
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
                <th scope="col" class="px-6 py-3">Aksi</th>
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
                <td class="px-6 py-4">
                  <button
                    type="button"
                    @click="
                      openModal.hapus();
                      openModal.getID(data.id);
                    "
                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div
      v-if="showModal.delete"
      id="popup-modal"
      tabindex="-1"
      class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
    >
      <div class="relative p-4 w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal"
            @click="openModal.close"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="p-4 md:p-5 text-center">
            <svg
              class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3
              class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
            >
              Are you sure you want to delete this product?
              {{ showModal.getID }}
            </h3>
            <button
              data-modal-hide="popup-modal"
              @click="
                openModal.close;
                deleteData();
              "
              type="button"
              class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              Yes, I'm sure
            </button>
            <button
              data-modal-hide="popup-modal"
              @click="openModal.close"
              type="button"
              class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
