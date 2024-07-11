<script setup lang="ts"></script>

<template>
  <section class="dark:bg-gray-900">
    <div class="p-4 mx-auto max-w-screen-xl">
      <div class="grid md:grid-cols-2 gap-8 mb-8">
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
              100
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
        <h1
          class="text-gray-900 dark:text-white text-3xl md:text-3xl font-extrabold mb-2"
        >
          Status Pencucian Kendaraan
        </h1>
        <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-10">
          Menampilkan seluruh data pemesanan pencucian mobil dan motor
        </p>

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
            <tbody class="text-black">
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td class="px-6 py-4">3123123</td>
                <td scope="row" class="px-6 py-4 whitespace-nowrap">
                  Apple MacBook Pro 17"
                </td>
                <td class="px-6 py-4">15.00</td>
                <td class="px-6 py-4">2024-04-02</td>
                <td class="px-6 py-4">small/medium</td>
                <td class="px-6 py-4">express glow</td>
                <td class="px-6 py-4">pending</td>
              </tr>
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td class="px-6 py-4">78980890</td>
                <td scope="row" class="px-6 py-4 whitespace-nowrap">
                  Lorem ipsum dolor sit amet.
                </td>
                <td class="px-6 py-4">20.00</td>
                <td class="px-6 py-4">2024-08-01</td>
                <td class="px-6 py-4">large/big/suv</td>
                <td class="px-6 py-4">hidrolik glow</td>
                <td class="px-6 py-4">berhasil</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
