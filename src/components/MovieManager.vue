<script setup>
import { ref } from "vue";
import MovieItem from "./MovieItem.vue";

// Movies array, input and messages
const movies = ref([]);
const title = ref("");
const grade = ref("");
const message = ref("");

// Funktion to add a movie to the list
function addMovie() {
    if (!title.value || !grade.value) {
        Swal.fire("Please enter title and grade!"); 
        return;
    }
    movies.value.push({ title: title.value, grade: grade.value });
    // Reset the title, grade and message
    title.value = ""; 
    grade.value = "";
    message.value = "";
}

// function to delete a movie from the list
function deleteMovie(index) {
    movies.value.splice(index, 1); // Remove movie by index from the list
}
</script>


<template>
    <main class="movie-container">
        <h3>Add a movie</h3>
        <div class="message" v-if="message">{{ message }}</div>
        <div class="add-movie">
        <input
        v-model="title"
        type="text"
        placeholder="Movie name"
        class="form-control"
        />
        <select v-model="grade" class="form-control">
            <option disabled value="">Select a grade</option>
            <option v-for="n in 5" :value="n.toString()" :key="n">{{ n }}</option>
        </select>
        <button class="btn btn-primary" @click="addMovie">Add Movie</button> 
    </div>

    <div class="movie-item">
        <ul>
            <li v-for="(movie, index) in movies" :key="index">
            <MovieItem
                :title="movie.title"
                :grade="movie.grade"
                @deleteMovie="deleteMovie(index)"
            />
            </li>
        </ul>
        </div>
    </main>
</template>


<style scoped>
.movie-container {
    padding-top: 2em;
}
.add-movie {
    display: flex;
    flex-direction: column;
    gap: 1em;
}

.movie-item {
    padding: 20px;
}

.movie-item ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1em;
}

.movie-item li {
    background-color: rgb(224, 224, 224);
    border-radius: 1em;
    text-transform: capitalize;
}
</style>
