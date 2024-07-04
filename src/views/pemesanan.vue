<script setup>
import { ref } from "vue";
import NavbarFormComponent from "../components/NavbarFormComponent.vue";
import DataDiriForm from "./DataDiriForm.vue";
import LayananForm from "./LayananForm.vue";
import PemesananForm from "./PemesananForm.vue";

const formData = ref({
  number: 1,
});

const handleFormSubmit = (data) => {
  formData.value = data;
};
</script>

<template>
  <div class="min-h-screen p-20">
    <div class="text-white text-center mt-10">
      <h1 class="text-5xl font-semibold mb-5">Lorem ipsum dolor sit amet.</h1>
      <p class="text-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, eveniet.
      </p>
    </div>

    <div class="border rounded mt-10 bg-slate-50">
      <NavbarFormComponent :count="formData.number" />

      <!-- DATA DIRI -->
      <DataDiriForm @submitForm="handleFormSubmit" :slide="formData.number" />

      <!-- DATA DIRI -->

      <!-- LAYANAN -->
      <LayananForm @submitForm="handleFormSubmit" :slide="formData.number" />

      <!-- LAYANAN -->

      <!-- PEMESANAN -->
      <PemesananForm @submitForm="handleFormSubmit" :slide="formData.number" />

      <!-- PEMESANAN -->

      <!-- PEMBAYARAN -->
      <div class="md:hidden w-full mx-auto p-5 flex">
        <div class="w-[45%] h-auto bg-blue-600 text-white rounded-s-lg p-6">
          <div class="h-auto">
            <div class="mb-5">
              <h5 class="font-bold">Jenis Layanan</h5>
              <p class="">EXPRESS GLOW</p>
            </div>
            <div class="mb-5">
              <h5 class="font-bold">Layanan</h5>
              <p class="col-span-5">Cuci Interior dan Cuci Exterior</p>
            </div>
            <div class="mb-5">
              <h5 class="font-bold">Jumlah Kendaraan</h5>
              <p class="">4</p>
            </div>
            <div class="mb-5">
              <h5 class="font-bold">Tanggal</h5>
              <p class="col-span-5">20/05/2024</p>
            </div>
            <div class="">
              <h5 class="font-bold">Waktu</h5>
              <p class="col-span-5">20:30</p>
            </div>
          </div>
        </div>

        <form class="w-full bg-blue-100 max-h-[40rem] p-5 rounded-e-lg">
          <div class="mb-5 border rounded-lg p-4 bg-slate-50">
            <h1 class="font-bold mb-2">Informasi Pribadi</h1>
            <div class="grid grid-cols-3 gap-5">
              <div class="">
                <h5 class="font-semibold">Nama</h5>
                <p class="">Naufal Zaul Karim</p>
              </div>
              <div class="">
                <h5 class="font-semibold">Email</h5>
                <p class="">naufalzaulkarim@gmail.com</p>
              </div>
              <div class="">
                <h5 class="font-semibold">No. Telp</h5>
                <p class="">0928023940923</p>
              </div>
              <div class="col-span-2">
                <h5 class="font-semibold">Alamat</h5>
                <p class="">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, excepturi!
                </p>
              </div>
              <div class="">
                <h5 class="font-semibold">Total pembayaran</h5>
                <p class="">Rp 50.000</p>
              </div>
            </div>
          </div>
          <div class="mb-5">
            <label class="block mb-2 font-medium text-gray-900 dark:text-white"
              >Metode Pembayaran</label
            >
            <button
              id="dropdownRadioButton"
              data-dropdown-toggle="dropdownDefaultRadio"
              class="w-full text-sm text-gray-500 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 px-5 py-2.5 text-center inline-flex items-center justify-between"
              type="button"
            >
              Pilih Metode Pembayaran
              <svg
                class="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <!-- Dropdown menu -->
            <div
              id="dropdownDefaultRadio"
              class="z-10 hidden w-1/3 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownRadioButton"
              >
                <li>
                  <div class="flex items-center">
                    <p
                      class="ms-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                    >
                      Virtual Account
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    class="flex items-center justify-between border p-2 rounded-lg"
                  >
                    <div class="col-span-2 flex items-center">
                      <input
                        id="default-radio-1"
                        type="radio"
                        value=""
                        name="default-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        for="default-radio-1"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >BRI Virtual Account</label
                      >
                    </div>
                    <div class="">
                      <img
                        src="/public/lowongan-kerja-bank-bri.png"
                        class="w-20"
                        alt=""
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <p
                      class="ms-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                    >
                      Transfer Bank
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    class="flex items-center justify-between border p-2 rounded-lg"
                  >
                    <div class="col-span-2 flex items-center">
                      <input
                        id="default-radio-1"
                        type="radio"
                        value=""
                        name="default-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        for="default-radio-1"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >Transfer BRI</label
                      >
                    </div>
                    <div class="">
                      <img
                        src="/public/lowongan-kerja-bank-bri.png"
                        class="w-20"
                        alt=""
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <p
                      class="ms-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                    >
                      Pembayaran Lainnya
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    class="flex items-center justify-between border p-2 rounded-lg"
                  >
                    <div class="col-span-2 flex items-center">
                      <input
                        id="default-radio-1"
                        type="radio"
                        value=""
                        name="default-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        for="default-radio-1"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >Gopay</label
                      >
                    </div>
                    <div class="">
                      <img
                        src="/public/dRNzzS17nfiafonStDGR(1).png"
                        class="w-20"
                        alt=""
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="mb-5">
            <label
              for="default-search"
              class="block mb-2 font-medium text-gray-900 dark:text-white"
              >Total Pembayaran</label
            >
            <div class="relative">
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-sm text-gray-500 dark:text-gray-400"
              >
                Rp
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Search Mockups, Logos..."
              />
            </div>
          </div>

          <div class="mt-10">
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Selesai & Bayarkan
            </button>
          </div>
        </form>
      </div>
      <!-- PEMBAYARAN -->
    </div>
  </div>
</template>
