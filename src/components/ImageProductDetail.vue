<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const productDetail = computed(() => {
  return store.state.product.productDetail
})
</script>

<template>
  <img :src="productDetail.image" alt="" class="w-100 product-detail-image">
</template>

<style scoped>
.product-detail-image{
  aspect-ratio: 16/9;
  object-fit: cover;
  object-position: top;
}
</style>