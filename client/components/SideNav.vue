<template>
  <nav
    :class="['flex flex-col justify-between pt-[14px] pb-8 px-6 bg-white-400 dark:bg-black-400', store.isHidden === false ? '' : 'hidden']">
    <BoardList />
    <div>
      <DarkModeToggle />
      <div
        class="flex gap-4 cursor-pointer"
        @click="store.toggleSideNav">
        <img
          src="~/assets/images/icon-hide-sidebar.svg"
          alt="hide icon" />
        <h3 class="text-[15px] font-bold leading-[19px] text-gray-500">Hide Sidebar</h3>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useNavbarStore } from "~/store/sidenav";

const store = useNavbarStore();
</script>

<style scoped>
nav.hidden {
  transform: translateX(-100%);
}
</style>
