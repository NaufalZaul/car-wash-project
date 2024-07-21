<script setup>
import store from "@/auth/auth";
import router from "@/routes/route";
import { ref } from "vue";

let dataForm = ref({});
let storage = store();

const loginSystem = () => {
  storage.login(dataForm.value);
};
</script>

<template>
  <div id="login" class="min-h-screen flex justify-center p-8">
    <div
      class="w-1/2 flex items-center justify-center bg-white border-e p-5 rounded-s-xl"
    >
      <div
        class="w-full bg-white dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Sign in to your account
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="loginSystem">
            <div>
              <label
                for="username"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your username</label
              >
              <input
                type="text"
                name="username"
                v-model="dataForm.username"
                id="username"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <input
                type="password"
                name="password"
                v-model="dataForm.password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
    <div
      class="w-2/3 bg-white rounded-e-xl"
      style="
        background: #ffffff url(/public/car_wash_corousel.png) left top/cover
          no-repeat;
      "
    >
      <div
        class="text-white backdrop-brightness-50 w-full h-full flex items-center justify-center"
      >
        <div class="w-3/4">
          <h1 class="text-4xl font-semibold">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p class="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
            fugit.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
