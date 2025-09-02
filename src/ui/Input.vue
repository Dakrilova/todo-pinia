<script setup lang="ts">
  import { ref } from 'vue'
  import Button from './Button.vue'
  const text = ref('')

  defineProps({
  })


  function isRussianText(text: string) {
    return /^[а-яА-Я0-9]+$/.test(text.trim());
  }

  const emit = defineEmits(['addTodo', 'errorTodo'])

  function addTodo() {
    if(!isRussianText(text.value)) {
      emit('errorTodo')
    }
    emit('addTodo', text.value)
    text.value = ""
  }

</script>

<template>
  <div class="todo__row">
    <input
      type="text"
      class="todo__input"
      placeholder="напишите вашу задачу"
      @keyup.enter="addTodo"
      v-model="text"
    />
    <Button @click.stop="addTodo" text="Добавить"/>
  </div>

</template>
<style>

  .todo__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #e0e0e0;
    border-radius: 30px;
    margin-bottom: 30px;
    padding-left: 20px;
  }
  .todo__input {
    background-color: transparent;
    padding: 10px;
    border: none;
    outline: none;
    font-size: 16px;
    width: 100%;
  }
</style>