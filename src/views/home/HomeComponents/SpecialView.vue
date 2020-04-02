<template>
  <div class="special-view">

    <div v-for="item in qualityStore" class="recommend-item">
      <a v-bind:href="item.link">
        <img v-bind:src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SpecialView",
    props:{
      qualityStore:{

        type:Array,
        default(){
          return []
        }

      }
    }
  }
</script>

<style scoped>

  .special-view{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 18px;
    padding: 15px 0 15px;
    border-bottom: 10px solid #eee;


  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 80px;
    height: 80px;
  }
  .special-text{
    text-align: center;
  }
</style>