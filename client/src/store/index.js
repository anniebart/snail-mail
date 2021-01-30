import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    isUserLoggedIn: false,
    token: null
  },
  mutations: {
    setToken(state, token){
      state.token = token
      if(token){
          state.isUserLoggedIn= true
      } else {
          state.isUserLoggedIn = false
      }
  },

  setUser(state, user){
      state.user = user 
  }
    
  },
  actions: {
    setToken({commit}, token){
      commit('setToken', token)
  },
    setUser({commit}, user){
      commit('setUser', user)
  }
  },
  modules: {
  }
})
