<script setup>
// Props and events for the movie item component
defineProps(['title', 'grade']);
defineEmits(['deleteMovie']);
</script>

<template>
    <div class="movie-item">
        {{ title }}
        <span v-for="n in parseInt(grade)" :key="n">
        <img src="/star-icon.webp" alt="Star" style="width: 20px;" />
        </span>
        <button class="btn btn-danger" @click="$emit('deleteMovie')">Delete</button>
    </div>
</template>

<style scoped>
.movie-item{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
}

.btn{
    float: right;
}
.movie-item span{
    align-items: center;
}
</style>
