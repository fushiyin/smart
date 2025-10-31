import { createRouter, createWebHistory } from 'vue-router'
import { moduleRoutes } from './idRouter'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: moduleRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.authRequired)
  const isAuthenticated = false

  if (requiresAuth && !isAuthenticated) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
