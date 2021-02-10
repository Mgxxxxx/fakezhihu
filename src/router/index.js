import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/Home.vue');
const Main = () => import('../views/Main.vue');
const SignUp = () => import('../views/SignUp.vue');
const Editor = () => import('../views/Editor.vue');
const DetailsArticle = () => import('../views/DetailsArticle.vue');
const DetailsQuestion = () => import('../views/DetailsQuestion.vue');
const People = () => import('../views/People.vue');
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
    }, {
      path: 'questions/:id',
      name: 'detailsQuestion',
      component: DetailsQuestion
    }]
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/editor/:articleId',
    name: 'editor',
    component: Editor
  },
  {
    path: '/articles/:id',
    name: 'detailsArticles',
    component: DetailsArticle
  },
  {
    path: '/people/:id',
    component: People,
    name: 'people'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router