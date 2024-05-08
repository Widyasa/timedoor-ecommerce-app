<script setup>
import { ref, watch } from 'vue'
import NonLoginNav from '@/components/Navs/NonLoginNav.vue'
import IsLoginNav from '@/components/Navs/IsLoginNav.vue'

const isLogin = ref(false)
const menuComponent = ref('NonLoginNav')
const components = {
  'NonLoginNav': NonLoginNav,
  'IsLoginNav' : IsLoginNav
}
if (isLogin.value === true) {
    menuComponent.value = 'IsLoginNav'
} else {
  menuComponent.value = 'NonLoginNav'
}
// watch(isLogin, (newValue, oldValue) => {
//   if (!newValue) {
//     menuComponent.value = "NonLoginNav"
//   } else {
//     menuComponent.value = "IsLoginNav"
//   }
// })
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="/img/logo.svg" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="d-flex gap-3">
          <Component :is="components[menuComponent]" />
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>