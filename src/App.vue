<script setup lang="ts">


</script>

<template>
  <header class="header">
    <div class="container">
      <router-link :to="{name: 'main'}">
        Главная
      </router-link>
      <router-link :to="{name: 'archive'}">
        Архив
      </router-link>
    </div>
  </header>
  <main class="main">
    <router-view :key="$route.fullPath"></router-view>
  </main>
</template>

<style>

.header {
  padding: 20px 0px;
}

.container {
  --width: 1170px;
  max-width: calc(var(--width)) - 40px;
  padding: 0px 20px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
}

.main {
  margin-top: 100px;
}
</style>
