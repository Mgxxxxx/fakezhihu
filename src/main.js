import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/styles/index.scss";
import './plugins/element.js'
import CommentList from "@/components/CommentList.vue";

Vue.component('CommentList', CommentList);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')