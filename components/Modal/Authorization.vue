
<script setup>
  const onSubmit = (val) => {
    console.log('test', val);
  }

  const validateEmail = (val) => {
    // if the field is empty
    if (!val) {
      return 'Це поле обов\'язкове';
    }

    // if the field is not a valid email
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(val)) {
      return 'Email має бути існуючим.';
    }
    // All is good
    return true;
  }

  const validateName = (val) => {
    // if the field is empty
    if (!val) {
      return 'Це поле обов\'язкове';
    }

    // All is good
    return true;
  }

  const validatePassword = (val) => {
    // if the field is empty
    if (!val) {
      return 'Це поле обов\'язкове';
    }

    if (val.length < 8) {
      return 'Пароль має містити не менше 8 символів';
    }

    // All is good
    return true;
  }
</script>

<template>
  <Modal class="login" :modal-id="'authorization'" :size="'m'">
    <template v-slot:header>
      Вхід
    </template>

    <template v-slot:content>
      <VeeForm @submit="onSubmit" class="login__content grid gap-2">
        <label class="login__field grid gap-1">
          <p class="login__title ml-1">Email</p>
          <VeeField class="input" name="email" type="email" :rules="validateEmail" />
          <VeeErrorMessage name="email" />
        </label>

        <label class="login__field grid gap-1">
          <p class="login__title ml-1">Name</p>
          <VeeField class="input" name="name" type="name" :rules="validateName" />
          <VeeErrorMessage name="name" />
        </label>

        <label class="login__field grid gap-1">
          <p class="login__title ml-1">Password</p>
          <VeeField class="input" name="password" type="password" :rules="validatePassword" />
          <VeeErrorMessage name="password" />
        </label>

        <button class="login__submit btn">Login</button>
      </VeeForm>
    </template>

    <template v-slot:footer>
      content
    </template>
  </Modal>
</template>
