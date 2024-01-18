<script setup>
  import { onClickOutside, breakpointsTailwind, useBreakpoints } from "@vueuse/core";

  const emit = defineEmits(['setVal']);
  const prop = defineProps(['veebind', 'fieldName', 'val', 'btnsArr'])
  const $inp = ref(prop.val || 0)

  const breakpoints = useBreakpoints(breakpointsTailwind)
  const isMobile = breakpoints.smallerOrEqual('md');

  const buttonContainer = ref(null);
  const showButtons = ref(false);
  const toggleButtons = () => {showButtons.value = !showButtons.value}
  onClickOutside(buttonContainer, () => showButtons.value = false);

  const validateField = () => {
    const value = $inp.value;
    const max = prop.btnsArr[prop.btnsArr.length];

    if (+value < 0) {
      emit('setVal', prop.fieldName, 0);
    } else if (+value > +max) {
      emit('setVal', prop.fieldName, max);
    }
  }

  const setValue = (val) => {
    emit('setVal', prop.fieldName, val);
    showButtons.value = false
  }
</script>

<template>
  <div class="flex gap-1">
    <input class="input"
           v-model="$inp"
           v-bind="veebind"
           @input="validateField"
           @blur="validateField"
           @change="validateField"
    />

    <div class="field-buttons">
      <div class="field-buttons-toggle btn min-w-[2.5rem]"
           @click="toggleButtons" v-if="!isMobile">...</div>
      <div class="field-buttons-wrapper flex gap-1" v-show="isMobile || showButtons" ref="buttonContainer">
        <button
            v-for="btn in btnsArr"
            type="button"
            class="btn w-[2.5rem]"
            @click.prevent="setValue(btn)">
          {{ btn }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .input {
    @apply min-w-[100px]
  }
  .field-buttons {
    @apply flex min-w-[172px] content-center relative md:min-w-[2.5rem]
  }

  .field-buttons-wrapper {
    @apply md:absolute md:top-[calc(100%_+_2px)] right-0 z-10
  }
</style>