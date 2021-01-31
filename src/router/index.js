import Vue from 'vue'
import VueRouter from 'vue-router'
 
 //Screen
import Index from '../screens/Index.vue'  

//Pages
import Home from '../pages/Home.vue'
import Result from '../pages/Result.vue'
import Search from '../pages/Search.vue'
import Detail from '../pages/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
  	path:'/',
  	component:Index,
  	children:[
  		{
  			path:'',
  			component:Home
  		},
      {
        path:'movies/',
        component:Result
      },
      {
        path:'tv/',
        component:Result
      },
      {
        path:'people/',
        component:Result
      },
      {
        path:'search/',
        component:Search
      },
      {
        path:':type/:id',
        component:Detail
      },
  	]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
