import Vue from 'vue'
import Router from 'vue-router'
import pzgl from '@/components/pzgl'
import pzlr from '@/components/pzlr'
import bbcx from '@/components/bbcx'
import bbcxdetail from '@/components/bbcx_detail'
import fzhsxdy from '@/components/fzhsxdy'

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
    },
    {
      path: '/bbcx',
      name: 'bbcx',
      component: bbcx
    },
    {
      path: '/bbcxdetail',
      name: 'bbcxdetail',
      component: bbcxdetail
    },
    {
      path: '/fzhsxdy',
      name: 'fzhsxdy',
      component: fzhsxdy
    }
  ]
})
