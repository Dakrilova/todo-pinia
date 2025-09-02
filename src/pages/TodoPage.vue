<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useTodoStore } from "../store/todo";
import Title from "../ui/Title.vue";
import Error from "../ui/Error.vue";
import Input from "../ui/Input.vue";
import {Item, List} from "../ui/list";


const hasError =  ref(false);
const errorMessage = ref("");

const todoStore = useTodoStore()

function errorTodo() {
  hasError.value = true;
  errorMessage.value = "Разрешён только русский язык";
  return;
}

function addTodo(data: string){
  hasError.value = false;
  todoStore.addTodo(data)
}

onMounted(() => {
  todoStore.getTodo()
})

</script>

<template>
 <div class="todo">
    <div class="todo__box">
      <Title text="Список задач"/>
      <Input @add-todo="(data) => addTodo(data)" @error-todo="errorTodo"/>
      <Error :has-error="hasError" :error-message="errorMessage"/>
      <List>
        <template #items>
          <Item
            v-for="(todo, index) in todoStore.todoActiveList"
            :key="index"
            :completed="todo.completed"
            :text="todo.text"
            @remove-todo="todoStore.removeTodo(todo.id)"
            @toggle-todo="todoStore.toggleTodo(todo.id)"
            />
        </template>
      </List>
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
  margin: 100px auto;
}
</style>