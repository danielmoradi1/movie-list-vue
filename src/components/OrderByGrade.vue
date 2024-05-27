<template>
  <button class="btn btn-primary" @click="$emit('sortGrade')">Sort by Grade</button>
</template>

<script setup>
defineEmits(['sortGrade']);
</script>

<style scoped>
button {
  margin: 10px;
  padding: 10px;
  border: none;
}
</style>
