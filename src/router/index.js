// Import the necessary dependencies for Vue and Router
import { createRouter, createWebHistory } from 'vue-router' 
import MovieView from '../views/MovieView.vue' // Import the main view for the movie App

// Set up the router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/", // path
      name: "home", // name
      component: MovieView, //Component
    },
  ],
});

export default router
