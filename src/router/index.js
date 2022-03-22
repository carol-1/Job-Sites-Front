import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
      {
          path: '/Login',
          name:'Login',
          component: ()=>import('@/views/Login')
      },{
          path: '/Index',
          name:'Index',
          component: ()=>import('@/views/Index'),
          children: [
              {
                  path: '/User',
                  name:'User',
                  component: ()=>import('@/views/user/User')
              }
          ]
      }
  ]
})
export default router