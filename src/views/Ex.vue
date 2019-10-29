<template>
    <div class="a">
      <div class="bb">
  <van-row type="flex" justify="space-between" id="dd">
  <van-col span="6"  class="site">
    <van-dropdown-menu>
    <van-dropdown-item v-model="$store.state.value1"  :options="$store.state.option1"  />
    </van-dropdown-menu>
    <!-- <van-area :area-list="areaList" :columns-num="2" title="标题" /> -->
  </van-col>
  <van-col span="20">
    <van-search class="search" v-model="value" placeholder="找影视剧、影人、影院、演出、图书"  shape="round"></van-search>
  </van-col>
</van-row>
  <van-tabs v-model="active1" >
  <van-tab title="首页推荐"  class="ui" >
    <van-swipe :autoplay="3000" indicator-color="white" >
            <van-swipe-item >
              <img  :src="img1.img" alt style="width:385px; height:110px;"/>
            </van-swipe-item>
            <van-swipe-item>
              <img :src="img2.img" alt style="width:385px; height:110px;"/>
            </van-swipe-item>
            <van-swipe-item>
              <img :src="img3.img" alt style="width:385px; height:110px;"/>
            </van-swipe-item>
            <van-swipe-item>
              <img :src="img4.img" alt style="width:385px;  height:110px;"/>
            </van-swipe-item>
    </van-swipe>
          <!-- 两端对齐 -->
           <van-row type="flex" justify="space-between" class="img1">
            <van-col span="6">
              <img src="../img/林.jpg" alt class="img2" />
              <br />
              <span>林俊杰抢票</span>
            </van-col>
            <van-col span="6">
              <img src="../img/周.jpg" alt class="img2" />
              <br />
              <span>热门演出</span>
            </van-col>
            <van-col span="6">
              <img src="../img/海2.jpg" alt class="img2" />
              <br />
              <span>航海王周边</span>
            </van-col>
            l <van-col span="6">
              <img src="../img/星.jpg" alt class="img2" />
              <br />
              <span>明星应援</span>
            </van-col>
          </van-row>
          <div class="index_text">
            <div class="index_text1">
              <span class="sp1">正在热映&nbsp;&nbsp;</span>
              |
              <span class="sp2">&nbsp;&nbsp;即将上映</span>
            </div>
            <div class="index_text2">
              <span>全部50部&gt;</span>
            </div>
          </div>
          <van-row type="flex" justify="space-between" class="index_img" >
            <van-col span="6" v-for="(p,i) of film" :key="i" @click="sh(i)" style="margin-left:3px;">
              <img :src="p.pic" alt />
              <span style=" overflow : hidden;
              text-overflow : ellipsis;
              white-space : nowrap; width:90%" class="sp">{{p.mname}}</span>
              <br />
              <van-tag round type="danger" class="index_label">
                <router-link to=""  :data-dname="p.mname">购买</router-link>
              </van-tag>
            </van-col>
            
          </van-row>
          <van-divider /> 
           <div class="index_vi">
            <span class="view_text">《火影忍者》中最穷6位忍者,第5位房贷还没还完,鸣人竟在榜上</span>
            <div class="v1" >
            <video src="../img/1.mp4" class="index_view" loop controls id="video" @click="aaaa"></video>
            <a href="jvascript:;" class="play1"  id="hh"  @click="play1">
                <img :src="require('../assets/播放.png')" alt="" id="vimg" style="width:40px;height:40px;">
              </a>
              </div>
          </div>
          <van-divider />
          <div></div>
    </van-tab>
  <van-tab title="电视剧">
    <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>
              <img src="../img/1.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../img/2.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../img/3.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../img/4.jpg" alt />
            </van-swipe-item>
    </van-swipe></van-tab>
  <van-tab title="演唱会">内容 3</van-tab>
  <van-tab title="看大片">内容 4</van-tab>
</van-tabs>
</div>

</div>
</template>
<script>
import Details from "./Details.vue"
export default {
  data() {
    return {
      selected:"",
      active1: 0,
      icon: {
        normal: '//img.yzcdn.cn/icon-normal.png',
        active: '//img.yzcdn.cn/icon-active.png'
      },
      
      dname:"",
      value:"",
      film:[{
        pic:""
      },{
        pic:""
      },{
        pic:""
      },{
        pic:""
      }],
      img1:{},
      img2:{},
      img3:{},
      img4:{},
    };
  },
  methods: {
    sh(i){
      this.dname=this.film[i].mname;
      // console.log(this.film[i].pic)
      sessionStorage.setItem("dname", this.dname);
      sessionStorage.setItem("price",this.film[i].mprice);
      sessionStorage.setItem("pic",this.film[i].pic);
      this.$store.commit("setPic");      
      this.$store.commit("setPrice");
      this.$store.commit("setDname");
      // console.log(this.$store.state.price);
      // console.log(this.$store.state.pic);
      this.$router.push("Details");
    },
    aaaa(){
      if(video.paused){
      vimg.style.display="block";
     
      }else{
      vimg.style.display="block";
      
      }
    },
    play1(){
      if(video.paused){
                if(vimg.style.display="block"){
                video.play();
                
                vimg.src=require('../assets/暂停.png');
                vimg.style.display="none";
                }
            }else{
              if(vimg.style.display="block"){
              // console.log("123")
                vimg.src=require('../assets/播放.png');
                vimg.style.display="none";
                video.pause();
                
              }
            }
      // console.log(video.play())
    },
    loadFilm(){
       this.axios.get("/film",{params:{
         
       }}).then(res=>{
         
         this.film=res.data;
       })
     },
     loadCarousel(){
       this.axios.get("/carousel",{params:{
         
       }}).then(res=>{
         this.img1=res.data[0];
         this.img2=res.data[1];
         this.img3=res.data[2];
         this.img4=res.data[3];
        //  console.log(this.img1)
       })
     },
  },
  created() {
    this.loadFilm();
    this.loadCarousel();
  },
  components:{
    Details
  }
}  
</script>
<style >
.van-col--6 {
    width: 25% !important;
}
#vimg{
  display: none;
}
.van-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    z-index: 100;
}
.van-search {
    margin: auto;
    width: 343px;
    margin-right: 18px;
}
.play1{
  position: absolute;
  left: 45%;
  top:82%;
  font-size: 50px;
  color:#2c3e50ab;
}
.view_text {
  font-size: 18px;
  color: #333;
  float: left;
}
.index_view {
  width: 100%;
  height: 100%;
  position: relative;
}
.index_label {
  clear: both;
  margin-top: 10px;
}
.index_label a {
  color: #fff0f0d1;
  font-size: 12px;
}
.index_img img {
  width: 100px;
  height: 130px;
}
.index_img .sp {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  float: left;
  margin-left: 5px;
  margin-top: 10px;
}
.index_img {
  margin-top: 10px;
  /* margin-left: 6px; */
  clear: both;
}
.sp1 {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}
.index_text1 {
  float: left;
  margin-left: 20px;
  margin-top: 10px;
  color: #333;
  margin-bottom: 10px;
}
.index_text2 {
  float: right;
  margin-right: 20px;
  margin-top: 12px;
  color: #333;
  margin-bottom: 10px;
}
.img2 {
  height: 40px;
  border-radius: 50%;
  margin-top: 10px;
}
.img1 {
  border-bottom: 1px solid #1d212217;
  padding-bottom: 10px;
  padding-top: 8px;
  color: #333;
  text-align: center;
}
  ui{
  margin-top: 20px;
}
.a #dd{
  width: 100%;
    height: 54px;
    position: fixed !important;
    top: 0px;
    left: 0;
    z-index: 2;
    background: #ffffff
}
 .a .van-tabs__nav--line {
    width: 100%;
    height: 40px;
    position: fixed !important;
    top: 50px;
    left: 0;
    z-index: 1;
 }
.a  .van-swipe {
    height: 110px;
    width: 93%;
    margin: 0 auto;
    border-radius: 10px;
    margin-top: 65px;
}
.van-col {
    font-size: 12px;
}
.van-row--justify-space-between {
    overflow: hidden;
}
</style>