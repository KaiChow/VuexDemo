// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from "./store.js";
import "es6-promise/auto";
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(Vuex);

new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});

