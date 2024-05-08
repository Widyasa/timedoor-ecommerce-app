<script setup>

import HeroCard from '@/components/Cards/HeroCard.vue'
</script>

<template>
<section class="hero-section position-relative">
<div class="position-absolute w-100 h-100">
  <img src="/img/section/hero-img.png" alt="hero image" class="w-100 h-100">
</div>
  <div class="position-relative hero-text-wrapper z-3 w-100 h-100">
    <div class="container w-100 h-100">
      <div class="row h-100">
        <div class="col-lg-4 col-12 align-self-center">
            <HeroCard />
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
.hero-section{
  height: 91dvh;
}
.hero-text-wrapper{

}
</style>