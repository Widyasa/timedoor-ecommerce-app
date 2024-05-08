<script setup>
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
import ProductCard from '@/components/Cards/ProductCard.vue'
import { onMounted, ref } from 'vue'
import BaseButton from '@/components/UI/BaseButton.vue'
</script>

<template>
  <section class="allProduct-section section-margin-top container">
    <div class="top-part d-flex justify-content-between">
      <h6 class="fs-4">Category Items</h6>
      <RouterLink to="/" class="btn-text">
        <button class="btn-text">See All</button>
      </RouterLink>
    </div>
    <div class="mt-4 d-flex gap-3 card-category-wrapper">
      <button class="btn-category">Vans</button>
      <button class="btn-category">Bohoo</button>
      <button class="btn-category">Mango</button>
      <button class="btn-category">Mango</button>

    </div>
    <div class="mt-5 row row-cols-xl-5 row-cols-lg-4 row-cols-1 gy-4">
      <ProductCard  v-for="(item, index) in productList" :key="index"  :product-image="item.image" :product-name="item.name" :product-size="item.size" :product-price="item.price" :product-id="item.id"/>
    </div>
    <div class="mt-5 d-flex justify-content-center">
      <RouterLink :to="{name: 'products'}">
        <BaseButton btn-content="See All Product" btn-class="btn-main" />
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.card-category-wrapper{
  white-space: nowrap;
  overflow: scroll;
}
.btn-category {
  border: 1px solid rgba(224, 224, 224, 1);
  padding: 6px 16px;
  border-radius: 4px;
}
.card-category-wrapper::-webkit-scrollbar{
  opacity: 0;
}
</style>