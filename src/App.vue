<script setup>
import { RouterLink, RouterView } from "vue-router"; // Import router components

</script>

<template>
  <div class="container">
    <h1>Movie List</h1>
    <RouterView />
  </div>
</template>


<style scoped>
.container{
  text-align: center;
  padding-top: 10em;
}
</style>
