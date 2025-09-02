<template>
<input    
    type="text"
    class="todo__input"
    placeholder="напишите вашу задачу"
    @keyup.enter="addTodo"
    v-model="newTodo"
/>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
const newTodo = ref("");
const hasError =  ref(false);
const errorMessage = ref("");

const todoStore = useTodoStore();

function isRussianText(text: string) {
  return /^[а-яА-Я0-9]+$/.test(text.trim());
}

function addTodo(){
   if (!isRussianText(newTodo.value)) {
    hasError.value = true;
    errorMessage.value = "Разрешён только русский язык";
    console.log('error')
    return;
  }
  hasError.value = false;
  todoStore.addTodo(newTodo.value)
  newTodo.value = "";
}

onMounted(() => {
  todoStore.getTodo()
})

</script>
<style>
.todo__input {
  background-color: transparent;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 16px;
  width: 100%;
}
</style>