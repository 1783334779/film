<template>
    <div class="result">
        <van-nav-bar
  title="支付结果"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
  class="return"
/>
<!-- <img src="../assets/确认.png" alt="" class="re_img"> -->
<div style="width:100%;margin-top:50px;text-align: center;">
    <div style="">
<div class="re_img"></div><br>
<span style="font-size:25px;color:#2d2d2d">支付成功</span>
<span style="margin-top:15px; color:#ababab;">支付成功您可能需要以下操作</span>
</div><br>
<van-button type="default" to="/">返回首页</van-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<van-button type="default" to="myOrder">查看订单</van-button>
</div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        onClickLeft(){
            console.log(123)
            this.$router.push("close")
        }
    }

}
</script>
<style scoped>
.result span{display:block;}
.re_img{
    background-image: url('../assets/确认.png');
    background-size:100% 100%;
    width: 120px;
    height: 120px; 
    margin: auto;
    /* text-align: center; */
}
.return{
    border-bottom:1px solid #f0f0f0;
}
.van-nav-bar__text {
    color: #ef4238 !important;
}
</style>