<script setup lang="ts">
  defineProps({
    text: {
      type: String
    }
  })
</script>


<template>
  <button class="todo__btn">{{ text }}</button>
</template>

<style>
  .todo__btn {
    border: none;
    outline: none;
    padding: 16px 30px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 30px;
  }
</style>