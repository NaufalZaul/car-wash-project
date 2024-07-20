<script>
export default {
  props: {
    judul: String,
    harga: String,
    layanan: Array,
  },
};
</script>

<template>
  <div
    id="card-prize-component"
    class="p-4 bg-slate-950 rounded-lg shadow sm:p-5 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between"
  >
    <div class="">
      <h5 class="mb-3 text-lg font-medium text-gray-400 dark:text-gray-300">
        {{ judul }}
      </h5>
      <div class="flex items-baseline text-gray-900 dark:text-white">
        <span
          class="text-xl font-semibold me-1 text-blue-700 dark:text-blue-500"
          >Rp</span
        >
        <span
          class="text-3xl font-bold tracking-tight text-blue-700 dark:text-blue-500"
          >{{ harga }}</span
        >
        <span class="ms-1 text-lg font-normal text-gray-400 dark:text-gray-300"
          >/kendaraan</span
        >
      </div>
      <ul role="list" class="space-y-5 my-7 border-t border-gray-400 pt-5">
        <li
          class="flex items-center"
          v-for="(feature, index) in layanan"
          :key="index"
        >
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/material-rounded/96/1d4ed8/approval.png"
            alt="approval"
          />
          <span
            class="text-base font-normal leading-tight text-gray-400 dark:text-gray-300 ms-3"
            >{{ feature }}</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>
