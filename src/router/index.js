import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DimensionDefinition from '../views/DimensionDefinition.vue'
import Providers from '../views/Providers.vue'
import Compare from '../views/Compare.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/dimension_definition',
    name: 'dimension_definition',
    component: DimensionDefinition
  },
  {
    path: '/providers',
    name: 'providers',
    component: Providers
  },
  {
    path: '/compare',
    name: 'compare',
    component: Compare,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
