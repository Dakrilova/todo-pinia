<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useTodoStore, type ITodo } from "../store/todo";
import Button from '../UI/Button.vue';
import Title from '../UI/Title.vue';
import Error from '../UI/Error.vue';
import List from '../UI/List.vue';
import Input from "../UI/Input.vue";

const newTodo = ref("");
const hasError =  ref(false);
const errorMessage = ref("");

const todoStore = useTodoStore()

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

<template>
 <div class="todo">
    <div class="todo__box">
      <Title></Title>
      <div class="todo__row">
        <Input></Input>
        <Button></Button>
      </div>
      <Error></Error>
      <List></List>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #111;
}
.todo {
  height: 100%;
  font-family: serif;
  padding: 20px;
}
.todo__box {
  max-width: 680px;
  border-radius: 10px;
  background-color: #fff;
  padding: 40px 30px 70px;
  margin: 100px auto -20;
}
.todo__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e0e0e0;
  border-radius: 30px;
  margin-bottom: 30px;
  padding-left: 20px;
}
</style>