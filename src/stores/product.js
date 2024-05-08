import axios from 'axios'
import { baseUrl } from '../../env.js'

export const product = {
  namespaced: true,
  state() {
    return {
      products: [],
      productDetail: {}
    }
  },
  getters: {},
  mutations: {
    setProductData(state, payload) {
      state.products = payload
    },
    setProductDetail(state, payload) {
      state.productDetail = payload
    }
  },
  actions : {
    async getProductData({ commit }) {
      try {
        const {data} = await axios.get(baseUrl + 'products.json')
        const arr = []
        for (let key in data) {
          arr.push({ id: key, ...data[key] })
        }
        commit('setProductData', arr)
      } catch (e) {
        console.log(e)
      }
    },
    async getProductDetail({ commit }, payload) {
      try {
        const {data} = await axios.get(baseUrl + `products/${payload}.json`)
        commit("setProductDetail", data)
      } catch (e) {
        console.log(e)
      }
    }
  }
}