<script setup>

import NonLoginNav from '@/components/Navs/NonLoginNav.vue'
import HomeNavbar from '@/components/Navs/HomeNavbar.vue'
</script>

<template>
<main class="layout-page">
  <HomeNavbar />
  <RouterView />
</main>
</template>

<style scoped>
.layout-page {
  height: 100dvh;
}
</style>