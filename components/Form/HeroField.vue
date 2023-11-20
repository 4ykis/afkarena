<script setup lang="ts">
  const props = defineProps(['id', 'prefix', 'val', 'btnVal']);
  import { onClickOutside, breakpointsTailwind, useBreakpoints } from '@vueuse/core'

  const breakpoints = useBreakpoints(breakpointsTailwind);
  const isMobile = breakpoints.smallerOrEqual('md');
  const field = ref(props.val || '0');
  const buttonContainer = ref(null);
  const showButtons = ref(false);

  const validateField = () => {
    let val =  field.value;
    val = (val < 0) ? 0 : val;
    val = (val > props.values[props.values.length - 1]) ? props.values[props.values.length - 1] : val

    field.value = val;
  }

  const toggleButtons = () => showButtons.value = !showButtons.value

  onClickOutside(buttonContainer, toggleButtons);

  const setValue = (val) => {
    field.value = val;
    toggleButtons()
  }

</script>

<template>
  <input
    type="text"
    placeholder="Signature Item"
    class="input flex-grow"
    v-model.number="field"
    @keyup="validateField()"
    :name="`${id}-${prefix}`"
    :id="`${id}-${prefix}`"
  >
  <div class="field-buttons flex">
    <div class="field-buttons__toggle btn min-w-[2.5rem]" @click="toggleButtons"  v-if="!isMobile">...</div>
    <div class="field-buttons__wrapper flex gap-1" v-if="isMobile || showButtons" ref="buttonContainer">
      <button
        v-for="btn in btnVal"
        class="btn w-[2.5rem]"
        @click.prevent="setValue(btn)"
      >
        {{ btn }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .field-buttons {
    display: flex;
    min-width: 172px;
    justify-content: flex-end;
    position: relative;

    @media (min-width: 768px) {
      min-width: 2.5rem;
    }

    &__wrapper {
      @media (min-width: 768px) {
        position: absolute;
        top: calc(100% + 2px);
        right: 0;
        z-index: 10;
      }
    }
  }
</style>