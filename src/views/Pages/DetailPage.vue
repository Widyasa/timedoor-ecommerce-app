<script setup>
import { store } from '@/stores/index.js'
import { onMounted, onUnmounted, watch } from 'vue'
import ImageProductDetail from '@/components/ImageProductDetail.vue'
import { useRoute } from 'vue-router'
import AllProduct from '@/views/Pages/AllProduct.vue'
import AllProductDetail from '@/components/Sections/AllProductDetail.vue'
import FooterSection from '@/components/Sections/FooterSection.vue'
import CardDetailProduct from '@/components/Cards/CardDetailProduct.vue'

const route = useRoute()
const getById = async () => {
  await store.dispatch("product/getProductDetail", route.params.id)
}
onMounted(() => {
  getById()
})
watch(() => route.params.id, async (newVal, oldVal) => {
  if (newVal) {
    await getById()
  }
})
</script>

<template>
<main class="mt-4 container">
  <div class="row">
    <div class="col-lg-8 col-12">
      <div class="">
        <ImageProductDetail />
        <div class="mt-4">
          <AllProductDetail />
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-12">
        <CardDetailProduct />
    </div>
  </div>
</main>
  <FooterSection class="mt-5 pb-4" />

</template>

<style scoped>

</style>