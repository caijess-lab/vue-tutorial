import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/tutorial',
      name: 'tutorial',
      component: () => import('../views/Tutorial.vue'),
      children: [
        {
          path: 'hello-world',
          name: "Hello World",
          component: () => import('../views/TutorialContent.vue')
        },
        {
          path: 'declarative-rendering',
          name: "Declarative rendering",
          component: () => import('../views/TutorialContent.vue')
        },
        {
          path: 'attributes-bindings',
          name: "Attributes bindings",
          component: () => import('../views/TutorialContent.vue')
        },
        {
          path: 'event-listeners',
          name: "Event listeners",
          component: () => import('../views/TutorialContent.vue')
        },
        {
          path: 'form-bindings',
          name: "Form Bindings",
          component: () => import('../views/TutorialContent.vue')
        },
        {
          path: 'conditional-rendering',
          name: "Conditional rendering",
          component: () => import('../views/TutorialContent.vue')
        },
        {
          path: 'list-rendering',
          name: "List rendering",
          component: () => import('../views/TutorialContent.vue')
        },
        {
          path: 'computed-property',
          name: "Computed property",
          component: () => import('../views/TutorialContent.vue')
        },
        {
          path: 'lifecycle',
          name: "Lifecycle and Template refs",
          component: () => import('../views/TutorialContent.vue')
        },
        {
          path: 'watchers',
          name: "Watchers",
          component: () => import('../views/TutorialContent.vue')
        },
        {
          path: 'components',
          name: "Components",
          component: () => import('../views/TutorialContent.vue')
        },
        {
          path: 'props',
          name: "Props",
          component: () => import('../views/TutorialContent.vue')
        },
        {
          path: 'emits',
          name: "Emits",
          component: () => import('../views/TutorialContent.vue')
        },
        {
          path: 'slots',
          name: "Slots",
          component: () => import('../views/TutorialContent.vue')
        },
        {
          path: 'autre',
          name: "Autres exemple",
          component: () => import('../views/Autre.vue')
        }
      ]
    }
  ]
})

export default router
