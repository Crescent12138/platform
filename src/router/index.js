import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/forahead',
      name: 'forahead',
      component: () => import('../components/FrontHead.vue')
    },
    {
      path: '/formTable',
      name: 'formTable',
      component: () => import('../views/PersonQuery.vue')
    },
    {
      path: '/formDate',
      name: 'formDate',
      component: () => import('../views/FormDate.vue')
    },
    {
      path: '/Corpus',
      name: 'Corpus',
      component: () => import('../views/Corpus.vue')
    },
    {
      path: '/rule',
      name: 'Rule',
      component: () => import('../views/Rule.vue')
    },{
      path:'/paper',
      name: 'paper',
      component: () => import('../views/CorpusPaper.vue')
    }
  ]
})

export default router
