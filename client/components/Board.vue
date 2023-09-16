<template>
  <div
    id="board"
    class="grid place-items-center bg-gray-300 dark:bg-black-500 border-t border-l border-gray-400 dark:border-black-300">
    <div class="text-center">
      <h2 class="text-[18px] leading-[23px] font-bold text-gray-500 mb-9">This board is empty. Create a new column to get started.</h2>
      <button class="btn mx-auto">+ Add New Column</button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
#board {
  height: calc(100vh - 90px);
}
</style>
