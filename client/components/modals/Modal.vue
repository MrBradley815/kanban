<template>
  <div
    class="overlay fixed top-0 left-0 right-0 bottom-0 grid place-items-center bg-[rgba(0,0,0,0.5)] z-50"
    @click="closeModal">
    <div class="bg-white-400 dark:bg-black-400 rounded-md m-4 p-8 w-full max-w-[480px]">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useModalStore } from "~/store/modal";

const modalStore = useModalStore();

const closeModal = (event) => {
  if (event.target.classList.contains("overlay")) {
    console.log("Closing");
    modalStore.toggleModal(false, null);
  }
};
</script>

<style scoped></style>
