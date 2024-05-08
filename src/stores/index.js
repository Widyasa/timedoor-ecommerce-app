import { createStore } from 'vuex'
import { product } from '@/stores/product.js'

export const store = createStore({
  modules: {
      product
  }
})