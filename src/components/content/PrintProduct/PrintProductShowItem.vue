<template>
  <div class="product-item" @click="productItemClick"
  >
    <img :src="getImg" alt="" @load="imgload">
   <div class="product-info">
     <p>{{product.title}}</p>
     <span class="product-price">{{product.price}}</span>
     <span class="product-collect">{{product.cfav}}</span>
   </div>
  </div>
</template>

<script>
  export default {
    name: "PrintProductShowItem",
    data(){
      return {
        id:undefined
      }
    },
    computed:{
      getImg(){
        return this.product.image||this.product.show.img
      }
    },
    props:{
      product:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imgload(){
        this.$bus.$emit('imgLoad')
      },

        productItemClick(){

          this.id=this.product.iid||this.product.shop_id
          console.log(this.id);
          console.log('123')

          this.$bus.$emit('requestDetail',this.id)
          this.$router.push('/detail/'+this.id)

      }
    }
  }
</script>

<style scoped>
.product-item{
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
  .product-item img{
    width: 100%;
    border-radius: 5px;
  }
  .product-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .product-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .product-info .product-price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .product-info .product-collect{
    position: relative;
  }
  .product-info .product-collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }

</style>