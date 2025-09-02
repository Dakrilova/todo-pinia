<script setup lang="ts">
defineProps({
  hasError: {
    type: Boolean
  },
  errorMessage: {
    type:String
  }
})
</script>


<template>
    <p v-if="hasError" class="error-text">{{ errorMessage }}</p>
</template>

<style>
    .error-text {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}
</style>