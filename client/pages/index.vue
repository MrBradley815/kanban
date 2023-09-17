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
      <ViewTask />
    </Modal>
  </div>
</template>

<script setup>
import Modal from "~/components/modals/Modal.vue";
import DeleteTask from "~/components/modals/DeleteTask.vue";
import DeleteBoard from "~/components/modals/DeleteBoard.vue";
import EditBoard from "~/components/modals/EditBoard.vue";
import NewBoard from "~/components/modals/NewBoard.vue";
import EditTask from "~/components/modals/EditTask.vue";
import NewTask from "~/components/modals/NewTask.vue";
import ViewTask from "~/components/modals/ViewTask.vue";
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
