
<template>
  <div class="container">
    <div class="inner">
      <h1>Реєстрація</h1>
      <FormRegistration />
      <RouterLink to="/auth/login" class="link">Вже зареєстровані?</RouterLink>
    </div>
  </div>
</template>

<style scoped>
  .container {
    @apply min-h-full grid items-center
  }

  h1 {
    @apply text-3xl text-center mb-5
  }

  .link {
    @apply block text-sm mt-4 text-center text-txt cursor-pointer hover:text-theme-light duration-200
  }
</style>