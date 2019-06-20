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

import { Swipe, SwipeItem, Lazyload, Button, Icon, NavBar, Tabbar, TabbarItem, Tab, Tabs, Field, Toast, Row, Col, List, PullRefresh, Card, SubmitBar } from 'vant';
Vue.use(Swipe).use(SwipeItem).use(Lazyload).use(Button).use(Icon).use(NavBar).use(Tabbar).use(TabbarItem).use(Tab).use(Tabs).use(Field).use(Toast).use(Row).use(Col).use(List).use(PullRefresh).use(Card).use(SubmitBar);

import '@/mock/mock.js';


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
