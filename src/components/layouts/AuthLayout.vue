<script setup>

import HomeNavbar from '@/components/Navs/HomeNavbar.vue'
</script>

<template>
<main class="layout-page">
  <HomeNavbar />
  <div class="container d-flex justify-content-center align-items-center w-100 h-100">
    <div class="auth-card card card-body">
      <RouterView />
    </div>
  </div>
</main>
</template>

<style scoped>
.layout-page {
  height: 91dvh;
}
.auth-card{
  max-width: 600px;
}
</style>