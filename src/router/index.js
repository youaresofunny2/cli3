import Vue from 'vue'
import VueRouter from 'vue-router'
import Taber from '../components/Taber.vue'

const Home = () => import(/* webpackChunkName: "about" */ '../views/home/Home.vue')
const Cart = () => import(/* webpackChunkName: "about" */ '../views/cart/Cart.vue')
const Cate = () => import(/* webpackChunkName: "about" */ '../views/cate/Cate.vue')
const Profile = () => import(/* webpackChunkName: "about" */ '../views/profile/Profile.vue')
Vue.use(VueRouter) 
const routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path:'/cart',
    component:Cart,
    name:'Cart'
  },
  {
    path:'/cate',
    component:Cate,
    name:'Cate'
  },
  {
    path:'/home',
    component:Home,
    name:'Home'
  },
  {
    path:'/profile',
    component:Profile,
    name:'Profile'
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
