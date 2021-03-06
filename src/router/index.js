import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

//
import FormView from '@/views/Form'
import TableView from '@/views/Table'
import NotFoundView from '@/views/NotFound'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/form',
    name: 'form',
    component: FormView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/table',
    name: 'table',
    component: TableView
  },
  {
    path: '/not-found',
    name: 'not-found',
    component: NotFoundView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
