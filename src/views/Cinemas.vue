<template>
    <div class="cin">
        <div class="header_style">
            <van-dropdown-menu class="sel_style">
                <van-dropdown-item v-model="$store.state.value1" :options="$store.state.option1" />
            </van-dropdown-menu>
            <span>影院</span>
            <img src="../assets/搜索11.png" class="hright">
        </div>
        <div class="cin1">
            <!-- <lunbo></lunbo> -->
        <div  class="lunbo">
        <van-swipe :autoplay="3000" indicator-color="white" >
            <van-swipe-item v-for="(is,i) of list1" :key="i">
                    <img :src="`http://yexin.applinzi.com${is.img}`" style="width: 414px;height: 100px;">
            </van-swipe-item>
           
        </van-swipe>             
    </div>  
        <div class="daoh">
            <div>
                <van-dropdown-menu>
                    <van-dropdown-item v-model="value1" :options="option1" />
                    <van-dropdown-item v-model="value1" :options="option2" />
                    <van-dropdown-item v-model="value1" :options="option3" />
                    <van-dropdown-item v-model="value1" :options="option4" />
                </van-dropdown-menu>              
            </div>
            <router-link :to="`/Cinema/${p.eid}`" v-for="(p,i) of list" :key="i">
              <div style="border-bottom: 0.5px solid #f2f3f5;" >
                <div class="text1" >
                  <span class="sp1">{{list[i].ename}}</span>
                  <span class="sp2">
                    37.8
                    <span class="sp3">元</span>
                    <span class="sp4">起</span>
                  </span>
                </div>
                <div style="margin-left:15px;">
                  <span class="sp5">{{list[i].site}}</span>
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
          </router-link>
        </div>
        </div>
    </div>
    
</template>
<script>
//import Header from '../components/cinema/Header.vue';
import lunbo from '../components/cinema/lunbo.vue'
export default {
    data() {
    return {
        list:[],
        list1:[],
      value1: 0,
      option1: [
        { text: '品牌', value: 0 },
        { text: '全部', value: 1 },
        { text: '万达影城', value: 2 },
        { text: '万达影城', value: 3 }
      ],
      option2: [
        { text: '全城', value: 0 },
        { text: '宝安区', value: 1 },
        { text: '龙华区', value: 2 },
        { text: '南山区', value: 3 }
      ],option3: [
        { text: '距离近', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
        { text: '活动商品', value: 3 }
      ],option4: [
        { text: '筛选', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
        { text: '活动商品', value: 3 }
      ]
    }},
    created(){ 
        this.getyc();
        var url="carousel";
        this.axios.get(url)
        .then(res=>{
            this.list1=res.data
        });
    },
    methods:{
       getyc(){
           var dname=this.$store.state.value1;
               console.log(dname)
                this.axios.get("site",{params:{dname:dname}})
                    .then(res=>{
                        console.log(res.data)
                        this.list=res.data
                })
       }
    },
    computed:{
      citylist(){
        return this.$store.state.value1;
      }
    },
    watch:{
      citylist(){
        this.getyc();
      }
    }
}
</script>
<style  scoped>
.van-swipe-item {
    width: 414px !important;
      height: 100px!important;
}
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
.cin1{
    margin-top: 41px;
}
.cin .text1 {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 10px;
}
.cin .text2{
  margin-left: 15px;
  margin-right: 15px;
  display: flex;
  justify-content: space-between;
}
.cin .t1 {
  margin-top: 5px;
}

.cin .sp1 {
  font-size: 16px;
  font-weight: bold;
  color: #000000db;
}
.cin .sp2 {
  color: #ff0000;
  font-size: 18px;
}
.cin .sp3 {
  font-size: 11px;
}
.cin .sp4 {
  font-size: 11px;
  color: #000000a8;
}
.cin .sp5 {
  font-size: 11px;
  color: #0000009c;
  margin-top: 5px;
}
.cin .sp6 {
  font-size: 11px;
  margin-top: 5px;
  float: right;
  margin-right: 15px;
      color: #636363;
}
.cin .t1 span {
  font-size: 8px;
  height: 15px;
  display: inline-block;
  text-align: center;
  line-height: 16px;
  border-radius: 3px;
}
.cin .sp7 {
  width: 15px;
  margin-left: 15px;
  background: #d56615ed;
  color: #f2f3f5bd;
}
.cin .sp8 {
  margin-left: 5px;
  width: 15px;
  background: #ffffff;
  border-radius: 3px;
  color: #22e1f47a;
  border: 0.5px solid #22e1f47a;
}
.cin .sp9 {
  margin-left: 5px;
  width: 30px;
  background: #ffffff;
  border-radius: 3px;
  color: #22e1f47a;
  border: 0.5px solid #22e1f47a;
}
.cin .sp10 {
  margin-left: 5px;
  width: 30px;
  background: #ffffff;
  border-radius: 3px;
  color: #d56615ed;
  border: 0.5px solid #d566155c;
} 
.cin .sp11 {
  margin-left: 5px;
  width: 45px;
  background: #ffffff;
  border-radius: 3px;
  color: #d56615ed;
  border: 0.5px solid #d566155c;
}
.cin .sp12 {
  margin-left: 5px;
  width: 95px;
  background: #ffffff;
  border-radius: 3px;
  color: #22e1f47a;
  border: 0.5px solid #22e1f47a;
}
 .sp13 {
  margin-left: 5px;
  width: 75px;
  background: #ffffff;
  border-radius: 3px;
  color: #22e1f47a;
  border: 0.5px solid #22e1f47a;
}
.t2 span {
  font-size: 10px;
  margin-left: 15px;
      color: #636363;
}
 .tt {
  position: absolute;
  top: 132px;
  width: 100%;
}
[class*=van-hairline]::after {
    
    border: 0 solid#f63939  !important;
}
.header_style{
        position: fixed;
        width: 100%;
        height: 40px;
        display: flex;
        background: #fff;
        font-size:20px;
        color:#000;
        justify-content: space-between;
        align-items: center;
        clear: both;
        z-index: 2;
        top: 0;
    }
    .sel_style{
        /* background-color:#f63939 !important; */
        height: 40px !important;
    }
   .header_style  .van-ellipsis {
    
    color: #fff;
}
    .hleft{
        margin-left: 10px;
        font-size: 16px;
    }
    .hright{
        width: 25px;
        height: 25px;
        margin-right: 10px;
    }
    .head{
        z-index: 1;
    }
    .daoh{
        width: 100%;
        top:140px;
    }
    .yylist{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
        padding: 5px
    }
    .left_title{
        display: flex;
        flex-direction: column;
        width: 70%;
        overflow: hidden;
        align-items: flex-start;
        color:#000;
    }


</style>