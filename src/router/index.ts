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
      meta: { 
        requiresAuth: false
      },
      component: () => import("@/views/login.vue")
    },
    {
      path: "/:username",
      name: "admin",
      meta: { 
        requiresAuth: true 
      },
      
      component: () => import('@/views/admin.vue'),
      children : [
        {
          path: "home",
          component: () => import('@/components/admin/home.vue')
        },
        {
          path: "account",
          component: () => import('@/components/admin/accout.vue')
        },
        {
          path: "book",
          component: () => import('@/components/admin/book.vue')
        },
        {
          path: "borrow",
          component: () => import('@/components/admin/borrow.vue')
        }
      ],
    },
    {
      path: "/:username",
      name: "reader",
      meta: { 
        requiresAuth: true 
      },
      component: () => import('@/views/reader.vue')
    },
    {
      path: "/404",
      name: "404",
      meta: { 
        requiresAuth: false
      },
      component: () => import('@/components/404.vue')
    },
  ]
})


export default router


// import useAccountStore from '@/store/modules/account'
// const accountStore = useAccountStore()
// router.beforeEach((to, from, next) => {
//   if(to.meta.requiresAuth == true){
//       if (accountStore.isLogin) {
//           next() // 已登录
//       } else {
//           next({path:"/404"}) //跳到404页面
//       }
//   } else {
      
//       next() //放行
//   }
// })