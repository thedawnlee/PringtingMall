import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  actions:{
    addCart(context,payload){
      return new Promise((resolve,reject)=>{

        let oldProduct = context.state.cartList.find(item=>item.iid===payload.iid)
        if (oldProduct){
          // oldProduct.count+=1
          context.commit('addCounter',oldProduct)
          resolve('商品数量+1')
        } else{
          payload.count=1
          // context.state.cartList.push(payload)
          context.commit('addToCart',payload)
          resolve('增加了新的商品')
        }
        console.log(context.state.cartList.length)
        let price = 0
        for (let item of context.state.cartList){
          price+=item.price*item.count
        }
        console.log(price)
      })
    }
  },
  mutations:{
   addCounter(state,payload){
     payload.count++
   },
    addToCart(state,payload){
     payload.checked=true
     state.cartList.push(payload)
    }
  }
})


//挂载
export default store
