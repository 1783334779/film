<template>
    <div  class="lunbo">
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item  v-for="(p,i) of list" :key="i">
                    <img :src="'http://127.0.0.1:4000/'+p.img" style="width:414px;">
            </van-swipe-item>
        </van-swipe>             
    </div>    
</template>
<script>
export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        var url="carousel";
        this.axios.get(url)
        .then(res=>{
         this.list=res.data;
         console.log(this.list)
        });
    }
}
</script>
<style scoped>
  .lunbo{
      
      /* top:40px; */
      width: 100%;
      height: 100px;
      overflow: hidden;
      /* margin-top: 20px; */
  }
  img{
      width: 414px;
      height: 100px;
  }
  .van-swipe-item {
    width: 414px !important;
      height: 100px!important;
}
</style>