<template>
  <div>
    <h2 class="text-black-600 mb-6">Edit Task</h2>
    <p class="md text-gray-500 mb-2">Title</p>
    <input
      class="mb-6"
      value="Add authentication endpoints"
      placeholder="e.g. Take coffee break" />
    <p class="md text-gray-500 mb-2">Description</p>
    <textarea
      class="mb-6 resize-none"
      placeholder="e.g. It's always good to take a break. This 15 minute break will 
recharge the batteries a little."></textarea>
    <p class="md text-gray-500 mb-2">Subtasks</p>
    <div class="flex items-center gap-4 mb-3">
      <input
        value="Define user model"
        placeholder="e.g. Define user model" />
      <img
        class="cursor-pointer hover:fill-red-400"
        src="~/assets/images/icon-cross.svg"
        alt="delete icon" />
    </div>
    <div class="flex items-center gap-4 mb-3">
      <input
        value="Add auth endpointsl"
        placeholder="e.g. Add auth endpointsl" />
      <img
        class="cursor-pointer hover:fill-red-400"
        src="~/assets/images/icon-cross.svg"
        alt="delete icon" />
    </div>
    <button class="btn-secondary text-[13px] leading-[23px] font-bold p-2 w-full mb-6">+ Add New Subtask</button>
    <p class="md text-gray-500 mb-2">Status</p>
    <select class="mb-6">
      <option value="Todo">Todo</option>
      <option value="Doing">Doing</option>
      <option value="Done">Done</option>
    </select>
    <button class="btn text-[13px] leading-[23px] font-bold p-2 w-full">Save Changes</button>
  </div>
</template>

<script setup></script>

<style scoped></style>
