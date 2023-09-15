<template>
  <div class="flex justify-center items-center gap-6 bg-gray-300 dark:bg-black-500 py-[14px] rounded-md mb-[22px]">
    <img
      src="~/assets/images/icon-light-theme.svg"
      class="cursor-pointer"
      alt="sun icon"
      @click="$colorMode.preference = 'light'" />
    <label class="switch relative inline-block w-10 h-5">
      <input
        type="checkbox"
        class="w-0 h-0 opacity-0"
        :checked="$colorMode.value === 'dark'"
        @change="toggleDarkMode" />
      <span class="slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-blue-400 rounded-full"></span>
    </label>
    <img
      src="~/assets/images/icon-dark-theme.svg"
      class="cursor-pointer"
      alt="moon icon"
      @click="$colorMode.preference = 'dark'" />
  </div>
</template>

<script setup>
const colorMode = useColorMode();

const toggleDarkMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
</script>

<style scoped>
.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  border-radius: 50%;
  transition: 150ms;
}

.switch input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}
</style>
