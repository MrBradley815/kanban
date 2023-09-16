<template>
  <div>
    <h2 class="text-black-600 mb-6">Add New Board</h2>
    <p class="md text-gray-500 mb-2">Name</p>
    <input
      class="mb-6"
      placeholder="e.g. Web Design" />
    <p class="md text-gray-500 mb-2">Columns</p>
    <div class="flex items-center gap-4 mb-3">
      <input
        value="Todo"
        placeholder="e.g. Todo" />
      <img
        class="cursor-pointer hover:fill-red-400"
        src="~/assets/images/icon-cross.svg"
        alt="delete icon" />
    </div>
    <div class="flex items-center gap-4 mb-3">
      <input
        value="Doing"
        placeholder="e.g. Doing" />
      <img
        class="cursor-pointer hover:fill-red-400"
        src="~/assets/images/icon-cross.svg"
        alt="delete icon" />
    </div>
    <div class="flex items-center gap-4 mb-3">
      <input
        value="Done"
        placeholder="e.g. Done" />
      <img
        class="cursor-pointer hover:fill-red-400"
        src="~/assets/images/icon-cross.svg"
        alt="delete icon" />
    </div>
    <button class="btn-secondary text-[13px] leading-[23px] font-bold p-2 w-full mb-6">+ Add New Column</button>
    <button class="btn text-[13px] leading-[23px] font-bold p-2 w-full">Create New Board</button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
