<template>
  <div>
    <div class="top">
      <van-row type="flex" justify="space-between">
        <van-col span="6">
          <van-dropdown-menu class="van-ellipsis1">
            <van-dropdown-item v-model="$store.state.value1" :options="$store.state.option1"  />
          </van-dropdown-menu>
        </van-col>
        <van-col span="6">
          <!-- <span class="d1">正在上映&nbsp;&nbsp;</span>
          <span class="d2">即将上映</span> -->
          <van-tabs v-model="active">
  <van-tab title="正在热映" class="cc"></van-tab>
  <van-tab title="即将上映" ></van-tab>
</van-tabs>
        </van-col>
        <van-col span="6">
          <img src="../assets/搜索11.png" class="timg" alt="">
        </van-col>
      </van-row>
    </div>
    <!--影片消息-->
    <div class="fxi">
    <div class="box">
      <span>
      <img src="../assets/数据.png" 
    style="width:16px;height:16px; margin-top:5px;margin-left:10px;" alt="">&nbsp; <span style="font-size:14px">实时票房</span></span> <span style="margin-right:12px;">今日大盘
      <span style="color:#f63939">11475.5万</span>
      </span>  </div>
    <div class="rootstyle" v-for="(item,index) of movies" :key="index">
      <div class="leftimgtxt">
        <img :src="'http://yexin.applinzi.com'+item.pic" class="imgstyle" />

        <div class="titlestyle">
          <span class="title">{{item.mname}}</span>
          <span class="subtitle1">
            <span>猫眼评分</span>
            <span class="fen">&nbsp;&nbsp;{{item.score}}</span>
          </span>
          <span class="subtitle">{{item.actor}}</span>
          <span class="subtitle">今天天226家影院放映1092场</span>
        </div>
      </div>

      <span class="sendtime">
        <router-link to="Details"><van-tag round type="danger" :data-mname="item.mname" @click="sh">购买</van-tag></router-link>
      </span>
    </div>
    </div>
    <!--2.读取数据文件json-->
    <!--3.创建循环显示消息内容-->
  </div>
</template>
<script>
//引入子组件
export default {
  data() {
    return {
      movies: [],
      // value1: 0,
      // option1: [
      //   { text: "全部商品", value: 0 },
      //   { text: "新款商品", value: 1 },
      //   { text: "活动商品", value: 2 },
      //   { text: "1", value: 3 }
      // ],

      active: 0
    };
  },
  methods: {
    loadFilm() {
      this.axios.get("/film", { params: {} }).then(res => {
        console.log(res.data);
        this.movies = res.data;
      });
    },
    sh(e){
      // this.dname=e.target.dataset.dname;
      // console.log(this.dname);
      sessionStorage.setItem( "dname", e.target.dataset.mname);
      this.$store.commit("setDname");
      console.log(sessionStorage.getItem( "dname"));
      // this.$router.push("Details");
    },
  },
  created() {
    this.loadFilm();
  }
};
</script>
<style scoped>
.fxi{
  display: block;
  content: '';
  clear:both;
}
.box{
    width: 90%;
    height: 30px;
    background: #Ccc;
    margin:0 auto; 
    border-radius: 5px;
    font-size: 12px;
    font-weight: bold;
    line-height: 30px;
    display: flex;
    justify-content:space-between;
    margin-top: 50px;
    }
.cc{
    line-height: 37px;
}

.timg{
    width: 30px;
    height: 30px;
    float: right;
    margin-right: 8px;
    margin-top: 5px;
}
.top .van-ellipsis1 {
    z-index: 100;
    margin-left: -43px;
    height: 40px;
}
.van-col {
    font-size: 15px;
    line-height: 40px;
}
.fen {
  color: orange;
  font-size: 13px;
}
.subtitle1 {
  font-size: 12px;
  margin-top: 6px;
}
.van-tag--danger {
  margin-right: 10px;
}
.imgstyle {
  width: 80px;
  height: 95px;
  margin-left: 10px;
  border-radius: 2px;
}
/*1 一条消息*/
/*1.1 父元素 弹性布局*/
.rootstyle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  margin-top: 10px;
  height: 110px;
}
/*1.2 左侧图片*/
.leftimgtxt {
  display: flex;
  align-items: center;
}
/*1.3:标题布局*/
.titlestyle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 7px;
}
/*1.4 标题样式*/
.title {
  color: #000000c9;
  font-size: 16px;
  font-weight: bold;
}
/*1.5 子标题样式*/
.subtitle {
  color: gray;
  margin-top: 4px;
  font-size: 12px;
  margin-top: 6px;
}
/*1.6 影片信息上方样式*/
.c1 {
  margin-left: 50px;
}
.c2 {
  margin-left: 100px;
}
.c3 {
  color: #cc0033;
}
/*1.7 上方样式*/
.top {
  position: fixed;
  width: 100%;
  height: 50px;
  top: 0;
  left:0;
  
}
.d1 {
  font-weight: bold;
  font-size: 16px;
  color: #ee0a24;
      border-bottom: 2px solid red;
}
.d2 {
  font-weight: bold;
  font-size: 15px;
  color: #00000096;
  
}
.cd {
  background: #f63939;
  color: #ffffff;
}
.bottom {
  margin-top: 20px;
}
/*下方样式*/
.t1 {
  background: #f63939;
  margin-right: 10px;
  color: #ffffff;
}
.van-dropdown-menu__title {
  color: #fee5e5 !important;
}
.active {
  color: #fee5e5 !important;
}
.van-ellipsis {
  color: #fee5e5 !important;
}
van-dropdown-item__option--active,
.van-dropdown-item__option--active .van-dropdown-item__icon {
  color: #fee5e5;
}
.van-row--justify-space-between {
    background: #FFF;
}
</style>
