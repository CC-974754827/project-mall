import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//存储用户登录状态
export default new Vuex.Store({
  //存储值 状态池
  state: {
    userInfo:{
      userName: '未登录'
    }
  },
  //类似计算属性,进行数据筛选，多个数据的计算
  getters:{
    
  },
  //不能直接改state，通过mutations改变state值，不能处理异步操作
  mutations: {
    changeLogin(state, status){
      state.userInfo = status;
    }
  },
  //类似mutations，不能直接改变state值，可以处理异步操作
  actions: {
    loginAction({commit},user){
      commit('changeLogin',user);
    }
  }
})
