<template>
    <NuxtLayout>
      <Header />

      <div class="page">
        <NuxtPage />
      </div>

      <Footer />
    </NuxtLayout>
</template>

<style scoped lang="scss">
  .page {
    @apply pt-[58px] pb-[46px];
  }
</style>