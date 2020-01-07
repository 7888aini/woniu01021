import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import main from '@/components/main'
import welcome from '@/components/tabs/welcome'
import fenlei from '@/components/tabs/jichu/fenlei'
import pinglun from '@/components/tabs/jichu/pinglun'
import pingluns from '@/components/tabs/xitong/pingluns'
import email from '@/components/tabs/xitong/email'
import short from '@/components/tabs/xitong/short'
import zhenghe from '@/components/tabs/xitong/zhenghelogin'

import pay from '@/components/tabs/xitong/pay/pay'
import online from '@/components/tabs/xitong/pay/online'
import km from '@/components/tabs/xitong/pay/km'
import m from '@/components/tabs/xitong/pay/m'
import ali from '@/components/tabs/xitong/pay/ali'
import huanxi from '@/components/tabs/xitong/pay/huanxi'
import weixin from '@/components/tabs/xitong/pay/weixin'

import add1 from '@/components/tabs/wenzhang/add/add1'
import add2 from '@/components/tabs/wenzhang/add/add2'


import prepare from '@/components/prepare'
Vue.use(Router)

export default new Router({
  mode: 'history',  //去掉url中的#
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'main',
      component: main,
      menuShow: true,
      children: [
        {
          path: 'prepare',
          name: 'prepare',
          component: prepare
        },
        {
          path: 'welcome',
          name: 'welcome',
          component: welcome,
          menuShow: true
        },
        {
          path: 'fenlei',
          name: 'fenlei',
          component: fenlei
        },
        {
          path: 'pinglun',
          name: 'pinglun',
          component: pinglun
        },
        {
          path: 'pingluns',
          name: 'pingluns',
          component: pingluns
        },
        {
          path: 'email',
          name: 'email',
          component: email
        },
        {
          path: 'zhenghe',
          name: 'zhenghe',
          component: zhenghe
        },
        {
          path: 'short',
          name: 'short',
          component: short
        },
        {
          path: 'add1',
          name: 'add1',
          component: add1
        },
        {
          path: 'add2',
          name: 'add2',
          component: add2
        },
        {
          path: 'pay',
          name: 'pay',
          component: pay,
          menuShow: true,
          children: [
            {
              path: 'online',
              name: 'online',
              component: online
            },
            {
              path: 'km',
              name: 'km',
              component: km
            },
            {
              path: 'm',
              name: 'm',
              component: m
            },
            {
              path: 'ali',
              name: 'ali',
              component: ali
            },
            {
              path: 'huanxi',
              name: 'huanxi',
              component: huanxi
            },
            {
              path: 'weixin',
              name: 'weixin',
              component: weixin
            }
          ]
        }
      ]
    }
  ]
})
