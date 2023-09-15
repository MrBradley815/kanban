import { defineStore } from "pinia";

export const useNavbarStore = defineStore("navbar", () => {
  const isHidden = ref(false);

  function toggleSideNav() {
    isHidden.value = !isHidden.value;
  }

  return { isHidden, toggleSideNav };
});
