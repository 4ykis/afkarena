<template>
    <NuxtLayout>
      <Header />

      <div class="page" id="page">
        <NuxtPage />
      </div>

      <Notification />
      <Footer />
    </NuxtLayout>
</template>

<style scoped lang="scss">
  .page {
    margin-top: 48px;
    height: calc(100svh - 48px - 36px);
    padding: 12px 0;
    overflow-y: scroll;
  }
</style>