import { createRouter, createWebHistory } from 'vue-router'
import HomeLayouts from '@/components/layouts/HomeLayouts.vue'
import HomePage from '@/views/Pages/HomePage.vue'
import AllProduct from '@/views/Pages/AllProduct.vue'
import DetailPage from '@/views/Pages/DetailPage.vue'
import AuthLayout from '@/components/layouts/AuthLayout.vue'
import LoginPage from '@/views/Pages/Auth/LoginPage.vue'
import RegisterPage from '@/views/Pages/Auth/RegisterPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'homeLayout',
      component: HomeLayouts,
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomePage
        },
        {
          path: '/products',
          name: 'products',
          component: AllProduct
        },
        {
          path: '/products/:id',
          name: 'productDetail',
          component: DetailPage
        }
      ]
    },
    {
      path: '/auth',
      name: 'authLayout',
      component: AuthLayout,
      redirect:'/auth/login',
      children:
      [
        {
          path:'/auth/login',
          name: 'Login',
          component: LoginPage
        },
        {
          path:'/auth/register',
          name: 'Register',
          component: RegisterPage
        },
      ]
    }
  ]
})

export default router
