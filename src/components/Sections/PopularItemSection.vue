<script setup>
import { store } from '@/stores/index.js'
const productList = ref()

const getProductData = async () => {
  try {
    await store.dispatch('product/getProductData')
    productList.value = store.state.product.products
    console.log(productList.value)
  } catch (e) {
    console.error(e)
  }
}
onMounted(() => {
  getProductData()
})
import ProductCard from '@/components/Cards/ProductCard.vue'
import { onMounted, ref } from 'vue'
import BaseButton from '@/components/UI/BaseButton.vue'
</script>

<template>
<section class="allProduct-section section-margin-top container">
  <div class="top-part d-flex justify-content-between">
    <h6 class="fs-4">Popular Items</h6>
    <RouterLink to="/" class="btn-text">
      <button class="btn-text">See All</button>
    </RouterLink>
  </div>

  <div class="mt-5 row row-cols-xl-5 row-cols-lg-4 row-cols-1 gy-4">
      <ProductCard v-for="(item, index) in productList" :key="index"  :product-image="item.image" :product-name="item.name" :product-size="item.size" :product-price="item.price" :product-id="item.id"/>
  </div>
  <div class="mt-5 d-flex justify-content-center">
    <RouterLink :to="{name: 'products'}">
      <BaseButton btn-content="See All Product" btn-class="btn-main" />
    </RouterLink>
  </div>
</section>
</template>

<style scoped>


</style>