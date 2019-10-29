<template>
  <div class="details">
    <van-nav-bar
      :title="`${$store.getters.getDname}`"
      left-text="返回"
      class="Nav"
      left-arrow
      @click-left="onClickLeft"
    >
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <van-tabs v-model="active" class="Label">
      <van-tab title="10月19日">
        <div class="tt"  >
          <div v-for="(p,i) of si" :key="i" @click="jk(i)">
            <router-link to="" style="color:#0000009c;" >
          <div style="border-bottom: 0.5px solid #f2f3f5;"   >
            <div class="text1" >
              <span class="sp1" >{{si[i].ename}}</span>
              <span class="sp2">
                {{parseInt($store.state.price).toFixed(1)}}
                <span class="sp3">元</span>
                <span class="sp4">起</span>
              </span>
            </div>
            <div class="text2" >
              <span class="sp5">{{si[i].site}}</span>
              <span class="sp6">100m</span>
            </div>
            <div class="t1" >
              <span class="sp7">惠</span>
              <span class="sp8">退</span>
              <span class="sp9">改签</span>
              <span class="sp10">小吃</span>
              <span class="sp11">折扣卡</span>
              <span class="sp12">CGS中国巨幕厅</span>
              <span class="sp13">杜比全景声厅</span>
            </div>
            <div class="t2" style="margin-top:5px;margin-bottom:7px;" >
              <span>近期场次:14:30 | 15:25 | 16:30</span>
            </div>
          </div>
          </router-link>
          </div>
          <div>{{$store.state.dname}}</div>
        </div>
      </van-tab>
      <van-tab title="10月20日">
        <div class="tt" >
          <div v-for="(p,i) of si" :key="i">
          <div style="border-bottom: 0.5px solid #f2f3f5;" >
            <div class="text1" >
              <span class="sp1">{{si[i].ename}}</span>
              <span class="sp2">
                37.8
                <span class="sp3">元</span>
                <span class="sp4">起</span>
              </span>
            </div>
            <div style="margin-left:15px;">
              <span class="sp5">{{si[i].site}}</span>
              <span class="sp6">100m</span>
            </div>
            <div class="t1">
              <span class="sp7">惠</span>
              <span class="sp8">退</span>
              <span class="sp9">改签</span>
              <span class="sp10">小吃</span>
              <span class="sp11">折扣卡</span>
              <span class="sp12">CGS中国巨幕厅</span>
              <span class="sp13">杜比全景声厅</span>
            </div>
            <div class="t2" style="margin-top:5px;margin-bottom:7px;">
              <span>近期场次:14:30 | 15:25 | 16:30</span>
            </div>
          </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="10月21日"><div class="tt" >
          <div v-for="(p,i) of si" :key="i" >
          <div style="border-bottom: 0.5px solid #f2f3f5;" >
            <div class="text1" >
              <span class="sp1">{{si[i].ename}}</span>
              <span class="sp2">
                37.8
                <span class="sp3">元</span>
                <span class="sp4">起</span>
              </span>
            </div>
            <div style="margin-left:15px;">
              <span class="sp5">{{si[i].site}}</span>
              <span class="sp6">100m</span>
            </div>
            <div class="t1">
              <span class="sp7">惠</span>
              <span class="sp8">退</span>
              <span class="sp9">改签</span>
              <span class="sp10">小吃</span>
              <span class="sp11">折扣卡</span>
              <span class="sp12">CGS中国巨幕厅</span>
              <span class="sp13">杜比全景声厅</span>
            </div>
            <div class="t2" style="margin-top:5px;margin-bottom:7px;">
              <span>近期场次:14:30 | 15:25 | 16:30</span>
            </div>
          </div>
          </div>
        </div></van-tab>
      <van-tab title="10月22日">
        <div class="tt" >
          <div v-for="(p,i) of si" :key="i">
          <div style="border-bottom: 0.5px solid #f2f3f5;" >
            <div class="text1" >
              <span class="sp1">{{si[i].ename}}</span>
              <span class="sp2">
                {{$store.state.price}}
                <span class="sp3">元</span>
                <span class="sp4">起</span>
              </span>
            </div>
            <div style="margin-left:15px;">
              <span class="sp5">{{si[i].site}}</span>
              <span class="sp6">100m</span>
            </div>
            <div class="t1">
              <span class="sp7">惠</span>
              <span class="sp8">退</span>
              <span class="sp9">改签</span>
              <span class="sp10">小吃</span>
              <span class="sp11">折扣卡</span>
              <span class="sp12">CGS中国巨幕厅</span>
              <span class="sp13">杜比全景声厅</span>
            </div>
            <div class="t2" style="margin-top:5px;margin-bottom:7px;">
              <span>近期场次:14:30 | 15:25 | 16:30</span>
            </div>
          </div>
          </div>
        </div>  
      </van-tab>
      
    </van-tabs>
    <van-divider dashed />
    <van-dropdown-menu active-color="#ee0a24">
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value2" :options="option3" />
      <van-dropdown-item v-model="value2" :options="option4" />
      <van-dropdown-item v-model="value2" :options="option5" />
    </van-dropdown-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      si: [],
      aa: "",
      active: 0,
      value1: "全城",
      value2: "a",
      option1: [
        { text: "全城", value: "全城" },
        { text: "深圳", value: "深圳" },
        { text: "广州", value: "广州" },
        { text: "惠州", value: "惠州" },
        { text: "东莞", value: "东莞" }
      ],
      option2: [
        { text: "品牌", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      option3: [{ text: "距离近", value: "a" }, { text: "价格低", value: "b" }],
      option4: [
        { text: "时段", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      option5: [
        { text: "筛选", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ]
    };
  },
  methods: {
    jk(i){
      // console.log(e.target.dataset);
      var ename=this.si[i].ename
      sessionStorage.setItem( "ename", ename);
      this.$store.commit("setEname");
      this.$router.push("/home");
    },
    onClickLeft() {
      this.$router.push("/");
      // window.history.go(-1);
    },
    site() {
      this.axios
        .get("/site", {
          params: {
            dname: this.aa
          }
        })
        .then(res => {
          this.si = res.data;
          console.log(this.si)
        });
    }
  },
  created() {
    this.aa =this.$store.state.value1
    this.site();
  },
  
};
</script>
<style >

.unselected-seat{
    background: url('./../assets/unselected.png') center center no-repeat;
    background-size: 100% 100%;
  }
.details .text2{
  margin-left: 15px;
  margin-right: 15px;
  display: flex;
  justify-content: space-between;
}
.details .t1 {
  margin-top: 5px;
}

.details .sp1 {
  font-size: 16px;
  font-weight: bold;
  color: #000000db;
}
.details .sp2 {
  color: #ff0000;
  font-size: 18px;
}
.details .sp3 {
  font-size: 11px;
}
.details .sp4 {
  font-size: 11px;
  color: #000000a8;
}
.details .sp5 {
  font-size: 11px;
  color: #0000009c;
  margin-top: 5px;
}
.details .sp6 {
  font-size: 11px;
  margin-top: 5px;
}
.details .t1 span {
  font-size: 8px;
  height: 15px;
  display: inline-block;
  text-align: center;
  line-height: 16px;
  border-radius: 3px;
}
.details .sp7 {
  width: 15px;
  margin-left: 15px;
  background: #d56615ed;
  color: #f2f3f5bd;
}
.details .sp8 {
  margin-left: 5px;
  width: 15px;
  background: #ffffff;
  border-radius: 3px;
  color: #22e1f47a;
  border: 0.5px solid #22e1f47a;
}
.details .sp9 {
  margin-left: 5px;
  width: 30px;
  background: #ffffff;
  border-radius: 3px;
  color: #22e1f47a;
  border: 0.5px solid #22e1f47a;
}
.details .sp10 {
  margin-left: 5px;
  width: 30px;
  background: #ffffff;
  border-radius: 3px;
  color: #d56615ed;
  border: 0.5px solid #d566155c;
}
.details .sp11 {
  margin-left: 5px;
  width: 45px;
  background: #ffffff;
  border-radius: 3px;
  color: #d56615ed;
  border: 0.5px solid #d566155c;
}
.details .sp12 {
  margin-left: 5px;
  width: 95px;
  background: #ffffff;
  border-radius: 3px;
  color: #22e1f47a;
  border: 0.5px solid #22e1f47a;
}
.details .sp13 {
  margin-left: 5px;
  width: 75px;
  background: #ffffff;
  border-radius: 3px;
  color: #22e1f47a;
  border: 0.5px solid #22e1f47a;
}
.details .t2 span {
  font-size: 10px;
  margin-left: 15px;
}
.details .tt {
  position: absolute;
  top: 132px;
  width: 100%;
}
.details .text1 {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: 15px;
  margin-right: 15px;
}
.details .van-icon {
  font: 28px/1 "vant-icon" !important;
  font-size: none;
}
.details .van-nav-bar .van-icon {
  color: #ef4238 !important;
}
.details .van-nav-bar__text {
  color: #ef4238 !important;
}
.details .van-nav-bar__title {
  font-weight: bold;
}
.details .van-nav-bar {
  width: 100%;
}
.details .Nav {
  position: fixed !important;
  top: 0px;
}
.details .van-tabs--line .van-tabs__wrap {
  position: fixed;
  top: 44px;
  width: 100%;
  z-index: 1;
}
.details .van-dropdown-menu {
  border-top: 0.5px solid #f2f3f5;
  border-bottom: 0.5px solid #f2f3f5;
  position: fixed !important;
  top: 88px;
  width: 100%;
  margin-left: -6px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>
