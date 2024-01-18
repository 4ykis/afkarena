<script setup >
  const formErrorText = ref('');
  const emit = defineEmits(['success'])

  const isLoading = ref(false)

  async function onSubmit(values) {
    let resp;
    formErrorText.value = '';
    isLoading.value = true;

    resp = await useFetch(useRuntimeConfig().public.API + '/register', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: values
    }).then(resp => {
      isLoading.value = false;
      return resp;
    })

    if (resp.error.value) {
      formErrorText.value = useUtils().handleResponseError(resp.error.value).message;
      return false;
    } else {
      emit("success");
      return true;
    }
  }
</script>

<template>
  <VeeForm v-slot="{ handleSubmit, values }" as="div">
    <form @submit="handleSubmit($event, onSubmit)" class="auth">
      <label class="auth-field">
        <p class="auth-title">Email</p>
        <VeeField
            class="input auth-input"
            name="email"
            type="email"
            rules="email"
        />
        <VeeErrorMessage class="error text-sm" name="email" />
      </label>

      <label class="auth-field">
        <p class="auth-title">Логін</p>
        <VeeField
            class="input auth-input"
            name="username"
            type="name"
            rules="required" />
        <VeeErrorMessage class="error text-sm" name="name" />
      </label>

      <label class="auth-field">
        <p class="auth-title">Пароль</p>
        <VeeField
            class="input auth-input"
            name="password"
            type="password"
            rules="password" />
        <VeeErrorMessage class="error text-sm" name="password" />
      </label>

      <button type="submit" class="auth-submit btn">Зареєструватись</button>
      <div class="auth-error text-xs error"> {{ formErrorText }}</div>
    </form>
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
</style>