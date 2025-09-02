<template>
    <ul class="todo__list">
        <Item></Item>
    </ul>
</template>
<script setup>
import Item from "../UI/Item.vue"
</script>
<style>

.todo__list {
  list-style-type: none;
}
</style>