<script setup>
import { defineEmits, onMounted, ref } from "vue";

let dataLayanan = {};
const dataFetched = ref(false);
const formData = ref({});

const props = defineProps({
  slide: Number,
  formData: Object,
});

const fetchData = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/services");
    const result = await response.json();
    if (response.ok) {
      result.data.data.find((item) => {
        if (item.id == props.formData.jenis_layanan) {
          dataLayanan = item;
          dataFetched.value = true;
        }
      });
    } else {
      console.error("Error fetching services");
    }
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};
fetchData();

const submitBooking = async () => {
  const {
    nama_lengkap,
    no_telp,
    tanggal_pencucian,
    waktu_pencucian,
    jenis_layanan,
  } = props.formData;
  try {
    const response = await fetch("http://127.0.0.1:8000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nama_lengkap,
        phone: `${no_telp}`,
        booking_time: `${waktu_pencucian}:00`,
        booking_date: tanggal_pencucian,
        id_service: jenis_layanan,
        status: "scheduled",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error creating booking");
    }

    const bookingData = await response.json();
    const paymentResponse = await fetch("http://127.0.0.1:8000/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id_booking: bookingData.data.id }),
    });

    if (!paymentResponse.ok) {
      const errorData = await paymentResponse.json();
      throw new Error(errorData.message || "Error processing payment");
    }

    const paymentData = await paymentResponse.json();
    const snapToken = paymentData.snapToken;

    window.snap.pay(snapToken, {
      onSuccess: function (result) {
        alert("Payment success!");
        formData.value = { ...formData.value, slide: 4 };
      },
      onPending: function (result) {
        alert("Payment pending!");
      },
      onError: function (result) {
        alert("Payment failed!");
      },
    });
  } catch (err) {
    console.error("Booking error: ", err.message);
    // errorMessage.set(err.message);
    alert("Error creating booking!");
  }
};

const emit = defineEmits(["submitForm"]);

const handleSubmit = (button) => {
  if (button == "next") {
    emit("submitForm", formData.value);
    submitBooking();
  } else {
    emit("submitForm", formData.value);
    formData.value = { ...formData.value, slide: 2 };
  }
};
</script>

<template>
  <div :class="props.slide == 3 ? 'w-full mx-auto p-10' : 'hidden'">
    <form @submit.prevent="handleSubmit">
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
        <div class="">
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
    </form>
  </div>
</template>
