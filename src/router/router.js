import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main.vue";
import UserPage from "@/pages/UserPage.vue";
import FavoritesPosts from "@/pages/FavoritesPosts.vue";

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/userPage',
    component: UserPage
  },
  {
    path: '/favorites',
    component: FavoritesPosts
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
