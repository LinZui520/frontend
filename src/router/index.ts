import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login.vue")
    },
    {
      path: "/:username",
      name: "admin",
      component: () => import('@/views/admin.vue')
    },
    {
      path: "/:username",
      name: "reader",
      component: () => import('@/views/reader.vue')
    },
    {
      path: "/404",
      name: "NotFound",
      component: () => import('@/components/NotFound.vue')
    },
    // 所有未定义路由，全部重定向到404页
    {
        path: "/:pathMatch(.*)*",
        redirect: "/404",
    }
  ]
})


export default router
