<script setup>
  const route = useRoute();
  console.log(route.params)

  const counter = useCounter();
</script>

<template>
  <div>
    <h1 class="text-center mb-5">Page id: {{ $route.params.id }}</h1>

    <div class="flex gap-2 items-center">
      Counter: {{ counter }}
      <buttton class="cursor-pointer w-10 h-10 bg-slate-900 justify-center flex items-center" @click="counter++">+</buttton>
      <buttton class="cursor-pointer w-10 h-10 bg-slate-900 justify-center flex items-center" @click="counter--">-</buttton>
    </div>
  </div>
</template>