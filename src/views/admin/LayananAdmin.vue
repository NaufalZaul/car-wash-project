<script setup>
import { ref } from "vue";

let dataService = [];
let dataFetched = ref(false);
let dataForm = ref({});

let showModal = ref({
  getID: 0,
  add: false,
  edit: false,
  delete: false,
});

const openModal = {
  getID: (id) => (showModal.value.getID = id),
  tambah: () => {
    dataForm.value = {};
    showModal.value.add = true;
  },
  edit: () => (showModal.value.edit = true),
  hapus: () => (showModal.value.delete = true),
  close: () => {
    showModal.value.add = false;
    showModal.value.edit = false;
    showModal.value.delete = false;
  },
};

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

const getSpecificDataService = async (id) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/services/${id}`);
    const result = await response.json();

    if (response.ok) {
      dataForm.value = result.data;
    } else {
      console.error("Error fetching services");
    }
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};

const addDataService = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForm.value),
    });
    const result = await response.json();

    if (response.ok) {
      alert("Berhasil ditambahkan!");
    } else {
      console.error("Error fetching services");
    }
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};

const updateDataService = async () => {
  try {
    const response = await fetch(
      `http://localhost:8000/api/services/${showModal.value.getID}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm.value),
      }
    );
    const result = await response.json();

    if (response.ok) {
      alert("Berhasil diperbarui!");
    } else {
      console.error("Error fetching services");
    }
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};

const deleteDataService = async (id) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/services/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const result = await response.json();

    if (response.ok) {
      console.log(result);
      window.location = "/admin/layanan";
    } else {
      console.error("Error fetching services");
    }
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};

getDataService();
</script>

<template>
  <section class="dark:bg-gray-900">
    <div class="p-4 mx-auto max-w-screen-xl">
      <div
        class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12"
      >
        <h1
          class="text-gray-900 dark:text-white text-3xl md:text-3xl font-extrabold mb-2"
        >
          Kelola data layanan
        </h1>
        <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
          Mengelola seluruh data jenis layanan pada website
        </p>
        <button
          @click="openModal.tambah()"
          class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-6 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Tambah data
        </button>

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
                  <button
                    type="button"
                    @click="
                      openModal.edit();
                      openModal.getID(data.id);
                      getSpecificDataService(data.id);
                    "
                    class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-4 mb-2 dark:focus:ring-yellow-900"
                  >
                    Edit
                  </button>
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

    <!-- Main modal -->
    <div
      v-if="showModal.add"
      id="crud-modal"
      tabindex="-1"
      aria-hidden="true"
      class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
    >
      <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Tambah data layanan
            </h3>
            <button
              type="button"
              @click="openModal.close"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
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
          </div>
          <!-- Modal body -->
          <form class="p-4 md:p-5" @submit.prevent="addDataService">
            <div class="grid gap-4 mb-4 grid-cols-2">
              <div class="col-span-2">
                <label
                  for="car_type"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Tipe Mobil</label
                >
                <select
                  id="car_type"
                  name="car_type"
                  v-model="dataForm.car_type"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option :selected="dataForm.car_type === undefined" disabled>
                    Select category
                  </option>
                  <option value="small/medium">Small/Medium</option>
                  <option value="large/big/suv">Large/Big/Suv</option>
                  <option value="premium">Premium</option>
                </select>
              </div>
              <div class="col-span-2 sm:col-span-1">
                <label
                  for="service_type"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Jenis Layanan</label
                >
                <select
                  id="service_type"
                  name="service_type"
                  v-model="dataForm.service_type"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">Select category</option>
                  <option value="express glow">Express Glow</option>
                  <option value="hidrolik glow">Hidrolik Glow</option>
                  <option value="extra glow">Extra Glow</option>
                </select>
              </div>
              <div class="col-span-2 sm:col-span-1">
                <label
                  for="price"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Harga</label
                >
                <input
                  type="number"
                  name="price"
                  v-model="dataForm.price"
                  id="price"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                />
              </div>
              <div class="col-span-2">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Product Description</label
                >
                <textarea
                  id="description"
                  v-model="dataForm.description"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write product description here"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              @click="openModal.close;"
              class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="me-1 -ms-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Add new product
            </button>
          </form>
        </div>
      </div>
    </div>
    <!-- Main modal -->

    <div
      v-if="showModal.edit"
      tabindex="-1"
      aria-hidden="true"
      class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
    >
      <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Tambah data layanan
            </h3>
            <button
              type="button"
              @click="openModal.close"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
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
          </div>
          <!-- Modal body -->
          <form class="p-4 md:p-5" @submit.prevent="updateDataService">
            <div class="grid gap-4 mb-4 grid-cols-2">
              <div class="col-span-2">
                <label
                  for="car_type"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Tipe Mobil</label
                >
                <input
                  type="text"
                  name="car_type"
                  v-model="dataForm.car_type"
                  id="car_type"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type of car"
                />
              </div>
              <div class="col-span-2 sm:col-span-1">
                <label
                  for="service_type"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Jenis Layanan</label
                >
                <input
                  type="text"
                  name="service_type"
                  v-model="dataForm.service_type"
                  id="service_type"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type of services"
                />
              </div>
              <div class="col-span-2 sm:col-span-1">
                <label
                  for="price"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Harga</label
                >
                <input
                  type="number"
                  name="price"
                  v-model="dataForm.price"
                  id="price"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                />
              </div>
              <div class="col-span-2">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Product Description</label
                >
                <textarea
                  id="description"
                  v-model="dataForm.description"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write product description here"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              @click="openModal.close"
              class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="me-1 -ms-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Add new product
            </button>
          </form>
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
                deleteDataService(showModal.getID);
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
