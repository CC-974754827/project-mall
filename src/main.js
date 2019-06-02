import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import { Swipe, SwipeItem, Lazyload, Button, Icon, NavBar, Tabbar, TabbarItem } from 'vant';
Vue.use(Swipe).use(SwipeItem).use(Lazyload).use(Button).use(Icon).use(NavBar).use(Tabbar).use(TabbarItem);

import '@/mock/mock.js';


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
