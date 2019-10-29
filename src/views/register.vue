<template>
   <div id="register">
      <div id="d1">
         <span class="sp1">
            <router-link to="/">返回</router-link>
         </span>
         <span class="sp2">帮助</span>
      </div>
      <div id="box">
         <div class="login">
            <strong>注册</strong>
         </div>
         <div id="d2">
            <span> 手机号</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="tel" placeholder="请输入手机号" v-model="phone">
            <hr>
            <div id="hint1"></div>
            <span> 密码</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="password" placeholder="请输入6-12位密码" v-model="upwd">
            <hr>
            <span>重复密码</span>&nbsp;
            <input type="password" placeholder="请重复输入密码" v-model="upwdd">
            <hr>
            <div id="hint3"></div>
         </div>
         <div id="d3" @click="dj">注册</div>
         <div id="emp"></div>
         <div id="d4">
            <div class="sp">
               <span>注册代表你已同意</span>
               <span style="color:#fa4657">《猫眼电影用户协议》</span>
            </div>
         </div> 
      </div> 
   </div>
</template>
<script>
export default {
   data(){
      return{
         phone:"",
         upwd:"",
         upwdd:"",
      }
   },
   methods:{
      dj(){
         var phone=this.phone;
         var upwd=this.upwd;
         var upwdd=this.upwdd;
         var reg=/^1[3,4,5,7,8][0-9]{9}$/;
         var rem = /^[a-z0-9]{6,12}$/i;//6-12为字母数字
         //判断手机号格式
         if(reg.test(phone)==false){
            hint1.innerHTML="手机号输入不正确";
            return;
         }else{
            hint3.innerHTML=""
         }
         if(rem.test(upwd)==false){
            hint3.innerHTML="密码格式不正确";
            return;
         }
         if(upwd!==upwdd){
            hint3.innerHTML="重复密码输入不一致";
            return;
         }else{
            hint3.innerHTML=""
         }
         //判断手机号是否存在
         var url="register";
         var obj={
            phone:phone,
            upwd:upwd};
         this.axios.get(url,{params:obj}).then(res=>{
            if(res.data.code==1){
               this.$toast("注册成功")
               setTimeout(() => {
                  this.$router.push("/login")
               }, 2000);
            }else{
               this.$messagebox("用户名已存在")
            }
         })
      }
   }
}
</script>
<style scoped>
   #hint1,#hint2,#hint3{
      color:#f44336;
      font-size: 12px;
   }
   a{
      text-decoration: none;
      color:rgba(255, 0, 0, 0.651);
   }
   #d1{
      width: 100%;height: 80px;
      color:rgba(255, 0, 0, 0.651);
      overflow: hidden;
   }
   #d1 .sp1{
      float: left;
      padding: 5px;
   }
   #d1 .sp2{
      float: right;
      padding: 5px;
   }
   #box{
      width: 80%;
      margin: 0 auto;
      overflow: hidden;
   }
   #box .login{
      height: 70px;
      font-size: 20px;
   }
   #d2 input{
      border: none;
      outline:none;
      height:30px;
   }
   #d2 .sp{
      font-size: 12px;
      color:#4b4747;
       
   }
   #d3{
      background-color:#f44336;;
      border-radius: 5px;
      color: white;
      padding: 10px 32px;
      text-align: center;
      text-decoration: none;
      font-size: 14px;
      margin-top:20px; 
   }
   #box .pwd{
      padding-top:20px;
      font-size:12px;
      color:#4b4747
   }
   #d4{
      width: 80%;height: 100px;
      font-size: 12px;
      padding: 50px 0;
      margin: 0 auto;
      text-align: center;
   }
</style>