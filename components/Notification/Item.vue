<script setup lang="ts">
  const props = defineProps(["itemData"]);
  const store = useNotifications();
  const show = ref(false);

  setTimeout(() => {show.value = true}, 100)

  if (props.itemData.time !== Infinity) {
    setTimeout(() => {
      show.value = false;
    }, props.itemData.time)
  }
  const setNotificationClass = (type:string) => {
    return `notification-${type}`
  }
  const deleteItem = (i:number) => {
    show.value = false;

    setTimeout(() => {
      store.removeItem(i)
    }, 1000)
  }
</script>

<template>
  <transition name="slide-fade">
    <div
        v-if="show"
        class="notification-item"
        :class="setNotificationClass(props.itemData.type)"
    >
      <div class="notification-text">
        <IconSuccess v-if="props.itemData.type === 'success'" class="min-w-5 w-5 h-5"/>
        <IconError v-if="props.itemData.type === 'error'" class="min-w-5 w-5 h-5"/>
        <IconInfo v-if="props.itemData.type === 'info'" class="min-w-5 w-5 h-5"/>
        {{ props.itemData.message }}
      </div>
      <IconClose
          @click.prevent="deleteItem(props.itemData.id)"
          class="notification-close"/>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.notification-item {
  @apply flex gap-2 items-center justify-between;
  @apply rounded p-1 py-1;
  @apply border border-theme bg-bg;

  &.notification-success {
    @apply bg-green-700 border-green-500;
  }

  &.notification-error {
    @apply bg-red-800 border-red-600;
  }

  &.notification-info {
    @apply bg-sky-700 border-sky-400;
  }
}

.notification-text {
  @apply leading-5 flex gap-1;
}

.notification-close {
  @apply min-w-6 w-6 h-6;
  @apply cursor-pointer duration-300;
  @apply hover:text-theme-light;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
