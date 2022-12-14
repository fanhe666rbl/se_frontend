import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views//login/login.vue')
  },
  {
    path: '/',
    name: 'homePage',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/classes',
    name: 'classes',
    component: () => import('../views/ClassList.vue')
  },
  {
    path: '/courses',
    name: 'courses',
    component: () => import('../views/CourseList.vue')
  },
  {
    path: '/userinfo',
    name: 'userInfoPage',
    component: () => import('../views/UserInfoPage.vue')
  },
  {
    path: '/classInfo',
    name: 'classInfo',
    component: () => import('../views/ClassInfo.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
