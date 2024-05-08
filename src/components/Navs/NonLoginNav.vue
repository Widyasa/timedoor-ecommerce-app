<script setup>

import BaseButton from '@/components/UI/BaseButton.vue'
</script>

<template>
  <RouterLink to="auth/login">
    <BaseButton btn-class="btn-main" btn-content="Login" />
  </RouterLink>
  <RouterLink to="auth/register">
    <BaseButton btn-class="btn-second" btn-content="Sign Up" />
  </RouterLink>

</template>

<style scoped>

</style>