import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index.vue'
import Project from '@/pages/project/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/project',
      name: 'Project',
      component: Project, // 只要路径带这个project，不管后面子级是什么，都会在Project这个组件内的路由守卫监听到
      children: [
        {
          path: 'list/:id',
          name: 'list',
          component: () => import('../pages/project/components/list.vue'),
        },
        {
          path: 'detail/:id/:bid',
          name: 'detail',
          component: () => import('../pages/project/components/detail.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../pages/guanyu/index.vue')
    },
    {
      path: '/notice',
      name: 'Notice',
      component: () => import('../pages/tongzhi/index.vue')
    },
    {
      path: '/news',
      name: 'News',
      component: () => import('../pages/xinwen/index.vue')
    },
    {
      path: '/info',
      name: 'Info',
      component: () => import('../pages/xinxi/index.vue')
    },
    {
      path: '/politics',
      name: 'Politics',
      component: () => import('../pages/zhengzhi/index.vue')
    },
    {
      path: '/support',
      name: 'Support',
      component: () => import('../pages/zhichi/index.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
