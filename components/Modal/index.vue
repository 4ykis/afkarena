<script setup >
  // import {useModalStore} from "~/stores/modals.js";

  const store = useModalStore()

  const props = defineProps(['modalId', 'size']);

  const modalSize = () => {
   return `modal--${props.size || 'm'}`;
  }
</script>

<template>
  <div class="modal" :class="modalSize()" :id="`modal-${modalId}`" v-if="store.getModalState(modalId)">
    <div class="modal__wrapper bg-bg-light rounded-xl overflow-hidden" >
      <div class="modal__header relative grid px-8 text-center items-center bg-bg text-txt text-2xl pl-4 pr-2 py-2">
        <slot name="header"></slot>

        <IconClose
            @click.prevent="store.changeState(modalId)"
            class="absolute right-2 top-2 w-8 h-8 ml-auto cursor-pointer hover:text-theme-light" />
      </div>

      <div class="modal__content px-4 py-4">
        <slot name="content" />
      </div>

      <div class="modal__footer bg-bg px-4 py-2" v-if="$slots.footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
