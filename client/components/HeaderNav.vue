<template>
  <header class="bg-white flex bg-white-400 dark:bg-black-400">
    <div :class="['py-8', navStore.isHidden === true ? 'ps-6 pe-8' : 'px-[34px] w-full max-w-[300px]']">
      <img
        src="~/assets/images/logo-light.svg"
        class="w-[153px] max-w-max"
        alt="kanban"
        v-if="colorMode.value === 'dark'" />
      <img
        src="~/assets/images/logo-dark.svg"
        class="w-[153px] max-w-max"
        alt="kanban"
        v-else />
    </div>
    <div class="flex items-center justify-between w-full px-6 py-5 border-s border-gray-400 dark:border-black-300">
      <h1 class="text-black-600 dark:text-white-400">Platform Launch</h1>
      <button
        class="btn text-[15px] leading-[19px] font-bold px-6 py-[15px]"
        @click="modalStore.toggleModal(true, 'newTask')">
        + Add New Task
      </button>
    </div>
  </header>
</template>

<script setup>
import { useNavbarStore } from "~/store/sidenav";
import { useModalStore } from "~/store/modal";

const navStore = useNavbarStore();
const modalStore = useModalStore();
const colorMode = useColorMode();
</script>

<style scoped></style>
