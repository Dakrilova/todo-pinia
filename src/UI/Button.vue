<template>
    <button @click="addTodo" class="todo__btn">Добавить</button>
</template>
<script setup>
    
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
</script>
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