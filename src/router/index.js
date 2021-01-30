import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/Home.vue');
const Main = () => import('../views/Main.vue');
const SignUp = () => import('../views/SignUp.vue');
const ListItem = () => import('../components/ListItem.vue');

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Home,
    children: [{
      path: '',
      component: Main,
      children: [{
        path: '',
        name: 'Home',
        component: ListItem
      }]
    }]
  }, {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router