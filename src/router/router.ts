import { createWebHistory, createRouter, type RouteRecordRaw } from 'vue-router'

import TodoPage from '../pages/TodoPage.vue'
import ArchivePage from '../pages/ArchivePage.vue'
const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'main',  component: TodoPage },
  { path: '/archive', name: 'archive', component: ArchivePage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})