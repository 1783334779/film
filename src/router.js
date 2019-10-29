import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Ex from './views/Ex.vue'
import Details from './views/Details.vue'
import ChoiceSeat from './views/ChoiceSeat.vue'
import dy1 from './views/dy1.vue'
import login from './views/login.vue'
import register from './views/register.vue'
import my from './views/my.vue'
import Cinemas from './views/Cinemas.vue'
import Cinema from './views/Cinema.vue'
import myOrder from './views/myOrder.vue'
import close from './views/close.vue'
import result from './views/result.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import Mint from 'mint-ui';
import "mint-ui/lib/style.css"
Vue.use(Mint);
Vue.use(Vant);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },{
      path:'/Ex',
      component:Ex
    },
    {
      path:'/Details/',
      component:Details,
      props:true
    },
    {
      path:'/ChoiceSeat',
      component:ChoiceSeat
    },
    {
      path:'/dy1',
      component:dy1
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/register',
      component:register
    },
    {
      path:'/my',
      component:my
    },
    {
      path:'/Cinemas',
      component:Cinemas
    },
    {
      path:'/Cinema/:eid',
      component:Cinema,
      props:true
    },
    {
      path:'/myOrder',
      component:myOrder
    },
    {
      path:'/close',
      component:close
    },
    {
      path:'/result',
      component:result
    },
    {
      path: '/',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
