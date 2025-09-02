<template>
    <p v-if="hasError" class="error-text">{{ errorMessage }}</p>
</template>
<script setup>

const newTodo = ref("");
const hasError =  ref(false);
const errorMessage = ref("");


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
    .error-text {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}
</style>