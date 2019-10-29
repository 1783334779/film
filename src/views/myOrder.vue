<template>
    <div class="body">
        <van-nav-bar
  title="我的订单"
  left-text=""
  right-text="编辑"
  left-arrow
  @click-left="onClickLeft"
/>
<van-tabs v-model="active">
  <van-tab title="电影">
      <!-- 两端对齐 -->
      <div class="entirety">
          <div></div>
<van-row type="flex" justify="space-between" class="order_text">
  <van-col span="6" class="otext"><span style="margin-left:10px;">{{$store.state.ename}}&nbsp;&gt;</span></van-col>
  <van-col span="6" class="otext"><span   style="float:right;margin-right:10px;">未完成</span></van-col>
</van-row>
<div class="rootstyle" >
      <div class="leftimgtxt">
        <img :src="$store.state.pic" class="imgstyle" />
        <div class="titlestyle">
          <span class="title">{{$store.state.dname}}&nbsp;2张</span>
          <span class="subtitle">08月10日 19:10</span>
          <span class="subtitle">激光5号厅 9排8座 9排7座</span>
        </div>
      </div>
    </div>
    <span class="subtitle" style="margin-left:10px;">总价：81.8元</span>
    </div>
    
  </van-tab>
  <van-tab title="在线观影"></van-tab>
  <van-tab title="周边·演出"></van-tab>  
</van-tabs>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active:0
        }
    },
    methods: {
        onClickLeft(){
            window.history.go(-1)
        }
    },
}
</script>
<style>
.body .otext{
    margin-top: 5px;
    margin-bottom:5px;
    color: #263238d6;
}
.body .entirety{
    width: 100%;
    height: 155px;
    background: #fff;
}
.body{
    background: rgb(240, 240, 240)!important;
    height: 1000px;
}
.body .van-nav-bar__text {
    color: #ee0a24 !important;
    margin: -4px -5px !important;
    padding: 0 0 !important;
    width: 36px;
    height: 20px;
    line-height: 20px;
    border: 1px solid #ee0a24;
    border-radius: 4px;
}
.body .van-tabs__line{
    width: 140px !important;
}
.body .order_text{
    margin-top: 10px;
    background: #fff;
    border-bottom: 0.5px solid #ccc
    ;
    flex-wrap: wrap;
}
.body .leftimgtxt {
  display: flex;
  align-items: center;
  /* margin-top: 10px; */
}
.body .imgstyle {
  width: 70px ;
  height: 85px ;
  margin-left: 10px;
  /* border-radius: 2px; */
}
.body .rootstyle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  /* margin-top: 10px; */
  height: 110px;
}
.body .titlestyle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 7px;
}
.body .title {
  color: #000000c9;
  font-size: 15px;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 20px
}
/*1.5 子标题样式*/
.body .subtitle {
  color: gray;
  margin-top: 4px;
  font-size: 12px;
  margin-top: 6px;
}
</style>