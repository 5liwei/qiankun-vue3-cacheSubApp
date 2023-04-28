import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '',
        name: 'home1',
        redirect: 'hch1'
      },
      {
        path: 'hch1',
        name: 'hch1',
        component: () => import('../components/HomeChild1.vue'),
        children: [
          {
            path: '',
            name: 'hch-1',
            component: () => import('../components/HomeChildChild.vue')
          },
          {
            path: 'hch11',
            name: 'hch11',
            component: () => import('../components/HomeChildChild.vue')
          },
          {
            path: 'hch22',
            name: 'hch22',
            component: () => import('../components/HomeChildChild.vue')
          },
          {
            path: 'hch33',
            name: 'hch33',
            component: () => import('../components/HomeChildChild.vue')
          }
        ]
      },
      {
        path: 'hch2',
        name: 'hch2',

        component: () => import('../components/HomeChild2.vue')
      },
      {
        path: 'hch3',
        name: 'hch3',
        component: () => import('../components/HomeChild3.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    children: [
      {
        path: 'ach1',
        component: () => import('../components/AboutChild1.vue')
      },
      {
        path: 'ach2',
        component: () => import('../components/AboutChild2.vue')
      },
      {
        path: 'ach3',
        component: () => import('../components/AboutChild3.vue')
      }
    ]
  },
  {
    name: 'microApp',
    path: '/micro-app',
    component: () => import('../views/MicroAppView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
