<template>
    <li
        v-for="(todo, index) in todoStore.todoActiveList"
        :key="index"
        :class="{ checked: todo.completed }"
        @click="todoStore.toggleTodo(todo.id)"

        >
        {{ todo.text }}
        <span @click.stop="todoStore.removeTodo(todo.id)">×</span>
    </li>
</template>
<script>

</script>
<style>

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