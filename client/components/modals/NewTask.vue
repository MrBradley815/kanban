<template>
  <div>
    <h2 class="text-black-600 mb-6">Add New Task</h2>
    <p class="md text-gray-500 mb-2">Title</p>
    <input
      type="text"
      class="mb-6"
      placeholder="e.g. Take coffee break" />
    <p class="md text-gray-500 mb-2">Description</p>
    <textarea
      class="mb-6 resize-none"
      placeholder="e.g. It's always good to take a break. This 15 minute break will 
recharge the batteries a little."></textarea>
    <p class="md text-gray-500 mb-2">Subtasks</p>
    <div class="flex items-center gap-4 mb-3">
      <input
        type="text"
        placeholder="e.g. Make coffee" />
      <img
        class="cursor-pointer hover:fill-red-400"
        src="~/assets/images/icon-cross.svg"
        alt="delete icon" />
    </div>
    <div class="flex items-center gap-4 mb-3">
      <input
        type="text"
        placeholder="e.g. Drink coffee & smile" />
      <img
        class="cursor-pointer hover:fill-red-400"
        src="~/assets/images/icon-cross.svg"
        alt="delete icon" />
    </div>
    <button class="btn-secondary text-[13px] leading-[23px] font-bold p-2 w-full mb-6">+ Add New Subtask</button>
    <p class="md text-gray-500 mb-2">Status</p>
    <SelectMenu
      :options="options"
      :defaultValue="defaultValue"
      :tabindex="tabindex" />
    <button class="btn text-[13px] leading-[23px] font-bold p-2 w-full mt-6">Create Task</button>
  </div>
</template>

<script setup>
const options = ref(["Todo", "Doing", "Done"]);
const defaultValue = ref("Todo");
const tabindex = ref("0");
</script>

<style scoped></style>
