import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: 'Ricardo',
      last_name: 'Rocha',
      email: 'ricardomjr2@gmail.com'
    },
    products: [
      {
        id: 1,
        name: 'Bola',
        price: 100
      },{
        id: 2,
        name: 'Chuteira',
        price: 200
      },{
        id: 3,
        name: 'Meião',
        price: 50
      }
    ],
    cart: []
  },
  getters: {
    total(state) {
      return state.cart.reduce((total, item) => total += item.price, 0)
    }
  },
  mutations: {
    storeUser(state, data) {
      state.user = data
    },
    addProduct(state, data) {
      state.cart.push(data)
    },
    removeProduct(state, id) {
      const index = state.cart.findIndex(obj => obj.id === id)
      state.cart.splice(index, 1)
    }
  },
  actions: {
    storeUser({commit}, data) {
      //rotina cabulosa
      //ajax
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('storeUser', data)
          resolve()
        }, 3000)
      })
    }
  },
  modules: {
  }
})
