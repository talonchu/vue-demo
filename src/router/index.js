import Vue from 'vue'
import Router from 'vue-router'
import pzgl from '@/components/pzgl'
import pzlr from '@/components/pzlr'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/pzgl',
      name: 'pzgl',
      component: pzgl
    },
    {
      path: '/pzlr',
      name: 'pzlr',
      component: pzlr
    }
  ]
})
