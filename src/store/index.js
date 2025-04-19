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
    clientes: []
  },
  getters: {
  },
  mutations: {
    storeUser(state, data) {
      state.user = data
    }
  },
  actions: {
  },
  modules: {
  }
})
