<script setup>
  definePageMeta({
    middleware: 'before-all'
  })

  const counter = useCounter();

  const {sayHi} = useUtils()
  const { $sayHi } = useNuxtApp()

  // $sayHi('test');
  //
  // sayHi('event')
</script>

<template>
  <div class="text-center">
    <h1>Test Page</h1>

    <img src="@/assets/images/heroes/Canisa%20&%20Ruke_Icon.jpg" alt="">
    <IconClose class="w-10 h-10 text-theme-light" />

    <Counter />
    <div class="flex gap-2 items-center">
      Counter: {{ counter }}
      <buttton class="cursor-pointer w-10 h-10 bg-slate-900 justify-center flex items-center" @click="counter++">+</buttton>
      <buttton class="cursor-pointer w-10 h-10 bg-slate-900 justify-center flex items-center" @click="counter--">-</buttton>
    </div>
  </div>
</template>