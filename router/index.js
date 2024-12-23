import { createMemoryHistory, createRouter } from 'vue-router'

import Login from '../components/appLogin.vue';
import Main from '../components/appMain.vue';
import MemType from '../components/MemType.vue';

const routes = [
  { path: '/', component : Main},   
  { path: '/login', component : Login}

]

const router = createRouter({// -> for browser history
  history: createMemoryHistory(), //createWebHistory(), -> for browser history
  routes, 
})

export default router; 