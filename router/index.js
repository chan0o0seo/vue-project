import { createMemoryHistory, createRouter } from 'vue-router'
import Login from '../components/login.vue'
import Main from '../components/MainPage/MainPage.vue'

const routes = [
  { path: '/', component: Main, name: "main" },
  { path: '/login', component: Login, name: 'login' },
];

const router = createRouter({
  history: createMemoryHistory(), //createWebHistory(), -> for browser history
  routes,
})

export default router
