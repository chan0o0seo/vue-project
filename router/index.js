import { createMemoryHistory, createRouter } from 'vue-router'

import Header from '../components/login.vue'

const routes = [
  { path: '/', component : Header},   
]

const router = createRouter({// -> for browser history
  history: createMemoryHistory(), //createWebHistory(), -> for browser history
  routes, 
})

export default router; 