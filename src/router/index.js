import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/web/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    redirect: '/'
  },
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/research',
    name: 'research',
    children: [
      { path: 'academic', component: () => import(/* webpackChunkName: "news" */ '../views/web/news.vue') },
      { path: 'product', component: () => import(/* webpackChunkName: "news" */ '../views/web/news.vue') },
      { path:'experience',component: () => import(/* webpackChunkName: "news" */ '../views/web/news.vue')}
    ]
  },
  {
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "news" */ '../views/web/news.vue')
  },
  {
    path: '/us',
    name: 'us',
    children: [
      { path: 'cominfo', component: () => import(/* webpackChunkName: "news" */ '../views/web/news.vue') },
      { path: 'partner', component: () => import(/* webpackChunkName: "news" */ '../views/web/news.vue') },
      { path:'joinus',component: () => import(/* webpackChunkName: "news" */ '../views/web/news.vue')}
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/web/index.vue')
  },
  {
    path: '/lang',
    name: 'lang',
    component: () => import(/* webpackChunkName: "login" */ '../views/web/index.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // 网站统计
  /* eslint-disable */
  if (_hmt) {
    if (to.path) {
      _hmt.push(['_trackPageview', to.fullPath])
    }
  }
  next()
  /* eslint-enable */
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
export default router
