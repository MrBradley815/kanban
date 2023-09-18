import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", () => {
  const isOpen = ref(false);
  const activeModal = ref(null);

  function toggleModal(val, ref) {
    isOpen.value = val;
    activeModal.value = ref;
  }

  return { isOpen, activeModal, toggleModal };
});
