<script setup>
import { ref, watch, onMounted } from "vue";

const newTodo = ref("");
const todo = ref([]);
const hasError =  ref(false);
const errorMessage = ref("");
function isRussianText(text) {
  return /^[А-Яа-яЁё\s]+$/.test(text.trim());
}

function addTodo(){ 
  if (newTodo.value.trim() === "") {
    hasError.value = true;
    errMsg.value = "Введите текст";
    return
  }
   if (!isRussianText(newTodo.value)) {
    hasError.value = true;
    errorMessage.value = "Разрешён только русский язык";
    return;
  }
  hasError.value = false;
  todo.value.push({ text: newTodo.value, completed: false });
  newTodo.value = "";
}

function removeTodo(index) {
  todo.value.splice(index, 1);
}

function toggleTodo(index) {
  todo.value[index].completed = !todo.value[index].completed;
}

watch(
  todo,
  (newTodo) => {
    localStorage.setItem("todo", JSON.stringify(newTodo));
  },
  { deep: true }
);

onMounted(() => {
  const saved = localStorage.getItem("todo");
  if (saved) {
    todo.value = JSON.parse(saved);
  }
});
</script>

<template>
  <div class="todo">
    <div class="todo__box">
      <h2 class="todo__title">Список задач</h2>
      <div class="todo__row">
        <input
          type="text"
          class="todo__input"
          placeholder="напишите вашу задачу"
          @keyup.enter="addTodo"
          v-model="newTodo"
          :class="{ 'error-border': hasError  }"
        />
        <button @click="addTodo" class="todo__btn" :class="todo__btn">Добавить</button>
      </div>
      <p v-if="hasError" class="error-text">{{ errorMessage }}</p>
      <ul class="todo__list">
        <li
          v-for="(todo, index) in todo"
          :key="index"
          :class="{ checked: todo.completed }"
          @click="toggleTodo(index)"
          
        >
          {{ todo.text }}
          <span @click.stop="removeTodo(index)">×</span>
        </li>
      </ul>
      <ul class="todo__list__complete">
        <li
          v-for="(todo, index) in todo"
          :key="index"
          :class="{ checked: todo.completed }"
          @click="toggleTodo(index)"
          
        >
          {{ todo.text }}
          <span @click.stop="removeTodo(index)">×</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.error-border {
  border: 2px solid red;
}

.error-text {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}
body {
  background-color: #111;
}
.error-border{
  border: 2px solid red;
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
  margin: 100px auto -20px;
}
.todo__title {
  font-weight: 300;
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
  text-transform: uppercase;
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
.todo__input {
  background-color: transparent;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 16px;
  width: 100%;
}
.todo__btn {
  border: none;
  outline: none;
  padding: 16px 30px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 30px;
}
.todo__list {
  list-style-type: none;
}
.todo__list li {
  cursor: pointer;
  font-size: 18px;
  padding: 12px 10px 12px 50px;
  position: relative;
}
.todo__list li::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #111;
  top: 12px;
  left: 10px;
}

.todo__list li.checked {
  color: #555;
  text-decoration: line-through;
}
.todo__list li.checked::before {
  color: #4b4a4a;
  background-color: #4b4a4a;
}
.todo__list li.checked::after {
  content: "\2714";
  position: absolute;
  top: 11px;
  left: 14px;
  color: #fff;
}
.todo__list li span {
  font-size: 18px;
  width: 40px;
  height: 40px;
  position: absolute;
  border-radius: 50%;
  color: #555;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  top: 5px;
  font-size: 22px;
}
.todo__list li span:hover {
  background-color: #dbdbdb;
}
</style>
