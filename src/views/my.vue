<template>
   <div id="d1">
      <div id="d2">
         <img src="../../public/img/铃铛.png">
      </div>
      <div id="d3">
         <div class="logo">
            <img src="../../public/img/个人头像.png">
         </div>
         <div class="text">
            <router-link to="/login">
               <strong>用户{{code==1?phone:"登录"}}</strong>
            </router-link>
         </div>
         <div class="text2">个人首页 ></div>
      </div> 
      <div id="d4">
         <ul>
            <li>轨迹</li>
            <li>电影</li>
            <li>剧集</li>
            <li>综艺</li>
            <li>书籍</li>
            <li>收藏</li>
         </ul>
      </div>
      <div id="d5" @click="order">
         <div class="text">
            <strong>我的订单</strong>
         </div>
         <div class="text2">全部订单 ></div>
      </div>
         <div id="d6">
            <strong>我的服务</strong>
         </div>
         <div id="d7">
            <ul>
               <li>
                  <img src="../../public/img/卡片.png" ><br>
                  折扣卡
               </li>
               <li>
                  <img src="../../public/img/优惠券.png"><br>
                  优惠券
               </li>
               <li>
                  <img src="../../public/img/电影卡.png"><br>
                  水泥卡
               </li>
               <li>
                  <img src="../../public/img/银行卡.png"><br>
                  银行活动
               </li>
               <li>
                  <img src="../../public/img/周边产品.png"><br>           
                  周边
               </li>
               <li>
                  <img src="../../public/img/演出.png"><br>            
                  Hot演出
               </li>
               <li>
                  <img src="../../public/img/爱心.png"><br>
                  明星应援
               </li>
               <li>
                  <img src="../../public/img/视频.png"><br>
                  在线视频
               </li>
               <li>
                  <img src="../../public/img/认证.png"><br>
                  水泥认证
               </li>
               <li>
                  <img src="../../public/img/借钱.png"><br>
                  借钱
               </li>
            </ul>
         </div>
         <div id="d8">
            <span>设置</span>
            <span> > </span>
         
         <div id="d9">广告位</div>
         </div>
   </div>
</template>
<script>
export default {
   data(){
      return {
         phone:"",
         code:""
      }
   },
   methods: {
      order(){
         this.$router.push("myOrder");
      }
   },
   created() {
      this.phone=sessionStorage.getItem("phone");
      this.code=sessionStorage.getItem("code");
   },
}
</script>
<style scoped>
   a{
      text-decoration: none;
      color: aliceblue;
   }
   #d1{
      width: 100%;height: 187px;
      background: #ff0000b5;
      border-radius:3px;
      
   }
   #d2{
      float: right;
      padding: 10px;
   }
   #d3{
      padding: 30px;
      align-content: center;
   }
   #d3 .logo,#d3 .text{
      float: left;
   }
   #d3 .text{
      padding:3px 0 0 10px;
      color: aliceblue;
      font-size: 20px;
   }
   #d3 .text2{
      float: right;
      padding-top: 5px;
      color: aliceblue;
   }
   #d4{height: 70px;}
   #d4 li{
      width: 13%;
      color: aliceblue;
      float: left;
      list-style: none;
      padding-top: 25px;
      font-size:14px; 
   }
   #d5{
      width: 90%;height:40px;
      background: #fff;
      align-content: center;
      margin:auto;
      border-radius:3px; 
   }
   #d5 .text{
      padding: 10px;
      float: left;
      font-size: 18px;
   }
   #d5 .text2{
      padding: 12px;
      float:right;
      font-size: 10px;
      color: dimgrey
   }
   #d6{
      font-size: 16px;
      padding: 20px;
      margin-top: 10px;
   }
   #d7 li{
      width:20%;
      list-style: none;
      float: left;
      padding-bottom:20px;
      font-size: 13px; 
      margin-left: 20px;
   }
   #d8{ 
      width:100%;
      float: left;
      /* padding: 10px; */
      background: #fff;
      margin-left: 10px;
      margin-top: 100px;
   }
   #d9{
      width:100%;height: 30px;
      float: left;
      margin-top: 10px;
      /* margin-left: 10px; */
      background: #fff;
      
   }
</style>