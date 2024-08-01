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
        class="min-h-screen p-10 md:p-20 backdrop-brightness-50 bg-black/60 text-white flex items-center"
      >
        <div class="w-full md:w-3/5 h-full">
          <h1
            class="text-4xl text-center md:text-left md:text-7xl font-semibold capitalize"
          >
            rawat kendaraan anda bersama kami !
          </h1>
          <p class="mt-5 text-lg text-center md:text-left">
            Kami menyediakan jasa layanan pencucian kendaraan motor maupun
            mobil, dengan harga yang relatif murah dan terjangkau, dengan
            kualitas yang bagus.
          </p>

          <div class="flex flex-col items-center md:flex-row mt-12">
            <button
              type="button"
              class="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-5 md:mb-0"
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

    <div class="min-h-screen p-10 md:p-20">
      <div class="w-full md:w-3/4 text-center mx-auto">
        <h1 class="text-4xl md:text-5xl font-medium mb-7 text-center">
          <span class="text-5xl md:text-5xl text-blue-500 font-bold"
            >GLOWMAX</span
          >
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
      <div class="grid md:grid-cols-2 gap-20 mt-24">
        <div class="">
          <h1 class="text-3xl font-semibold mb-5">Tempat Kami Bekerja</h1>
          <p class="text-lg leading-8">
            Jl. Raya Tiron No.54, Kuwek, Nglames, Kec. Madiun, Kabupaten Madiun,
            Jawa Timur 63151
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.8940286351453!2d111.5401175!3d-7.5865124999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79bf21fdad1ec5%3A0xc87e76ad84943de2!2sGLOWMAX%20GARAGE%20(CUCI%20MOBIL%20MOTOR%20%26%20GANTI%20OLI%20)!5e0!3m2!1sen!2sid!4v1721650154635!5m2!1sen!2sid"
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
      class="relative min-h-screen bg-blue-500 md:grid grid-cols-2 md:before:absolute md:before:w-20 md:before:h-full md:before:bg-blue-700 md:before:ms-14 md:after:absolute md:after:w-32 md:after:h-full md:after:bg-blue-700 md:after:right-0"
    >
      <div class="p-10 md:p-20 z-10">
        <h1
          class="font-semibold text-3xl text-center md:text-left md:text-5xl mb-5"
        >
          Kualitas Kebersihan Merupakan Prioritas Kami
        </h1>
        <p class="text-lg text-center md:text-left">
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
      <div class="hidden md:flex items-center ps-20 md:ps-0 p-20 z-10">
        <img
          class="h-[25rem] w-full object-cover rounded-xl"
          src="/public/WhatsApp Image 2024-07-09 at 11.53.32_9783b70d.jpg"
          alt=""
        />
      </div>
    </div>

    <div class="min-h-screen p-10 md:p-20">
      <div class="text-center mx-auto mb-10">
        <h1 class="text-3xl md:text-5xl font-semibold mb-5 capitalize">
          Layanan kami
        </h1>
        <p class="text-lg">
          Beberapa layanan yang kami berikan untuk pelanggan
        </p>
      </div>
      <div class="grid justify-center md:grid-cols-3 gap-4">
        <div class="relative">
          <img
            class="h-72 md:h-80 object-cover w-full rounded-lg"
            src="/public/WhatsApp Image 2024-07-09 at 11.53.16_dfb19437.jpg"
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
            class="h-72 md:h-80 object-cover w-full rounded-lg"
            src="/public/WhatsApp Image 2024-07-09 at 11.52.55_4ae0ef65.jpg"
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
            class="h-72 md:h-80 object-cover w-full rounded-lg"
            src="/public/WhatsApp Image 2024-07-09 at 11.53.32_f9e3382d.jpg"
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
            class="h-72 md:h-80 object-cover w-full rounded-lg"
            src="/public/WhatsApp Image 2024-07-09 at 11.53.17_30d9ac11.jpg"
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

    <div class="min-h-screen bg-blue-500 p-10 md:p-20">
      <h1 class="text-3xl md:text-5xl text-center font-semibold capitalize">
        Harga yang kami tawarkan
      </h1>
      <div
        class="md:w-fit mx-auto grid md:grid-cols-4 gap-2 justify-center mt-14 md:mt-20"
      >
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
    <div class="p-10 md:p-20 text-center">
      <h1
        class="text-3xl md:text-4xl text-center font-semibold mb-5 capitalize"
      >
        Hubungi kami melalui sosial media
      </h1>
      <p class="text-lg">
        Kami siap melayani anda setiap saat untuk memberikan jasa layanan
        pencucian motor dan mobil
      </p>
      <div
        class="flex flex-col md:flex-row items-center justify-center gap-10 mt-10"
      >
        <div class="flex items-center">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/color/144/whatsapp--v1.png"
            alt="whatsapp--v1"
          />
          <p class="text-xl ms-3">+62 812-2573-0655</p>
        </div>
        <div class="">
          <a
            href="https://www.instagram.com/glowmaxgarage_mdn/"
            class="flex items-center"
            target="_blank"
          >
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/fluency/144/instagram-new.png"
              alt="instagram-new"
            />
            <p class="text-xl ms-3">glowmaxgarage_md</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
