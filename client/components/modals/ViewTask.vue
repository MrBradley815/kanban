<template>
  <div>
    <h2 class="flex justify-between items-center text-black-600 dark:text-white-400 mb-6">
      <span class="max-w-[387px]">Research pricing points of various competitors and trial different business models</span>
      <span class="px-[6px] cursor-pointer">
        <img
          src="~/assets/images/icon-vertical-ellipsis.svg"
          alt="menu icon" />
      </span>
    </h2>
    <p class="lg text-gray-500 mb-6">
      We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the
      subtasks until we have a coherent proposition.
    </p>
    <p class="md text-gray-500 mb-4">Subtasks (2 of 3)</p>
    <ul class="mb-6">
      <li class="mb-2">
        <label class="flex gap-4 items-center bg-gray-300 text-xs font-bold p-3 rounded cursor-pointer">
          <input type="checkbox" />
          <span>Research competitor pricing and business models</span>
        </label>
      </li>
      <li class="mb-2">
        <label class="flex gap-4 items-center bg-gray-300 text-xs font-bold p-3 rounded cursor-pointer">
          <input type="checkbox" />
          <span>Outline a business model that works for our solution</span>
        </label>
      </li>
      <li class="mb-2">
        <label class="flex gap-4 items-center bg-gray-300 text-xs font-bold p-3 rounded cursor-pointer">
          <input type="checkbox" />
          <span>Talk to potential customers about our proposed solution and ask for fair price expectancy</span>
        </label>
      </li>
    </ul>
    <p class="md text-gray-500 mb-4">Current Status</p>
    <SelectMenu
      :options="options"
      :defaultValue="defaultValue"
      :tabindex="tabindex" />
  </div>
</template>

<script setup>
const options = ref(["Todo", "Doing", "Done"]);
const defaultValue = ref("Todo");
const tabindex = ref("0");
</script>

<style scoped>
input:checked + span {
  text-decoration: line-through;
  opacity: 0.5;
}
</style>
