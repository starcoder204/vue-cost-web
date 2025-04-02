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
        isLoggedIn: false
    }
  },
  mutations: {
    setUser(state, userData) {
      state.user.name = userData.name;
      state.user.email = userData.email;
      state.user.isLoggedIn = userData.isLoggedIn;
    },
    logoutUser(state) {
      state.user.name = '';
      state.user.email = '';
      state.user.isLoggedIn = false;
    }
  },
  actions: {
    login({ commit }, userData) {
        setTimeout(() => {
          commit('setUser', {
            name: userData.name,
            email: userData.email,
            isLoggedIn: true
          });
        }, 500);
    },
    logout({ commit }) {
        commit('logoutUser');
    }
  }
});
