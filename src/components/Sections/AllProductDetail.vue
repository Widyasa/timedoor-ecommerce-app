<script setup>

import ProductCard from '@/components/Cards/ProductCard.vue'
import { onMounted, ref } from 'vue'
import { store } from '@/stores/index.js'
const productList = ref()

const getProductData = async () => {
  try {
    await store.dispatch('product/getProductData')
    productList.value = store.state.product.products
  } catch (e) {
    console.error(e)
  }
}
onMounted(() => {
  getProductData()
})
</script>

<template>
  <div class="mt-4 row row-cols-xl-5 row-cols-lg-4 row-cols-1 gy-4">
    <ProductCard v-for="(item, index) in productList" :key="index"  :product-image="item.image" :product-name="item.name" :product-size="item.size" :product-price="item.price" :product-id="item.id"/>
  </div>
</template>

<style scoped>

</style>