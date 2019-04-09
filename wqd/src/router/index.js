import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import test from '@/components/test/test'
import wqdMenu from '@/components/wqd-menu/wqd-menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/test',
      component: test
    },
    {
      path: '/wqd-menu',
      component: wqdMenu
    }
  ],
  mode: 'history'
})
