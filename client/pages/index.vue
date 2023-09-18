<template>
  <div>
    <HeaderNav />
    <main :class="navStore.isHidden === false ? '' : 'hidden'">
      <SideNav />
      <Board />
    </main>
    <span
      :class="[
        'fixed bottom-8 left-0 bg-blue-400 ps-[18px] pe-[22px] py-5 rounded-r-3xl cursor-pointer',
        navStore.isHidden === false ? 'hidden' : '',
      ]"
      @click="navStore.toggleSideNav">
      <img
        src="~/assets/images/icon-show-sidebar.svg"
        alt="show icon" />
    </span>
    <Modal v-if="modalStore.isOpen">
      <NewTask v-if="modalStore.activeModal === 'newTask'" />
      <ViewTask v-if="modalStore.activeModal === 'viewTask'" />
      <EditTask v-if="modalStore.activeModal === 'editTask'" />
      <DeleteTask v-if="modalStore.activeModal === 'deleteTask'" />
      <NewBoard v-if="modalStore.activeModal === 'newBoard'" />
      <EditBoard v-if="modalStore.activeModal === 'editBoard'" />
      <DeleteBoard v-if="modalStore.activeModal === 'deleteBoard'" />
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
import { useModalStore } from "~/store/modal";

const navStore = useNavbarStore();
const modalStore = useModalStore();
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
