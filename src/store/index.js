import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: 'Ricardo',
      last_name: 'Rocha',
      email: 'ricardomjr2@gmail.com'
    },
    produtos: [],
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
