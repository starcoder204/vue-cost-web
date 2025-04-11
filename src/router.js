import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Login from './pages/Login.vue';
import Create from './pages/Create.vue';
import LoginPartner from './pages/LoginPartner.vue';
import SpecBuilder from './pages/SpecBuilder.vue';
import Account from './pages/Account.vue';

Vue.use(Router);

export default new Router({
  mode: 'history', // this prevents the hash in the URL
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/login-partner',
      name: 'LoginPartner',
      component: LoginPartner
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/spec-builder',
      name: 'SpecBuilder',
      component: SpecBuilder,
      meta: { requiresAuth: true }
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
      meta: { requiresAuth: true }
    },
  ]
});