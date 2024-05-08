<script setup>
const props = defineProps({
  productId: {type: String  , required: true},
  productImage : {type: String, required: true},
  productName : {type: String, required: true},
  productPrice : {type: String, required: true},
  productSize : {type: String, required: true},
})
const rupiah = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
});
</script>

<template>
<div class="col">
  <RouterLink :to="{path : '/products/'+props.productId}" class="card-product">
    <img :src="props.productImage" alt="product image" class="w-100">
    <div class="mt-2">
      <p class="main-color"> {{rupiah.format(props.productPrice)}}</p>
      <p class="desc">{{props.productName}}</p>
      <div class="d-flex justify-content-between mt-1">
        <p class="desc text-sm">{{props.productSize}}</p>
      </div>
    </div>
  </RouterLink>
</div>
</template>

<style scoped>
.card-product{
  text-decoration: none;
  color: unset;
}
</style>