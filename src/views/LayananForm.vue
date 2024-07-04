<script setup>
import { defineEmits, ref } from "vue";

const emit = defineEmits(["submitForm"]);

const formData = ref({
  name: "",
  number: 3,
});

const props = defineProps({
  slide: Number,
});

const handleSubmit = () => {
  emit("submitForm", formData.value);
};
</script>

<template>
  <div :class="props.slide == 2 ? 'w-full mx-auto p-10' : 'hidden'">
    <form @submit.prevent="handleSubmit">
      <div class="">
        <div class="mb-5">
          <h1 class="font-semibold text-lg">Informasi Kendaraan</h1>
        </div>
        <div class="w-1/2 grid grid-cols-3 gap-5 mb-5">
          <div class="col-span-2">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Tipe Mobil</label
            >
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Pilih tipe mobil</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div class="col-1">
            <label
              for="durasi"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Durasi</label
            >
            <input
              type="date"
              id="durasi"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Durasi pengerjaan"
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
            <li>
              <input
                type="radio"
                id="express-glow"
                name="layanan"
                value="express-glow"
                class="hidden peer"
              />
              <label
                for="express-glow"
                class="inline-flex justify-between w-full h-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div class="block">
                  <div class="w-full text-lg font-semibold">
                    Rp 25.000 - Rp 40.000
                  </div>
                  <div class="w-full font-medium mb-3">Express Glow</div>
                  <div class="w-full">Cuci Interior & Cuci Exterior</div>
                </div>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="hidrolik-glow"
                name="layanan"
                value="hidrolik-glow"
                class="hidden peer"
              />
              <label
                for="hidrolik-glow"
                class="inline-flex justify-between w-full h-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div class="block">
                  <div class="w-full text-lg font-semibold">
                    Rp 35.000 - Rp 50.000
                  </div>
                  <div class="w-full font-medium mb-3">Hidrolik Glow</div>
                  <div class="w-full">
                    Cuci Interior, Cuci Exterior, Vacum Cleaner, Semir Ban
                  </div>
                </div>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="extra-glow"
                name="layanan"
                value="extra-glow"
                class="hidden peer"
              />
              <label
                for="extra-glow"
                class="inline-flex justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div class="block">
                  <div class="w-full text-lg font-semibold">
                    Rp 65.000 - Rp 80.000
                  </div>
                  <div class="w-full font-medium mb-3">Extra Glow</div>
                  <div class="w-full">
                    Cuci Interior, Cuci Exterior, Vacum Cleaner, Semir Ban,
                    Glowmax Protection (body & kaca)
                  </div>
                </div>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="cuci-motor"
                name="layanan"
                value="cuci-motor"
                class="hidden peer"
              />
              <label
                for="cuci-motor"
                class="inline-flex justify-between w-full h-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div class="block">
                  <div class="w-full text-lg font-semibold">
                    Rp 15.000 - Rp 20.000
                  </div>
                  <div class="w-full font-medium mb-3">Cuci Motor</div>
                  <div class="w-full">
                    <p>Motor Kecil : Rp 15.000</p>
                    <p>Motor Besar : Rp 20.000</p>
                  </div>
                </div>
              </label>
            </li>
          </ul>
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
