<script setup>
const props = defineProps({
  btnClass: String,
  btnContent: String
})
</script>

<template>
  <button class="btn" :class="props.btnClass">{{props.btnContent}}</button>
</template>

<style scoped>
.btn-main{
  background: rgba(0, 148, 153, 1) ;
  border: 1px solid rgba(0, 148, 153, 1);
  color: white;
  transition: 200ms;
  white-space: nowrap;
}
.btn-main:hover{
  filter: brightness(110%);
  background: rgba(0, 148, 153, 1);
  color: white;
}
.btn-second{
  border: 1px solid rgba(0, 148, 153, 1);
  color: rgba(0, 148, 153, 1);
  white-space: nowrap;
}
</style>