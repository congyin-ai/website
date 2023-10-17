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
    component:()=>import(/* webpackChunkName: "news" */ '../views/web/research'),
    children: [
      { name:"academic",path: 'academic', component: () => import(/* webpackChunkName: "news" */ '../views/web/research/academic.vue') },
      { name:'products',path: 'products', component: () => import(/* webpackChunkName: "news" */ '../views/web/research/products.vue')},
      { name: "experience", path: 'experience', component: () => import(/* webpackChunkName: "news" */ '../views/web/research/experience.vue') },
      { name: 'productsDetail', path: 'productsDetail', component: () => import(/* webpackChunkName: "news" */ '../views/web/research/productsDetail.vue')},
    ]
  },
  {
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "news" */ '../views/web/news.vue')
  },
  {
    path: '/news/:id',
    name: 'newsDetail',
    component: () => import(/* webpackChunkName: "newsDetail" */ '../views/web/newsDetail.vue')
  },
  {
    path: '/us',
    name: 'us',
    component:() => import(/* webpackChunkName: "news" */ '../views/web/us'),
    children: [
      { name:"cominfo", path: 'cominfo', component: () => import(/* webpackChunkName: "news" */ '../views/web/us/cominfo.vue') },
      { name:"partners",path: 'partners', component: () => import(/* webpackChunkName: "news" */ '../views/web/us/partners.vue') },
      { name:"joinus",path:'joinus',component: () => import(/* webpackChunkName: "news" */ '../views/web/us/joinus.vue')}
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/web/login.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "login" */ '../views/web/profile.vue')
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
