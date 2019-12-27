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
      component: Project
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
