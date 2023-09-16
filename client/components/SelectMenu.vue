<template>
  <div
    class="custom-select"
    :tabindex="tabindex"
    @blur="open = false">
    <div
      class="selected"
      :class="{ open: open }"
      @click="open = !open">
      {{ selected }}
    </div>
    <div
      class="items"
      :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        ">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["options", "defaultValue", "tabindex"]);
const emit = defineEmits(["input"]);
const { options, defaultValue, tabindex } = props;
const selected = ref(null);
const open = ref(false);

selected.value = defaultValue ? defaultValue : options.length > 0 ? options[0] : null;
onMounted(() => {
  emit("input", selected);
});
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 38px;
  line-height: 38px;
  font-size: 13px;
  font-weight: medium;
}

.custom-select .selected {
  background-color: #ffffff;
  border-radius: 6px;
  border: 1px solid rgba(130, 143, 163, 25%);
  color: #000112;
  padding-left: 16px;
  cursor: pointer;
  user-select: none;
  margin-bottom: 8px;
}

.custom-select .selected.open {
  border: 1px solid #635fc7;
  border-radius: 6px;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 20px;
  right: 16px;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #635fc7 transparent transparent transparent;
}

.custom-select .items {
  color: #828fa3;
  border-radius: 8px;
  overflow: hidden;
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0 10px 20px 0 rgba(54, 78, 126, 25%);
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: #828fa3;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  color: #635fc7;
}

.selectHide {
  display: none;
}
</style>
