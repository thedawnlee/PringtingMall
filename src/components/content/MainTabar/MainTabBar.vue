<template>
  <TabBar>
    <TabBarItem activeColor="blue">
      <img slot="item-icon" src="~assets/img/TabBar/Home.png" alt="">
      <img slot="item-icon-active" src="~assets/img/TabBar/Search.png" alt="">
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem link="/category" active-color="blue">
      <img slot="item-icon" src="~assets/img/TabBar/Home.png" alt="">
      <img slot="item-icon-active" src="~assets/img/TabBar/Search.png" alt="">
      <div slot="item-text">搜索</div>
    </TabBarItem>
    <TabBarItem link="/cart" activeColor="blue">
      <img slot="item-icon" src="~assets/img/TabBar/Home.png" alt="">
      <img slot="item-icon-active" src="~assets/img/TabBar/Search.png" alt="">
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem link="/profile" active-color="blue">
      <img slot="item-icon" src="~assets/img/TabBar/Home.png" alt="">
      <img slot="item-icon-active" src="~assets/img/TabBar/Search.png" alt="">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
  import  TabBar from 'components/common/tabbar/TabBar'
  import  TabBarItem from 'components/common/tabbar/TabBarItem'
  export default {
    name: "MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
