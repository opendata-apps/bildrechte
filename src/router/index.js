import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import level1 from '../views/Level_1.vue'
import level2 from '../views/Level_2.vue'
import level3 from '../views/Level_3.vue'
import level4 from '../views/Level_4.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/level_1',
      name: 'level_1',
      //  component: Bildrechte
      component: level1
    },
    {
      path: '/level_2',
      name: 'level_2',
      component: level2
    },
    {
      path: '/level_3',
      name: 'level_3',
      component: level3
    },
    {
      path: '/level_4',
      name: 'level_4',
      component: level4
    }
  ]
})
