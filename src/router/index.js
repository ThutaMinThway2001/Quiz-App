import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Question from '../views/QuestionSections.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/questions',
    name: 'Questions',
    component: Question
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
