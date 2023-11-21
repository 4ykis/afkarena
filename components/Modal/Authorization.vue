<script setup>
  const isRegister = ref(false);
  const onSubmitRegister = (val) => {
    console.log('register', val);
  }

  const onSubmitLogin = (val) => {
    console.log('login', val);
  }

  const toggleModalContent = () => {
    isRegister.value = !isRegister.value
  }
</script>

<template>
  <Modal class="auth" :modal-id="'authorization'" :size="'s'">
    <template v-slot:header>
      <span v-if="!isRegister">Вхід</span>
      <span v-if="isRegister">Реєстрація</span>
    </template>

    <template v-slot:content>
      <VeeForm @submit="onSubmitLogin" v-if="!isRegister" class="auth">
        <label class="auth-field">
          <p class="auth-title">Логін</p>
          <VeeField
              class="input auth-input"
              name="auth"
              type="name"
              rules="required" />
          <VeeErrorMessage name="name" />
        </label>

        <label class="auth-field">
          <p class="auth-title">Пароль</p>
          <VeeField
            class="input auth-input"
            name="password"
            type="password"
            rules="password" />
          <VeeErrorMessage name="password" />
        </label>

        <button class="auth-submit btn">Увійти</button>

        <a @click.prevent="toggleModalContent" class="auth-change-form">Ще немає акаунта?</a>
      </VeeForm>

      <VeeForm @submit="onSubmitRegister" v-if="isRegister" class="auth">
        <label class="auth-field">
          <p class="auth-title">Email</p>
          <VeeField
              class="input auth-input"
              name="email"
              type="email"
              rules="email"
          />
          <VeeErrorMessage name="email" />
        </label>

        <label class="auth-field">
          <p class="auth-title">Логін</p>
          <VeeField
              class="input auth-input"
              name="auth"
              type="name"
              rules="required" />
          <VeeErrorMessage name="name" />
        </label>

        <label class="auth-field">
          <p class="auth-title">Пароль</p>
          <VeeField
              class="input auth-input"
              name="password"
              type="password"
              rules="password" />
          <VeeErrorMessage name="password" />
        </label>

        <button class="auth-submit btn">Зареєструватись</button>

        <a @click.prevent="toggleModalContent" class="auth-change-form">Вже зареєстровані?</a>
      </VeeForm>
    </template>
  </Modal>
</template>

<style scoped>
  .auth {
    @apply flex flex-col justify-center items-center gap-2
  }

  .auth-field {
    @apply relative grid gap-1 w-full max-w-xs
  }

  .auth-title {
    @apply flex items-center pl-1;
  }

  .auth-submit {
    @apply mt-2 max-w-xs w-full
  }

  .auth-change-form {
    @apply text-sm mt-2 text-txt cursor-pointer hover:text-theme-light duration-200
  }
</style>