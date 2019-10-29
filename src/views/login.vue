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
        <strong>登陆</strong>
      </div>
      <div id="d2">
        <span>手机号</span>&nbsp;&nbsp;&nbsp;
        <input
          type="tel"
          placeholder="请输入手机号"
          style="height:20px"
          v-model="phone"
        />
        <hr />
        <span>密码</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="password"
          placeholder="请输入密码"
          style="height:20px"
          v-model="upwd"
        />
        <hr />
        <span class="sp">如果还没有注册请先注册</span>
      </div>
      <div id="d3" @click="login">登陆</div>
      <div class="pwd">
        <router-link to="register">注册</router-link>
      </div>
      <div id="emp"></div>
      <div id="d4">
        <div class="logo">
          <img class="wx" src="../../public/img/微信.png" />
          <img class="qq" src="../../public/img/QQ.png" />
        </div>
        <div class="sp">
          <span>登录代表你已同意</span>
          <span style="color:#fa4657">《猫眼电影用户协议》</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      phone: "",
      upwd: ""
    };
  },
  methods: {
    login() {
      //获取手机和密码
      var phone = this.phone;
      var upwd = this.upwd;
      //正则验证手机号和密码
      var reg = /^1[3,4,5,7,8][0-9]{9}$/;
      var rem = /^[a-z0-9]{6,12}$/i; //6-12为字母数字
      //验证用户名
      if (reg.test(phone) == false) {
        this.$messagebox("手机号输入不正确");
        return;
      }
      if (rem.test(upwd) == false) {
        this.$messagebox("密码输入不正确");
        return;
      }
      //发送axios请求
      var url = "login";
      var obj = { phone: phone, upwd: upwd };
      this.axios.get(url, { params: obj }).then(result => {
        if (result.data.code < 0) {
          //失败返回
          this.$messagebox("用户名或密码有误");
        } else {
          //成功跳转
          sessionStorage.setItem("phone", result.config.params.phone);
          sessionStorage.setItem("code", result.data.code);
          this.$store.commit("setCode");
          this.$toast({
            message: "登录成功",
            position: "center",
            duration: 2000
          });
          setTimeout(() => {
            this.$router.push("/");
          }, 2000);
          console.log(result);
        }
      });
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: rgba(255, 0, 0, 0.651);
}
#d1 {
  width: 100%;
  height: 80px;
  color: rgba(255, 0, 0, 0.651);
  overflow: hidden;
}
#d1 .sp1 {
  float: left;
  padding: 5px;
}
#d1 .sp2 {
  float: right;
  padding: 5px;
}
#box {
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
}
#box .login {
  height: 70px;
  font-size: 20px;
}
#d2 input {
  border: none;
  outline: none;
}
#d2 .sp {
  font-size: 12px;
  color: #4b4747;
}
#d3 {
  background-color: #f44336;
  border-radius: 5px;
  color: white;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  margin-top: 20px;
}
#box .pwd {
  padding-top: 20px;
  font-size: 12px;
  color: #4b4747;
}
#d4 {
  width: 80%;
  height: 100px;
  font-size: 12px;
  padding: 50px 0;
  margin: 0 auto;
  text-align: center;
}
#d4 .logo {
  padding: 20px;
}
#d4 .logo img {
  padding: 0 10px;
}
</style>
