// store/module/products.js

import axios from 'axios' // ✔ axios doğrudan import edildi

const state = {
  productslist: [],
  products: [],
  shuffleproducts: [],
  wishlist: [],
  compare: [],
  searchProduct: []
}

const getters = {
  getcollectionProduct: (state) => {
    return state.products.filter((product) => {
      return collection === product.collection
    })
  },
  getProductById: (state) => {
    return id => state.products.find((product) => product.id === +id)
  },
  wishlistItems: (state) => state.wishlist,
  compareItems: (state) => state.compare
}

const mutations = {
  setProducts(state, products) {
    state.products = products
    state.shuffleproducts = products
    state.productslist = products
  },
  addToWishlist(state, payload) {
    const product = state.products.find(item => item.id === payload.id)
    const wishlistItems = state.wishlist.find(item => item.id === payload.id)
    if (!wishlistItems) {
      state.wishlist.push({ ...product })
    }
  },
  removeWishlistItem(state, payload) {
    const index = state.wishlist.indexOf(payload)
    state.wishlist.splice(index, 1)
  },
  addToCompare(state, payload) {
    const product = state.products.find(item => item.id === payload.id)
    const compareItems = state.compare.find(item => item.id === payload.id)
    if (!compareItems) {
      state.compare.push({ ...product })
    }
  },
  removeCompareItem(state, payload) {
    const index = state.compare.indexOf(payload)
    state.compare.splice(index, 1)
  },
  searchProduct(state, payload) {
    payload = payload.toLowerCase()
    state.searchProduct = []
    if (payload.length) {
      state.products.filter((product) => {
        if (product.title.toLowerCase().includes(payload)) {
          state.searchProduct.push(product)
        }
      })
    }
  },
  shuffleProduct(state, payload) {
    state.shuffleproducts = payload
  },
  getallProduct(state) {
    state.shuffleproducts = state.products
  }
}

const actions = {
  async fetchProducts({ commit }) {
    try {
      console.log("🔄 fetchProducts çağrıldı")
      const response = await axios.get('https://localhost:7032/api/products') // ✅ API çağrısı direkt yapılıyor
      console.log("✅ API verisi:", response.data)
      commit('setProducts', response.data)
    } catch (error) {
      console.error("❌ API error:", error)
    }
  },
  addToWishlist(context, payload) {
    context.commit('addToWishlist', payload)
  },
  removeWishlistItem(context, payload) {
    context.commit('removeWishlistItem', payload)
  },
  addToCompare(context, payload) {
    context.commit('addToCompare', payload)
  },
  removeCompareItem(context, payload) {
    context.commit('removeCompareItem', payload)
  },
  searchProduct(context, payload) {
    context.commit('searchProduct', payload)
  },
  shuffleProduct(context, payload) {
    context.commit('shuffleProduct', payload)
  },
  getallProduct(context) {
    context.commit('getallProduct')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
