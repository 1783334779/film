<template class="body">
    <div class="close">
        <van-nav-bar
  title="支付订单"
  left-arrow
  @click-left="onClickLeft"
/>
<div class="ctime">
 <van-count-down
  :time="time"
  format="支付剩余时间：mm 分 ss 秒"
  class="timetext"
/>

<div style="margin-top:15px;margin-left:15px;">
    <span class="title1">{{$store.state.dname}}</span><br>
    <span class="title2">今天10月27日 12:25(国语2D)</span><br>
    <span class="title3">{{$store.state.ename}}</span><br>
    <div class="">
			<div  v-for="(p,i) of sm" :key="i" style="float:left" >
        <span class="title4">{{p[0]}}排{{p[1]}}座&nbsp;</span>
        <!-- <p class="p">{{smartChoose[0]}}排{{smartChoose[0+1]}}座</p> -->
      </div>
	</div><br><van-divider />
    <div style="font-size:15px;">
    <div class="subtext">
        <span>活动与抵用券</span>
        <div><span>无可用&nbsp;<span class="arrow"></span>&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        
    </div>
    <van-divider />

    <div class="subtext">
        <span>手机号码</span>
        <span>13169574561&nbsp;&nbsp;&nbsp;&nbsp;</span>
    </div>
    <van-divider />

    <div class="subtext">
        <span>小计</span>
        <span class="d" style="color:#ef4238">￥<span class="pri1">{{price.toFixed(2)}}&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
    </div>
    <van-divider />
    </div>
</div>
<div style="width:100%;height:15px;background:#f0f0f0;margin-top:-16px;"></div>
<div class="discounts">
    <div>
    <img src="../assets/VIP.png" alt="" class="img1">&nbsp;&nbsp;&nbsp;
    <div class="img_text">
    <span>{{$store.state.ename}}</span><span style="font-style: normal;
    color: #999;">(9.9元/季度)</span><br>
    <span style="font-style: normal;
    color: #999;">开卡本单立减6元,查看详情</span>
    </div>
    </div>
    <div>
        <van-switch v-model="checked" size="25px"  active-color="#07c160" style="margin-top:10px;margin-right:15px;"/>
    </div>
</div><br>
<div style="width:100%;height:15px;background:#f0f0f0;margin-top:-16px;"></div>
<div class="snack">
    <div class="snackTitle"><span>观影标配</span></div>
    <van-divider style="margin:10px"/>
</div>
<div class="rootstyle" >
      <div class="leftimgtxt">
        <img src="../assets/爆米花.jpg" class="imgstyle" />
        <div class="titlestyle">
            <div class="cname">
                <span class="personNum">双人</span> &nbsp;&nbsp;&nbsp;16oz可乐2杯+32oz爆米花1桶
            </div><br>
            <div class="pri">
                <div><span style="color: #f03d37;font-size: 17px;">￥27</span > &nbsp;<span class="p-yet">￥<span>45</span></span></div>
                <div style="float:right;margin-right:15px;">
                    <!-- <img src="../assets/减号1.png" alt=""> -->
                    <span class="jianimg"></span>
                    <span class="num">0</span>
                    <span class="jiaimg"></span>
                    <!-- <img src="../assets/加号2.png" alt="" > -->
                </div>
            </div>
        </div>
      </div>
    </div>
    <div class="rootstyle" >
      <div class="leftimgtxt">
        <img src="../assets/爆米花.jpg" class="imgstyle" />
        <div class="titlestyle">
            <div class="cname">
                <span class="personNum">双人</span> &nbsp;&nbsp;&nbsp;16oz可乐2杯+32oz爆米花1桶
            </div><br>
            <div class="pri">
                <div><span style="color: #f03d37;font-size: 17px;">￥27</span > &nbsp;<span class="p-yet">￥<span>45</span></span></div>
                <div style="float:right;margin-right:15px;">
                    <!-- <img src="../assets/减号1.png" alt=""> -->
                    <span class="jianimg"></span>
                    <span class="num">0</span>
                    <span class="jiaimg"></span>
                    <!-- <img src="../assets/加号2.png" alt="" > -->
                </div>
            </div>
        </div>
      </div>
    </div>
    <div class="rootstyle" >
      <div class="leftimgtxt">
        <img src="../assets/爆米花.jpg" class="imgstyle" />
        <div class="titlestyle">
            <div class="cname">
                <span class="personNum">双人</span> &nbsp;&nbsp;&nbsp;16oz可乐2杯+32oz爆米花1桶
            </div><br>
            <div class="pri">
                <div><span style="color: #f03d37;font-size: 17px;">￥27</span > &nbsp;<span class="p-yet">￥<span>45</span></span></div>
                <div style="float:right;margin-right:15px;">
                    <!-- <img src="../assets/减号1.png" alt=""> -->
                    <span class="jianimg"></span>
                    <span class="num">0</span>
                    <span class="jiaimg"></span>
                    <!-- <img src="../assets/加号2.png" alt="" > -->
                </div>
            </div>
        </div>
      </div>
    </div>
    <div class="anniu">
        <div class="antext"> 
            <div class="re">
                <span style="color:#999">不支持退票、改签</span>&nbsp;&nbsp;
                <span class="arrow1"></span>
            </div>
            <div class="re1">
                <span class="also">应付</span>
                <span class="d">￥</span>
                <span class="pri1">{{price.toFixed(2)}}</span>&nbsp;&nbsp;&nbsp;
                <span class="arrow1"></span>
            </div>
        </div>
        <van-button type="primary" size="large" class="pay" to="result">确认支付</van-button>
    </div>
</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            time:15 * 60 * 1000,
            checked: false,
            sm:[],
            price:""
        }
    },
    methods: {
        onClickLeft(){
            this.$router.push("Home");
            
        }
    },
    created() {
        var a=JSON.parse(this.$store.state.smartChoose)
        console.log(a.sm)
        for(var i=0;i<a.sm.length;i++){
            this.sm[i]=a.sm[i]
        }
        // this.sm=a.sm;
        console.log(this.sm)
         this.price=this.$store.state.price*a.sm.length;
         console.log(this.price)
    },
}
</script>
<style>
.s1{
    width: 100%;
}
.close .pay{
    background-color:#ff9e05 !important;
    border: 1px solid #ff9e05 !important;
    border-radius: 5px !important;
}
.close .d{
        font-size: 13px;
}
.close .pri1{
        font-size: 21px;
    color: #ef4238;
}
.close .also {
    font-weight: 400;
    color: #333;
    font-size: 14px;
}
.close .arrow1{
    width: 8px;
    height: 8px;
    margin-left: -2px;
    border: 1px solid #ccc;
    transform: rotate(-45deg);
    border-left: none;
    border-bottom: none;
    position: relative;
    left: -2px;
}
.close .re{
    margin-left: 15px;
    padding: 12px 0 6px;
}
.close .re1{
    margin-right: 15px;
    padding: 12px 0 6px;
}
 .close .antext{
    display: flex;
    justify-content: space-between;
    
}
.close .anniu{
    position:fixed;
    background-color:#fff; 
    height:100px;
    width:100%;
    bottom:0px;
    border-top: 0.5px solid #f0f0f0;
    font-size: 13px;
}
.close .p-yet {
    color: #999;
    text-decoration: line-through;
    font-size: 12px;
}
.close .cname{
    margin-top: 20px;
}
 .close .jiaimg{
    background-image: url('../assets/加号2.png');
    background-size: 100% 100%;
    border-radius: 50%;
    width: 25px;
    height: 25px;
}
.close .jianimg{
    background-image: url('../assets/减号1.png');
    background-size: 100% 100%;
    border-radius: 50%;
    width: 25px;
    height: 25px;
}
.close .num {
    height: 25px;
    line-height: 10px;
    width: 32px;
    text-align: center;
    vertical-align: middle;
    /* background-image: url('../assets/减号1.png'); */
}
.close .pri{
    display: flex;
    justify-content:space-between;
    margin-top: 30px;
}
.close .imgstyle {
  width: 95px ;
  height: 95px ;
  margin-left: 10px;
  /* border-radius: 2px; */
}
.close .leftimgtxt {
  width: 100%;
  display: flex;
  align-items: center;
  /* margin-top: 10px; */
}
.close .rootstyle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  /* margin-top: 10px; */
  height: 110px;
}
.close .titlestyle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 7px;
  width: 100%;

}
.close .personNum {
    background: #f90;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    width: 24px;
    height: 16px;
    padding: 1px 4px;
    border-radius: 2px;
    /* position: relative; */
    top: -1px;
}
/*1.5 子标题样式*/
.close .subtitle {
  color: gray;
  margin-top: 4px;
  font-size: 12px;
  margin-top: 6px;
}
   .close .snackTitle{
        margin-top: 10px;
        margin-left: 15px;
    }
   .close .snack{
        font-size: 15px;
    }
   .close .discounts{
        margin-left: 15px;
        display: flex;
        justify-content: space-between;
    }
   .close .img_text{
        display: inline-block;
        margin-top: 10px;
        font-size:15px;
    }
    .close .img1{
        width: 30px;
        height: 30px;
        padding: 0;
    }
 .body{background: #ccc}
  .close  .arrow{
    width: 8px;
    height: 8px;
    margin-left: -2px;
    border: 1px solid #ccc;
    transform: rotate(-45deg);
    border-left: none;
    border-top: none;
    position: relative;
    left: -2px;
}
    
 .close   .subtext{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    /* .close{background:#CCC;height: 1000px;} */
  .close span{display: inline-block}
  .close .ctime{
        width: 100%;
        height: 40px;
        background: #fffbe8;
    }
    .close .timetext{
        text-align: center;
        line-height: 40px !important;
    }
    .close .title1{
        font-size: 16px;
    }
    .close .title2{
        color: #f34d41;
        margin-top: 10px;
        font-size: 14px;
    }
    .close .title3{
        margin-top: 15px;
        font-size: 14px;
    }
    .close .title4{
        margin-top: 15px;
        font-size: 14px;
    }
</style>