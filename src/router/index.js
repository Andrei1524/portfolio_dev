import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Project from '../views/Project.vue'
import Contact from '../views/Contact.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/projects/:title',
    name: 'Project',
    component: Project
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
