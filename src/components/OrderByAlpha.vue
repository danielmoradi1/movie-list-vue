<template>
  <button class="btn btn-primary" @click="$emit('sortAlpha')">Sort by Alphabet</button>
</template>

<script setup>
defineEmits(['sortAlpha']);
</script>

<style scoped>
button {
  margin: 10px;
  padding: 10px;
  border: none;
}

</style>
