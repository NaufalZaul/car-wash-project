<script setup>
import CardPrizeComponent from "@/components/CardPrizeComponent.vue";
</script>

<template>
  <div id="beranda" class="min-h-screen text-white">
    <div
      class="min-h-screen"
      style="
        background: #ffffff url(/public/car_wash_corousel.png) left top/cover
          no-repeat;
      "
    >
      <div
        class="min-h-screen p-20 backdrop-brightness-50 bg-black/60 text-white flex items-center"
      >
        <div class="w-3/5 h-full">
          <h1 class="text-7xl font-semibold capitalize">
            rawat kendaraan anda bersama kami !
          </h1>
          <p class="mt-5 text-lg">
            Kami menyediakan jasa layanan pencucian kendaraan motor maupun
            mobil, dengan harga yang relatif murah dan terjangkau, dengan
            kualitas yang bagus.
          </p>

          <div class="flex mt-12">
            <button
              type="button"
              class="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center me-2"
            >
              <img
                class="me-2"
                width="23"
                height="23"
                src="https://img.icons8.com/windows/128/ffffff/share.png"
                alt="share"
              />
              Layanan Kami
            </button>
            <button
              type="button"
              class="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center"
            >
              Pemesanan Layanan Pencucian
              <img
                class="ms-2"
                width="20"
                height="20"
                src="https://img.icons8.com/windows/96/ffffff/up-right-arrow.png"
                alt="up-right-arrow"
              />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="min-h-screen p-20">
      <div class="w-3/4 text-center mx-auto">
        <h1 class="text-5xl font-medium mb-7">
          <span class="text-blue-500 font-bold">GLOWMAX</span>
          Garage Madiun
        </h1>
        <p class="text-xl leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eum
          commodi ipsum a architecto, at ab vel deserunt. Expedita laborum
          veniam laudantium voluptatibus excepturi eligendi autem. Itaque id
          nesciunt nihil, tempora cum libero magnam suscipit. Aliquam quas
          inventore impedit saepe sequi illum officia hic doloremque neque
          nesciunt, enim voluptates vel.
        </p>
      </div>
      <div class="grid grid-cols-2 gap-20 mt-24">
        <div class="">
          <h1 class="text-3xl font-semibold mb-5">Tempat Kami Bekerja</h1>
          <p class="text-lg leading-8">
            Kami Terletak di Jl. S. Parman, Genuk Barat, Genuk, Kec. Ungaran
            Bar., Kabupaten Semarang, Jawa Tengah 50512
          </p>
          <button
            type="button"
            class="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mt-10"
          >
            <img
              class="me-2"
              width="23"
              height="23"
              src="https://img.icons8.com/windows/128/ffffff/share.png"
              alt="share"
            />
            Hubungi Kami
          </button>
        </div>
        <div class="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.8552767984274!2d110.4122349!3d-7.142728699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7087d28129713d%3A0x712c8455b8c6cfaf!2sGlowmaxx%20Carwash%20%26%20Autocare!5e0!3m2!1sen!2sid!4v1717229449246!5m2!1sen!2sid"
            class="w-full rounded-lg"
            width="600"
            height="380"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>

    <div
      class="relative min-h-screen bg-blue-500 grid grid-cols-2 before:absolute before:w-20 before:h-full before:bg-blue-700 before:ms-14 after:absolute after:w-32 after:h-full after:bg-blue-700 after:right-0"
    >
      <div class="p-20 z-10">
        <h1 class="font-semibold text-5xl mb-5">
          Kualitas Kebersihan Merupakan Prioritas Kami
        </h1>
        <p class="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit
          dolore sequi. Saepe inventore atque ex consequatur. Consequatur nisi
          earum aspernatur, voluptas, magni odit porro impedit voluptates
          consectetur ipsa
        </p>
        <ul class="mt-10">
          <li class="flex items-center mb-6">
            <div class="w-3.5 h-3.5 bg-blue-500 rounded-full me-3"></div>
            <p class="text-lg font-medium">Lorem ipsum dolor</p>
          </li>
          <li class="flex items-center mb-6">
            <div class="w-3.5 h-3.5 bg-blue-500 rounded-full me-3"></div>
            <p class="text-lg font-medium">Lorem ipsum dolor sit amet.</p>
          </li>
          <li class="flex items-center">
            <div class="w-3.5 h-3.5 bg-blue-500 rounded-full me-3"></div>
            <p class="text-lg font-medium">
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </p>
          </li>
        </ul>
      </div>
      <div class="ps-20 md:ps-0 p-20 z-10">
        <img
          class="h-full object-cover rounded-xl"
          src="/public/car_wash_corousel.png"
          alt=""
        />
      </div>
    </div>

    <div class="min-h-screen p-20">
      <div class="text-center mx-auto mb-10">
        <h1 class="text-5xl font-semibold mb-5 capitalize">Layanan kami</h1>
        <p class="text-lg">
          Beberapa layanan yang kami berikan untuk pelanggan
        </p>
      </div>
      <div class="grid justify-center grid-cols-2 md:grid-cols-3 gap-4">
        <div class="relative">
          <img
            class="h-full object-cover max-w-full rounded-lg"
            src="/public/car_wash_corousel.png"
            alt=""
          />
          <div
            class="absolute top-0 bottom-0 left-0 right-0 backdrop-brightness-50 bg-black/30 p-4 opacity-0 hover:opacity-100"
          >
            <h4 class="text-xl font-semibold mb-4">Lorem, ipsum dolor.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              deserunt!
            </p>
          </div>
        </div>
        <div class="relative">
          <img
            class="h-full object-cover max-w-full rounded-lg"
            src="/public/car_wash_corousel.png"
            alt=""
          />
          <div
            class="absolute top-0 bottom-0 left-0 right-0 backdrop-brightness-50 bg-black/30 p-4 opacity-0 hover:opacity-100"
          >
            <h4 class="text-xl font-semibold mb-4">Lorem, ipsum dolor.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              deserunt!
            </p>
          </div>
        </div>
        <div class="relative">
          <img
            class="h-full object-cover max-w-full rounded-lg"
            src="/public/car_wash_corousel.png"
            alt=""
          />
          <div
            class="absolute top-0 bottom-0 left-0 right-0 backdrop-brightness-50 bg-black/30 p-4 opacity-0 hover:opacity-100"
          >
            <h4 class="text-xl font-semibold mb-4">Lorem, ipsum dolor.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              deserunt!
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="min-h-screen bg-blue-500 p-20">
      <h1 class="text-5xl text-center font-semibold capitalize">
        Harga yang kami tawarkan
      </h1>
      <div class="md:w-fit mx-auto grid grid-cols-4 gap-2 justify-center mt-20">
        <card-prize-component
          judul="EXPRESS GLOW"
          harga="25.000"
          :layanan="['Cuci Interior', 'Cuci Exterior']"
        />
        <card-prize-component
          judul="HIDROLIK GLOW"
          harga="35.000"
          :layanan="[
            'Cuci Interior',
            'Cuci Exterior',
            'Vacum Cleaner',
            'Semir Ban',
          ]"
        />
        <card-prize-component
          judul="EXTRA GLOW"
          harga="65.000"
          :layanan="[
            'Cuci Interior',
            'Cuci Exterior',
            'Vacum Cleaner',
            'Semir Ban',
            'Glowmax Protection(Body & Kaca)',
          ]"
        />
        <card-prize-component
          judul="CUCI MOTOR"
          harga="15.000"
          :layanan="['Motor Kecil', 'Motor Besar']"
        />
      </div>
    </div>
    <div class="p-20 text-center">
      <h1 class="text-4xl text-center font-semibold mb-5 capitalize">
        Hubungi kami melalui sosial media
      </h1>
      <p>
        Kami siap melayani anda setiap saat untuk memberikan jasa layanan
        pencucian motor dan mobil
      </p>
      <div class="flex items-center justify-center gap-10 mt-10">
        <div class="flex items-center">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/color/144/whatsapp--v1.png"
            alt="whatsapp--v1"
          />
          <p class="text-xl ms-3">+62 812-2573-0655</p>
        </div>
        <div class="flex items-center">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/fluency/144/instagram-new.png"
            alt="instagram-new"
          />
          <p class="text-xl ms-3">glowmaxx.id</p>
        </div>
        <div class="flex items-center">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/color/144/gmail-new.png"
            alt="gmail-new"
          />
          <p class="text-xl ms-3">Lorem ipsum dolor</p>
        </div>
      </div>
    </div>
  </div>
</template>
