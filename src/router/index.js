import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/Layout.vue'),
    children: [
      { path: '/', name: 'Home', component: () => import('@/views/Home.vue') },
      { path: '/about', name: 'About', component: () => import('@/views/About.vue') },
    ],
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
