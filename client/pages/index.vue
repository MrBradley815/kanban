<template>
  <div>
    <HeaderNav />
    <main :class="store.isHidden === false ? '' : 'hidden'">
      <SideNav />
      <Board />
    </main>
    <span
      :class="[
        'fixed bottom-8 left-0 bg-blue-400 ps-[18px] pe-[22px] py-5 rounded-r-3xl cursor-pointer',
        store.isHidden === false ? 'hidden' : '',
      ]"
      @click="store.toggleSideNav">
      <img
        src="~/assets/images/icon-show-sidebar.svg"
        alt="show icon" />
    </span>
    <Modal>
      <DeleteTask />
    </Modal>
  </div>
</template>

<script setup>
import Modal from "~/components/modals/Modal.vue";
import DeleteTask from "~/components/modals/DeleteTask.vue";
import { useNavbarStore } from "~/store/sidenav";

const store = useNavbarStore();
</script>

<style scoped>
main {
  display: grid;
  grid-template-columns: 300px 1fr;
}

main.hidden {
  grid-template-columns: 1fr;
}
</style>
