import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
const EventDetailView = () => import('../views/EventDetailView.vue')
const AboutView = () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'events',
      component: EventListView,
      props: route => ({ page: parseInt(route.query.page) || 1 })
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/event/:id',
      name: 'event-detail',
      props: true,
      component: EventDetailView
    }
  ]
})

export default router
