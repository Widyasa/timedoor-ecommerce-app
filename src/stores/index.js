import { createStore } from 'vuex'
import { product } from '@/stores/product.js'
import { auth } from '@/stores/auth.js'

export const store = createStore({
  modules: {
      product,
      auth
  }
})