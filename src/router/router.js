import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main.vue";
import UserPage from "@/pages/UserPage.vue";

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/userPage',
    component: UserPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
