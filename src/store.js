import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    user: {
        name: '',
        email: '',
        role: '',
        isLoggedIn: false,
        metadata: {
          totalCost: 0
        }
    },
  },
  mutations: {
    setUser(state, userData) {
      state.user.name = userData.name;
      state.user.email = userData.email;
      state.user.role = userData.role;
      state.user.isLoggedIn = userData.isLoggedIn;
    },
    logoutUser(state) {
      state.user.name = '';
      state.user.email = '';
      state.user.role = '';
      state.user.isLoggedIn = false;
    },
    setTotalCost(state, payload) {
      state.user.metadata.totalCost = payload
    }
  },
  actions: {
    login({ commit }, userData) {
        setTimeout(() => {
          commit('setUser', {
            name: userData.name,
            email: userData.email,
            role: userData.role,
            isLoggedIn: true
          });
        }, 500);
    },
    logout({ commit }) {
        commit('logoutUser');
    },
    save_total_code({ commit }, payload) {
        commit('setTotalCost', payload)
    },
  }
});
