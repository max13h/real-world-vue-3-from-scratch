import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventListView.vue'
import NProgress from "nprogress";
const About = () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
const EventLayout = () => import(/* webpackChunkName: "event" */ '../views/EventLayoutView.vue')
const EventDetails = () => import(/* webpackChunkName: "event" */ '../views/event/DetailsView.vue')
const EventRegister = () => import(/* webpackChunkName: "event" */ '../views/event/RegisterView.vue')
const EventEdit = () => import(/* webpackChunkName: "event" */ '../views/event/EditView.vue')
const NotFound = () => import(/* webpackChunkName: "not-found" */ '../views/NotFound.vue')
const NetworkError = () => import(/* webpackChunkName: "network-error" */ '../views/NetworkError.vue')
import EventService from "@/services/EventService"
import { useEventStore } from "../store/event";

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
      beforeEnter: to => {
        const eventStore = useEventStore()
        return EventService.getEvent(to.params.id)
          .then((response) => {
            eventStore.event = response.data
          })
          .catch((error) => {
            if (error.response && error.response.status == 404) {
              console.log(error)
              return { name: '404-resource', params: { resource: 'event' } }
            } else {
              return { name: 'network-error' }
            }
          })
      },
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
      name: 'not-found',
      component: NotFound,
    },
    {
      path: '/404/:resource',
      name: '404-resource',
      component: NotFound,
      props: true
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: NetworkError,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) { // <----
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
