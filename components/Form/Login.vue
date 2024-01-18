<script setup >
  const formErrorText = ref('');
  const emit = defineEmits(['success']);
  const heroesStore = useHeroesDataStore();

  async function onSubmit(values) {
    let resp;
    formErrorText.value = '';

    try {
      resp = await useFetch(useRuntimeConfig().public.API + '/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        body: values
      }).then(resp => resp)
    } catch (err) {
      formErrorText.value = useUtils().handleResponseError(err);
      console.log(err)
    }

    if (resp.error.value) {
      formErrorText.value = useUtils().handleResponseError(resp.error.value).message;
      return false;
    } else {
      const data = await useUtils().signIn(resp.data.value.access_token);
      emit("success");
      return true;
    }
  }
</script>

<template>
  <VeeForm @submit="onSubmit" class="auth">
    <label class="auth-field">
      <p class="auth-title">Логін</p>
      <VeeField
          class="input auth-input"
          name="username"
          type="name"
          rules="required" />
      <VeeErrorMessage class="error text-sm"  name="name" />
    </label>

    <label class="auth-field">
      <p class="auth-title">Пароль</p>
      <VeeField
          class="input auth-input"
          name="password"
          type="password"
          rules="password" />
      <VeeErrorMessage class="error text-sm"  name="password" />
    </label>

    <button class="auth-submit btn">Увійти</button>
    <div class="auth-error text-xs error"> {{ formErrorText }}</div>
  </VeeForm>

</template>

<style scoped lang="scss">
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