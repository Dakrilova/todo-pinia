<script setup lang="ts">

  defineProps({
    text: {
      type: String
    }
  })
</script>

<template>
    <h2 class="todo__title">{{text}}</h2>
</template>

<style>
  .todo__title {
    font-weight: 300;
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
</style>
