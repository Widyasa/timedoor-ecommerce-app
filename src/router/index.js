import { createRouter, createWebHistory } from 'vue-router'
import HomeLayouts from '@/components/layouts/HomeLayouts.vue'
import HomePage from '@/views/Pages/HomePage.vue'
import AllProduct from '@/views/Pages/AllProduct.vue'
import DetailPage from '@/views/Pages/DetailPage.vue'
import AuthLayout from '@/components/layouts/AuthLayout.vue'
import LoginPage from '@/views/Pages/Auth/LoginPage.vue'
import RegisterPage from '@/views/Pages/Auth/RegisterPage.vue'
import Cookies from 'js-cookie'
import { store } from '@/stores/index.js'
const checkAuth = () => {
  const jwtCookie = Cookies.get("jwt")
  const expirationDate = Cookies.get("tokenExpirationDate")
  const userId = Cookies.get("UID")
  if (jwtCookie) {
    if (new Date().getTime() < +expirationDate) {
      store.commit("auth/setToken", {
        idToken: jwtCookie,
        expiresIn: expirationDate
      })
      store.dispatch("auth/getUser", userId)
      return true
    } else {
      store.commit("auth/setUserLogout")
      return  false
    }
  } else {
    return  false
  }
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'homeLayout',
      component: HomeLayouts,
      beforeEnter: (to, from, next) => {
        checkAuth() ? next() : next({name : "Login"})
      },
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
