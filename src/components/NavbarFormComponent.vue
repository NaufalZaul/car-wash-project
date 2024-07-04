<script>
export default {
  props: {
    count: Number,
  },
};
</script>

<template>
  <ol
    class="flex items-center w-full text-sm border-b p-5 font-medium text-center bg-slate-100 text-gray-500 dark:text-gray-400 sm:text-base"
  >
    <li
      :class="{
        'flex md:w-full items-center after:content-[\'\'] after:w-full after:h-1 after:border-b-2 after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700':
          count <= 1,
        'flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[\'\'] after:w-full after:h-1 after:border-b-2 after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700':
          count > 1,
      }"
    >
      <span
        class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500 sm:min-w-32"
      >
        <template v-if="count > 1">
          <svg
            class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
            />
          </svg>
        </template>
        <template v-else>
          <span class="me-2">1</span>
        </template>
        Data diri
      </span>
    </li>
    <li
      :class="{
        'flex md:w-full items-center after:content-[\'\'] after:w-full after:h-1 after:border-b-2 after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700':
          count <= 2,
        'flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[\'\'] after:w-full after:h-1 after:border-b-2 after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700':
          count > 2,
      }"
    >
      <span
        class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500 sm:min-w-32"
      >
        <template v-if="count > 2">
          <svg
            class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
            />
          </svg>
        </template>
        <template v-else>
          <span class="me-2">2</span>
        </template>
        Layanan
      </span>
    </li>
    <li
      :class="{
        'flex md:w-full items-center after:content-[\'\'] after:w-full after:h-1 after:border-b-2 after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700':
          count <= 3,
        'flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[\'\'] after:w-full after:h-1 after:border-b-2 after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700':
          count > 3,
      }"
    >
      <span
        class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500 sm:min-w-32"
      >
        <template v-if="count > 3">
          <svg
            class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
            />
          </svg>
        </template>
        <template v-else>
          <span class="me-2">3</span>
        </template>
        Pemesanan
      </span>
    </li>
    <li
      :class="{
        'flex items-center': count <= 4,
        'flex items-center text-blue-600 dark:text-blue-500 ': count > 4,
      }"
    >
      <template v-if="count > 4">
        <svg
          class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
          />
        </svg>
      </template>
      <template v-else>
        <span class="me-2">4</span>
      </template>
      Pembayaran
    </li>
  </ol>

  <!-- <ol
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
            Data diri
          </span>
        </li>
        <li
          class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b-2 after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span
            class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500 sm:min-w-32">
            <span class="me-2">2</span>
            Layanan
          </span>
        </li>
        <li
          class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b-2 after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span
            class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500 sm:min-w-32">
            <span class="me-2">3</span>
            Pemesanan
          </span>
        </li>
        <li class="flex items-center">
          <span class="me-2">4</span>
          Pembayaran
        </li>
      </ol> -->
</template>
