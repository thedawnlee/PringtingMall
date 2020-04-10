<template>
  <div id="app">
    <keep-alive exclude="productDetail">
      <router-view></router-view>
    </keep-alive>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>

import MainTabBar from 'components/content/MainTabar/MainTabBar'
export default {

  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    margin-top: 44px;
}


  @import 'assets/css/base.css';

</style>
