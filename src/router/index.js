import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import $cookie from 'js-cookie'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
export default router;


router.beforeEach((to, from, next) => {
  // 获取 cookie
  const token = $cookie.get('token')
  
  if (to.path === '/login' && token) {
    next('/HelloWorld')
  } else {
    next()
  }

  if (to.path === '/HelloWorld' && !token) {
    next('/login')
  }

  next()
})