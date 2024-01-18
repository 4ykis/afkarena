<script setup>
  const isRegisterStep = ref(false);
  const isSignUp = ref(false);
  const isLogedIn = ref(false);
  const toggleModalContent = () => {
    isRegisterStep.value = !isRegisterStep.value
    isSignUp.value = false;
    isLogedIn.value = false;
  }

  const successRegistration = function() {
    isSignUp.value = true;
  }

  const successLogin = function() {
    isSignUp.value = false;
    isLogedIn.value = true;

    setTimeout(() => {
      location.reload()
    }, 1000)
  }

  const onClose = () => {
    isRegisterStep.value = false;
    isSignUp.value = false;
    isLogedIn.value = false;
  }
</script>

<template>
  <Modal class="auth" :modal-id="'authorization'" :size="'s'" :afterClose="onClose">
    <template #header>
      <span v-if="!isRegisterStep">Вхід</span>
      <span v-else>Реєстрація</span>
    </template>

    <template #content="props">
      <template v-if="!isRegisterStep">
        <template v-if="isLogedIn">
          <p class=" text-center py-10 text-lg">
            Ви успішно увійшли.
          </p>
        </template>

        <template v-else>
          <FormLogin @success="successLogin"/>

          <a @click.prevent="toggleModalContent" class="auth-change-form">Ще немає акаунта?</a>
        </template>
      </template>

      <template v-if="isRegisterStep">
        <template v-if="isSignUp">
          <p class=" text-center py-10 text-lg">
            Ви успішно зареєструвались, щоб увійти натисніть
            <a class="text-theme hover:text-theme-light cursor-pointer" @click.prevent="toggleModalContent">сюди</a>.
          </p>
        </template>

        <template v-else>
          <FormRegistration @success="successRegistration"/>

          <a @click.prevent="toggleModalContent" class="auth-change-form">Вже зареєстровані?</a>
        </template>
      </template>
    </template>
  </Modal>
</template>

<style scoped>
  .auth-change-form {
    @apply block text-sm mt-4 text-center text-txt cursor-pointer hover:text-theme-light duration-200
  }

  .modal-enter-active {
    transition: all 0.3s ease-out;
  }

  .modal-leave-active {
    transition: all 0.15s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
  }
</style>