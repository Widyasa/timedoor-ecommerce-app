<script setup>

import BaseInput from '@/components/UI/BaseInput.vue'
import BaseButton from '@/components/UI/BaseButton.vue'
</script>

<template>
  <div class="mt-4 d-flex flex-column gap-3">
    <BaseInput title-input="Email" identity="email" type="email" placeholder="enter your email..." />
    <BaseInput title-input="Password" identity="password" type="password" placeholder="enter your password..." />
  </div>
  <BaseButton btn-class="btn-main w-100 mt-5   py-2" btn-content="Login"/>
  <p class="text-center mt-2">Don’t have an account? <RouterLink class="main-color text-decoration-none" to="/auth/register">Sign up</RouterLink></p>
</template>
<style scoped>

</style>