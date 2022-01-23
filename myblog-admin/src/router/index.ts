import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('@/views/login/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    next()
  } else if (window.sessionStorage.getItem('token')) {
    next()
  } else {
    next('/login')
  }
})

export function resetRouter(): void {
  // console.log(router)
  // const newRouter = createRouter()
  // router.matcher = createRouter().matcher
}

export default router