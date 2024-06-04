<script setup>
</script>

<template>
  <div class="min-h-screen p-20">

    <div class="text-white text-center mt-10">
      <h1 class="text-5xl font-semibold mb-5">Lorem ipsum dolor sit amet.</h1>
      <p class="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, eveniet.</p>
    </div>

    <div class="border rounded mt-10 bg-slate-50">
      <ol
        class="flex items-center w-full text-sm border-b p-5 font-medium text-center bg-slate-100 text-gray-500 dark:text-gray-400 sm:text-base">
        <li
          class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b-2 after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span
            class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500 sm:min-w-32">
            <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Pemesanan
          </span>
        </li>
        <li
          class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b-2 after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span
            class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500 sm:min-w-32">
            <span class="me-2">2</span>
            Pembayaran
          </span>
        </li>
        <li
          class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b-2 after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span
            class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500 sm:min-w-32">
            <span class="me-2">3</span>
            Pengecekan
          </span>
        </li>
        <li class="flex items-center">
          <span class="me-2">4</span>
          Selesai
        </li>
      </ol>

      <!-- PENGECEKAN -->

      <!-- PENGECEKAN -->


      <!-- PEMESANAN -->
      <div class=" hidden w-full mx-auto p-10">
        <form>
          <div class="">
            <div class="mb-5">
              <h1 class="font-semibold text-lg">Informasi Pribadi</h1>
            </div>
            <div class="grid grid-cols-2 gap-5 mb-5">
              <div class="">
                <label for="nama_lengkap" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama
                  Lengkap</label>
                <input type="text" id="nama_lengkap"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tuliskan nama lengkapmu" required />
              </div>
              <div class="">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tuliskan emailmu" required />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5 mb-5">
              <div class="">
                <label for="alamat" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat</label>
                <input type="text" id="alamat"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tuliskan alamat lengkapmu" required />
              </div>
              <div class="">
                <label for="no_telp" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No.
                  Telp</label>
                <input type="number" id="no_telp"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tuliskan nomor telepon" required />
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
                  <input type="radio" id="express-glow" name="layanan" value="express-glow" class="hidden peer"
                    required />
                  <label for="express-glow"
                    class="inline-flex justify-between w-full h-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div class="block">
                      <div class="w-full text-lg font-semibold">Rp 25.000 - Rp 40.000</div>
                      <div class="w-full font-medium mb-3">Express Glow</div>
                      <div class="w-full">Cuci Interior & Cuci Exterior</div>
                    </div>
                  </label>
                </li>
                <li>
                  <input type="radio" id="hidrolik-glow" name="layanan" value="hidrolik-glow" class="hidden peer">
                  <label for="hidrolik-glow"
                    class="inline-flex justify-between w-full h-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div class="block">
                      <div class="w-full text-lg font-semibold">Rp 35.000 - Rp 50.000</div>
                      <div class="w-full font-medium mb-3">Hidrolik Glow</div>
                      <div class="w-full">Cuci Interior, Cuci Exterior, Vacum Cleaner, Semir Ban</div>
                    </div>
                  </label>
                </li>
                <li>
                  <input type="radio" id="extra-glow" name="layanan" value="extra-glow" class="hidden peer">
                  <label for="extra-glow"
                    class="inline-flex justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div class="block">
                      <div class="w-full text-lg font-semibold">Rp 65.000 - Rp 80.000</div>
                      <div class="w-full font-medium mb-3">Extra Glow</div>
                      <div class="w-full">Cuci Interior, Cuci Exterior, Vacum Cleaner, Semir Ban, Glowmax Protection
                        (body
                        &
                        kaca)</div>
                    </div>
                  </label>
                </li>
                <li>
                  <input type="radio" id="cuci-motor" name="layanan" value="cuci-motor" class="hidden peer">
                  <label for="cuci-motor"
                    class="inline-flex justify-between w-full h-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div class="block">
                      <div class="w-full text-lg font-semibold">Rp 15.000 - Rp 20.000</div>
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
          <div class="">
            <div class="mb-5">
              <h1 class="font-semibold text-lg">Tangal dan Waktu</h1>
            </div>
            <div class="grid grid-cols-3 gap-5 mb-5">
              <div class="">
                <label for="jumlah_kendaraan"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jumlah
                  Kendaraan</label>
                <input type="number" id="jumlah_kendaraan"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com" required />
              </div>
              <div class="">
                <label for="tanggal_pencucian"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal
                  Pencucian</label>
                <input type="date" id="tanggal_pencucian"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com" required />
              </div>
              <div class="">
                <label for="waktu_pencucian" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Waktu
                  Pencucian</label>
                <input type="time" id="waktu_pencucian"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com" required />
              </div>
            </div>
          </div>
          <div class="mt-10">
            <button type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
              Pemesanan
            </button>
          </div>
        </form>
      </div>
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
                <p class="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, excepturi!</p>
              </div>
              <div class="">
                <h5 class="font-semibold">Total pembayaran</h5>
                <p class="">Rp 50.000</p>
              </div>
            </div>
          </div>
          <div class="mb-5">
            <label class="block mb-2  font-medium text-gray-900 dark:text-white">Metode Pembayaran</label>
            <button id="dropdownRadioButton" data-dropdown-toggle="dropdownDefaultRadio"
              class=" w-full text-sm text-gray-500 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 px-5 py-2.5 text-center inline-flex items-center justify-between"
              type="button">
              Pilih Metode Pembayaran
              <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4" />
              </svg>
            </button>

            <!-- Dropdown menu -->
            <div id="dropdownDefaultRadio"
              class="z-10 hidden w-1/3 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
              <ul class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
                <li>
                  <div class="flex items-center">
                    <p class="ms-2 text-sm font-bold text-gray-900 dark:text-gray-300">Virtual Account</p>
                  </div>
                </li>
                <li>
                  <div class="flex items-center justify-between border p-2 rounded-lg">
                    <div class="col-span-2 flex items-center">
                      <input id="default-radio-1" type="radio" value="" name="default-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                      <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">BRI
                        Virtual Account</label>
                    </div>
                    <div class="">
                      <img src="/public/lowongan-kerja-bank-bri.png" class="w-20" alt="">
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <p class="ms-2 text-sm font-bold text-gray-900 dark:text-gray-300">Transfer Bank</p>
                  </div>
                </li>
                <li>
                  <div class="flex items-center justify-between border p-2 rounded-lg">
                    <div class="col-span-2 flex items-center">
                      <input id="default-radio-1" type="radio" value="" name="default-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                      <label for="default-radio-1"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Transfer BRI</label>
                    </div>
                    <div class="">
                      <img src="/public/lowongan-kerja-bank-bri.png" class="w-20" alt="">
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <p class="ms-2 text-sm font-bold text-gray-900 dark:text-gray-300">Pembayaran Lainnya</p>
                  </div>
                </li>
                <li>
                  <div class="flex items-center justify-between border p-2 rounded-lg">
                    <div class="col-span-2 flex items-center">
                      <input id="default-radio-1" type="radio" value="" name="default-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                      <label for="default-radio-1"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gopay</label>
                    </div>
                    <div class="">
                      <img src="/public/dRNzzS17nfiafonStDGR(1).png" class="w-20" alt="">
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="mb-5">
            <label for="default-search" class="block mb-2 font-medium text-gray-900 dark:text-white">Total
              Pembayaran</label>
            <div class="relative">
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-sm text-gray-500 dark:text-gray-400">
                Rp </div>
              <input type="search" id="default-search"
                class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Search Mockups, Logos..." required />
            </div>
          </div>

          <div class="mt-10">
            <button type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Selesai
              & Bayarkan
            </button>
          </div>
        </form>
      </div>
      <!-- PEMBAYARAN -->

    </div>
  </div>
</template>
