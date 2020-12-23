import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cookie: false, // 保存cookie
    // 用户基本信息
    profile: {
      nickName: '',
      avatarUrl: '',
      userId: '',
      backgroundUrl: '',
      level: '',
      listenSongs: ''
    },
    // 用户歌单信息
    playList: [],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
