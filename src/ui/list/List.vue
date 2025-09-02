<script setup lang="ts">
</script>

<template>
    <ul class="todo__list">
        <slot name="items"></slot>
    </ul>
</template>

<style>

.todo__list {
  list-style-type: none;
}
</style>