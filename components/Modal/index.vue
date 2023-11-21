<script setup >
  const store = useModalStore()
  const allowBodyScroll = useUtils().allowBodyScroll
  const props = defineProps(['modalId', 'size']);
  const modalSize = () => {
   return `modal--${props.size || 'm'}`;
  }

  const closeModal = () => {
    store.changeState(props.modalId)
    allowBodyScroll()
  }
</script>

<template>
  <div class="modal" :class="modalSize()" :id="`modal-${modalId}`" v-if="store.getModalState(modalId)">
    <div class="modal-backdrop" @click.prevent="closeModal"></div>
    <div class="modal-wrapper" >
      <div class="modal-header">
        <slot name="header"></slot>

        <IconClose
          @click.prevent="closeModal"
          class="modal-close" />
      </div>

      <div class="modal-content">
        <slot name="content" />
      </div>

      <div class="modal-footer " v-if="$slots.footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .modal {
    @apply fixed inset-0 z-1000;
    @apply flex items-center justify-center p-3;
  }

  .modal-backdrop {
    @apply fixed inset-0 z-1001 bg-black/90
  }

  .modal-wrapper {
    @apply relative z-1002 min-w-[290px] w-full bg-bg-light rounded-xl overflow-hidden;

    .modal--s & {
      @apply max-w-[360px]
    }

    .modal--m & {
      @apply max-w-[480px]
    }

    .modal--l & {
      @apply max-w-[640px]
    }

    .modal--xl & {
      @apply max-w-[720px]
    }

    .modal--full & {
      @apply max-w-[80%]
    }
  }

  .modal-header {
    @apply relative grid items-center text-center;
    @apply px-8 py-2;
    @apply bg-bg text-txt text-2xl;
  }

  .modal-content {
    @apply px-4 py-4;
  }

  .modal-footer {
    @apply bg-bg px-4 py-2;
  }

  .modal-close {
    @apply absolute right-2 top-2;
    @apply w-8 h-8 ml-auto;
    @apply text-txt cursor-pointer hover:text-theme-light
  }
</style>
