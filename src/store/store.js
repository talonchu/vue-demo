import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    select: false
  },
  mutations: {
    selectAll () {
      console.log(this.state.select)
      this.state.select = !this.state.select
    }
  }
})
