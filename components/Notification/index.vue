<script setup>
  const store = useNotifications();
  const notification = store.getAllNotifications()
</script>

<template>
  <div class="notification">
    <NotificationItem v-for="item in notification" :itemData="{...item}" />
  </div>
</template>

<style scoped lang="scss">
.notification {
  @apply fixed z-1003 right-[30px] bottom-[56px];
  @apply flex gap-2 flex-col items-end;
  @apply max-w-[320px];
}


</style>