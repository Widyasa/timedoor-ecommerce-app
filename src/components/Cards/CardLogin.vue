<script setup>

import BaseInput from '@/components/UI/BaseInput.vue'
import BaseButton from '@/components/UI/BaseButton.vue'
import { reactive } from 'vue'
import { useStore } from 'vuex'
import router from '@/router/index.js'

const loginData = reactive( {
  email : "",
  password : "",
  isLogin: true
})
const store = useStore()
const login = async () => {
  try {
    await store.dispatch("auth/getLoginData", loginData)
    await router.push("/")
  } catch (e) {
    console.error(e)
  }
}
</script>

<template>
  <form action="" @submit.prevent="login">
    <div class="mt-4 d-flex flex-column gap-3">
      <BaseInput v-model="loginData.email" title-input="Email" identity="email" type="email" placeholder="enter your email..." />
      <BaseInput v-model="loginData.password" title-input="Password" identity="password" type="password" placeholder="enter your password..." />
    </div>
    <BaseButton type="submit" btn-class="btn-main w-100 mt-5 py-2" btn-content="Login"/>
  </form>
  <p class="text-center mt-2">Don’t have an account? <RouterLink class="main-color text-decoration-none" to="/auth/register">Sign up</RouterLink></p>
</template>
<style scoped>

</style>