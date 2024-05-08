<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { isText } from '@vue/compiler-core'
import BaseButton from '@/components/UI/BaseButton.vue'
import { rupiah } from '../../helpers/globalVariable.js'

const store = useStore()
const productDetail = computed(() => {
  return store.state.product.productDetail
})

</script>

<template>
  <div class="card card-body">
    <div class="top-part">
      <div class="d-flex justify-content-between">
        <h2 class="fs-3 fw-medium">{{rupiah.format(productDetail.price)}}</h2>
        <button>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 24.5C13.6555 24.5 13.3164 24.3961 13.0156 24.1938C10.9594 22.7992 7.97345 20.6391 5.8297 18.025C3.6422 15.3617 2.5922 12.6219 2.62501 9.65781C2.65783 6.26172 5.38673 3.5 8.7008 3.5C11.3313 3.5 13.0758 5.11328 14 6.28906C14.9242 5.11328 16.6688 3.5 19.2992 3.5C22.6133 3.5 25.3367 6.26172 25.375 9.65781C25.4024 12.6219 24.3578 15.3617 22.1703 18.025C20.0266 20.6391 17.0406 22.7992 14.9844 24.1938C14.6836 24.4016 14.3445 24.5 14 24.5ZM8.7008 5.25C6.34376 5.25 4.40236 7.23516 4.37501 9.67969C4.31486 15.4 9.20939 19.5016 14 22.75C18.7906 19.4961 23.6852 15.4 23.625 9.67969C23.5977 7.24063 21.6617 5.25 19.2992 5.25C16.3461 5.25 14.793 8.23594 14.782 8.26875C14.6344 8.56406 14.3336 8.75 14 8.75C13.6664 8.75 13.3656 8.56406 13.218 8.26328C13.2016 8.23594 11.6485 5.25 8.7008 5.25Z" fill="#616161"/>
          </svg>
        </button>
      </div>
      <h4 class="fs-5 mt-2">{{productDetail.name}}</h4>
      <p class="desc">{{productDetail.size}}</p>
      <hr class="">
    </div>
    <div class="">
      <p class="text-sm">Item Description</p>
      <p class="">{{productDetail.description}}</p>
      <div class="mt-4 d-flex flex-column gap-3">
        <div class="d-flex gap-4">
          <p class="title-description text-sm">
            Category
          </p>
          <p class="desc text-sm">{{productDetail.category}}</p>
        </div>
        <div class="d-flex gap-4">
          <p class="title-description text-sm">
            Size
          </p>
          <p class="desc text-sm">{{productDetail.size}}</p>
        </div>
        <div class="d-flex gap-4">
          <p class="title-description text-sm">
            Color
          </p>
          <p class="desc text-sm">{{productDetail.color}}</p>
        </div>
        <div class="d-flex gap-4">
          <p class="title-description text-sm">
            Shipping
          </p>
          <p class="desc text-sm">{{rupiah.format(productDetail.shipping)}}</p>
        </div>
      </div>
    </div>
    <hr class="my-3">
    <BaseButton btn-content="Buy Now" btn-class="btn-main" />
    <BaseButton btn-content="Add to Cart" btn-class="btn-second mt-2" />
  </div>
</template>

<style scoped>
.title-description{
  width: 150px;
}
</style>