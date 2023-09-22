import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AiTalk from '../components/AiTalk.vue'
import dataview from '../components/dataview.vue'
import AiUpload from '../components/AiUpload.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      redirect: '/home'
    },
    {
      path: '/home/:id?',
      name: 'home',
      component: dataview
    },
    {
      path: '/AiTalk',
      name: 'AiTalk',
      component: AiTalk
    },
    {
      path: '/AiUpload',
      name: 'AiUpload',
      component: AiUpload
    }
    // {
    //   path: '/moblie',
    //   name: 'moblie',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})




export default router
