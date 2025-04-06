import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles.scss'
import store from './store'
import router from './router';

router.beforeEach((to, from, next) => {
  next();
  // console.log(store.state.user.isLoggedIn)
  // if (!store.state.user.isLoggedIn) {
  //   next({ name: 'Login' })
  // } else {
  //   next()
  // }
});


new Vue({
  store,
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
