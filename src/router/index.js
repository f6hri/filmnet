import Vue from 'vue'
import VueRouter from 'vue-router'
 
 //Screen
import Index from '../screens/Index.vue'
import Account from '../screens/Account.vue'

//Pages
import Home from '../pages/Home.vue'
import Result from '../pages/Result.vue'
import Search from '../pages/Search.vue'
import Detail from '../pages/Detail.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Profile from '../pages/Profile.vue'

//Views
import ProfileInfoView from '../views/profileInfoView.vue'
import LikesView from '../views/likesView.vue'
import SavesView from '../views/savesView.vue'
import WatchListView from '../views/watchListView.vue'
import SettingsView from '../views/settingsView.vue'

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
      {
        path:'/:profileID/',
        component:Profile,
        children:[
          {
            path:'',
            component:ProfileInfoView
          },
          {
            path:'likes',
            component:LikesView
          },
          {
            path:'saves',
            component:SavesView
          },
          {
            path:'watchList',
            component:WatchListView
          },
          {
            path:'settings',
            component:SettingsView
          }
        ]
      }
  	]
  },
  {
    path:'/account/',
    component:Account,
    children:[
      {
        path:'login',
        component:Login
      },
      {
        path:'register',
        component:Register
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
