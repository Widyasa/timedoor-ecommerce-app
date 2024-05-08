<script setup>
import { onMounted, ref } from 'vue'
import { store } from '@/stores/index.js'
import ProductCard from '@/components/Cards/ProductCard.vue'

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
</script>

<template>
  <div class="top-part d-flex justify-content-between section-margin-top">
    <h6 class="fs-4">Items</h6>
  </div>
  <hr class="mt-4">


  <div class="mt-4 row row-cols-xl-5 row-cols-lg-4 row-cols-1 gy-4">
    <ProductCard v-for="(item, index) in productList" :key="index"  :product-image="item.image" :product-name="item.name" :product-size="item.size" :product-price="item.price"/>
  </div>
</template>

<style scoped>

</style>