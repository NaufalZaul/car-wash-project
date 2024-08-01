<script setup>
import submitBooking from "@/controllers/BookingController";
import {
  getJenisLayanan,
  getLayananTambahan,
} from "@/controllers/PemesananController";
import { defineEmits, onMounted, ref } from "vue";

let dataLayanan = {
  service_type: "data layanan aja",
  price: 9988765,
};
let dataLayananTambahan = {
  merk_kaca: "data layanan banyak",
  harga: 12345678,
};
const dataFetched = ref(true);

const formData = ref({
  nama_lengkap: "Naufal Zaul Karim",
  email: "naufalzaulkarim@gmail.com",
  alamat:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, debitis.",
  no_telp: 123456768454234,
  tipe_mobil: "Mobil avanza",
  deskripsi:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, debitis.",
});

// let dataLayanan = null;
// let dataLayananTambahan = null;
// const formData = ref({});
// const dataFetched = ref(false);

const props = defineProps({
  slide: Number,
  formData: Object,
});

onMounted(async () => {
  dataLayanan = await getJenisLayanan(props.formData);
  dataLayananTambahan = await getLayananTambahan(props.formData);
  console.log(dataLayanan);
  if (dataLayanan != {} && dataLayananTambahan != {})
    return (dataFetched.value = true);
});

const emit = defineEmits(["submitForm"]);

const handleSubmit = async (button) => {
  if (button == "next") {
    emit("submitForm", formData.value);
    formData.value = {
      ...props.formData,
      ...dataLayanan,
      ...dataLayananTambahan,
    };
    submitBooking(formData.value);
  } else {
    emit("submitForm", formData.value);

    formData.value = {
      ...props.formData,
      slide: 2,
      ...dataLayanan,
      ...dataLayananTambahan,
    };
  }
};
</script>

<template>
  <div :class="props.slide == 3 ? 'w-full mx-auto p-6 md:p-10 ' : 'hidden'">
    <div class="bg-white md:w-3/4 mx-auto mb-5 p-5 rounded">
      <div class="md:flex justify-between mb-5 pb-3 border-b">
        <div class="md:w-2/5">
          <h1 class="font-bold text-xl mb-2">GLOWMAXX Garage Madiun</h1>
          <p class="text-sm md:text-base">
            Jl. Raya Tiron No.54, Kuwek, Nglames
          </p>
          <p class="text-sm md:text-base">Kec. Madiun, Kabupaten Madiun</p>
          <p class="text-sm md:text-base">Kode Pos: 63151</p>
        </div>
        <div class="mt-6 text-sm md:text-base md:w-2/5 md:mt-0">
          <div class="flex items-center mb-1">
            <p class="font-medium w-24">Tanggal</p>
            <p class="col-span-2">: {{ props.formData.tanggal_pencucian }}</p>
          </div>
          <div class="flex items-center mb-1">
            <p class="font-medium w-24">Waktu</p>
            <p class="col-span-2">: {{ props.formData.waktu_pencucian }}</p>
          </div>
        </div>
      </div>
      <div class="">
        <div class="mb-6">
          <div class="flex flex-col md:flex-row md:items-center mb-1">
            <p class="font-medium w-24">Nama</p>
            <p class="col-span-2">: {{ props.formData.nama_lengkap }}</p>
          </div>
          <div
            class="flex flex-col md:flex-row md:items-center mb-1 mt-5 md:mt-0"
          >
            <p class="font-medium w-24">Email</p>
            <p class="col-span-2">: {{ props.formData.email }}</p>
          </div>
          <div
            class="flex flex-col md:flex-row md:items-center mb-1 mt-5 md:mt-0"
          >
            <p class="font-medium w-24">No. Telp</p>
            <p class="col-span-2">: {{ props.formData.no_telp }}</p>
          </div>
          <div
            class="flex flex-col md:flex-row md:items-center mb-1 mt-5 md:mt-0"
          >
            <p class="font-medium w-24">Alamat</p>
            <p class="col-span-2">: {{ props.formData.alamat }}</p>
          </div>
          <div
            class="flex flex-col md:flex-row md:items-center mb-1 mt-5 md:mt-0"
          >
            <p class="font-medium w-24">Deskripsi</p>
            <p class="col-span-2">: {{ props.formData.deskripsi }}</p>
          </div>
        </div>
        <div class="relative overflow-x-auto">
          <table
            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-3">Tipe Mobil</th>
                <th scope="col" class="px-6 py-3">Layanan</th>
                <th scope="col" class="px-6 py-3">Harga</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                v-if="dataFetched && !!dataLayanan"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{ props.formData.tipe_mobil }}
                </th>
                <td class="px-6 py-4">{{ dataLayanan.service_type }}</td>
                <td class="px-6 py-4">{{ dataLayanan.price }}</td>
              </tr>
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                v-if="dataFetched && !!dataLayananTambahan"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{ props.formData.tipe_mobil }}
                </th>
                <td class="px-6 py-4">{{ dataLayananTambahan.merk_kaca }}</td>
                <td class="px-6 py-4">{{ dataLayananTambahan.harga }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="mt-10 flex justify-end">
      <form @submit.prevent="handleSubmit">
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
      </form>
    </div>

    <!-- <form @submit.prevent="handleSubmit">
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
              name="name"
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
              name="phone"
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
          <div class="" v-if="dataFetched">
            <label
              for="jenis_layanan"
              class="block mb-2 text-sm text-gray-900 dark:text-white"
              >Jenis Layanan</label
            >
            <input
              type="text"
              id="jenis_layanan"
              name="id_service"
              class="bg-transparent border-0 text-gray-900 text-xl font-semibold p-0"
              :value="dataLayanan.service_type"
              disabled
            />
          </div>
          <div class="" v-if="dataFetched">
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
                :value="dataLayanan.price"
                disabled
              />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-5 mb-5">
          <template v-if="!!dataLayananTambahan">
            <div class="" v-if="dataFetched">
              <label
                for="jenis_layanan"
                class="block mb-2 text-sm text-gray-900 dark:text-white"
                >Merk Kaca</label
              >
              <input
                type="text"
                id="jenis_layanan"
                name="id_service"
                class="bg-transparent border-0 text-gray-900 text-xl font-semibold p-0"
                :value="dataLayananTambahan.merk_kaca"
                disabled
              />
            </div>
            <div class="" v-if="dataFetched">
              <label
                for="harga_layanan"
                class="block mb-2 text-sm text-gray-900 dark:text-white"
                >Harga Layanan Tambahan</label
              >
              <div class="flex">
                <p class="text-bold me-2">Rp</p>
                <input
                  type="number"
                  id="harga_layanan"
                  class="bg-transparent border-0 text-gray-900 text-xl font-semibold p-0"
                  :value="dataLayananTambahan.harga"
                  disabled
                />
              </div>
            </div>
          </template>
          <div class="mb-5">
            <label
              for="deskripsi"
              class="block mb-2 text-sm text-gray-900 dark:text-white"
              >Deskripsi</label
            >
            <input
              type="text"
              id="deskripsi"
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
    </form> -->
  </div>
</template>
