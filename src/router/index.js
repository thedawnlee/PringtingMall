import Vue from 'vue'
import VueRouter from 'vue-router'


//安装插件
Vue.use(VueRouter)
const routes = [
  {
    path:'',
    redirect:'/home'
  },

  {
    path:'/home',
    component: ()=>import('views/home/Home'),
    meta:{
      title:'Home'
    }
  },
  {
    path:'/cart',
    component:()=>import('views/cart/Cart'),
    meta:{
      title:'Cart'
    }
  },
  {
    path:'/category',
    component:()=>import('views/category/Category'),
    meta:{
      title:'Category'
    }

  },
  {
    path:'/profile',
    component:()=>import('views/profile/Profile'),
    meta:{
      title:'Profile'
    }
  },
  {
    path:'/detail/:id',
    component:()=>import('views/productDetail/productDetail'),
    meta:{
      title:'Detail'
    }
  }
]
const router = new VueRouter({

  routes,
  mode:'history'

})


// router.beforeEach((to,from,next)=>{
//   document.title=to.matched[0].meta.title
//   next()
//
// })
export default router