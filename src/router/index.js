import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventListView.vue'
const About = () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
const EventLayout = () => import(/* webpackChunkName: "event" */ '../views/EventLayoutView.vue')
const EventDetails = () => import(/* webpackChunkName: "event" */ '../views/event/DetailsView.vue')
const EventRegister = () => import(/* webpackChunkName: "event" */ '../views/event/RegisterView.vue')
const EventEdit = () => import(/* webpackChunkName: "event" */ '../views/event/EditView.vue')
const NotFound = () => import(/* webpackChunkName: "not-found" */ '../views/NotFound.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'events',
      component: EventList,
      props: route => ({ page: parseInt(route.query.page) || 1 })
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/event/:id',
      name: 'event-layout',
      props: true,
      component: EventLayout,
      children: [
        {
          path: '',
          name: 'event-details',
          component: EventDetails
        },
        {
          path: 'register',
          name: 'event-register',
          component: EventRegister
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEdit
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '/404/:resource',
      name: '404Resource',
      component: NotFound,
      props: true
    }
  ]
})

export default router
