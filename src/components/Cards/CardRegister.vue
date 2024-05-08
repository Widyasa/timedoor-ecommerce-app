<script setup>

import BaseInput from '@/components/UI/BaseInput.vue'
import BaseButton from '@/components/UI/BaseButton.vue'
import { reactive, ref } from 'vue'
import { store } from '@/stores/index.js'
import router from '@/router/index.js'
const signUpData = reactive({
  fullName : "",
  username : "",
  email : "",
  password : "",
  confirmPassword: "",
  address: "",
  isLogin: false,
})
const passwordStatusDisplay = ref("none")
const confirmPasswordFailed = ref("none")
const confirmPasswordSuccess = ref("none")
const passwordCheck = () => {
  if (signUpData.password.length < 8) {
    passwordStatusDisplay.value = "block"
  } else {
    passwordStatusDisplay.value = "none"
  }
}
const confirmationPasswordCheck = () => {
  if (signUpData.confirmPassword === "") {
    confirmPasswordSuccess.value = "none"
    confirmPasswordFailed.value = "none"
    return
  }
  if (signUpData.password !== signUpData.confirmPassword) {
    confirmPasswordSuccess.value = "none"
    confirmPasswordFailed.value = "block"
    return
  }
  confirmPasswordSuccess.value = "block"
  confirmPasswordFailed.value = "none"
}
const register = async () => {
  if (
    signUpData.password !== signUpData.confirmPassword || signUpData.password < 8
  ) {
    signUpData.confirmPassword = ""
    signUpData.password = ""
    confirmPasswordFailed.value = "none"
    confirmPasswordSuccess.value = "none"
  } else {
    await store.dispatch("auth/getRegisterData", signUpData)
    await router.push("/")
  }
}
</script>

<template>
  <form action="" @submit.prevent="register">
    <div class="mt-4 d-flex flex-column gap-3">
      <BaseInput v-model="signUpData.fullName" title-input="Full Name" identity="fullName" type="text" placeholder="enter your full name..." />
      <BaseInput v-model="signUpData.username" title-input="Username" identity="Username" type="username" placeholder="enter your username..." />
      <BaseInput v-model="signUpData.email" title-input="Email" identity="email" type="email" placeholder="enter your email..." />
      <div class="">
        <BaseInput @keyInput="passwordCheck" v-model="signUpData.password" title-input="Password" identity="password" type="password" placeholder="enter your password..." />
        <p class="text-danger mt-1 fw-medium text-sm" :style="{display: passwordStatusDisplay}">
          The Password field must be at least 8 character
        </p>
      </div>
      <div class="">
        <BaseInput @keyInput="confirmationPasswordCheck" v-model="signUpData.confirmPassword" title-input="Confirm Password" identity="confirmPassword" type="password" placeholder="confirm your password..." />
        <p class="text-danger mt-1 fw-medium text-sm" :style="{display: confirmPasswordFailed}">
          The Password confirmation does not match
        </p>
        <p class="text-success mt-1 fw-medium text-sm" :style="{display: confirmPasswordSuccess}">
          The Password confirmation does match
        </p>
      </div>
      <BaseInput v-model="signUpData.address" title-input="Address" identity="address" type="text" placeholder="enter your address..." />
    </div>
    <BaseButton btn-class="btn-main w-100 mt-5 py-2" btn-content="Register"/>
  </form>

  <p class="text-center mt-2">Have an account? <RouterLink class="main-color text-decoration-none" to="/auth/login">Sign in</RouterLink></p>
</template>

<style scoped>

</style>