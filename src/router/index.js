import { createRouter, createWebHistory } from 'vue-router'
import PostIdPage from '@/pages/PostIdPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import PostPage from '@/pages/PostPage.vue'

const routes = [
  {
    path: '/login',
    component: LoginPage,
    meta: { auth: false }
  },
  {
    path: '/',
    component: PostPage,
    meta: { auth: true }
  },
  {
    path: '/posts/:id',
    component: PostIdPage,
    meta: { auth: true }
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to, from, next) => {
  const user = localStorage.getItem('user')
  const requireAuth = to.matched.some(rec => rec.meta.auth)
  if (!user && requireAuth) {
    next('/login')
  } else {
    next()
  }
})

export default router
