<template>
	<div class="ss">
		<van-nav-bar
  :title="`${$store.getters.getEname}`"
  left-text=""
  right-text=""
  left-arrow
  @click-left="onClickLeft"
  style="font-weight:bold;"
/> 
<div class="time">
	<span style="font-size:18px;">{{$store.state.dname}}</span><br>
	<span style="font-size:10px;">今天10月22日 15:10 原版2D</span>
</div>
<div>{{$store.getters.getSi}}</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
		//影院座位的二维数组,-1为非座位，0为未购座位，1为已选座位(绿色),2为已购座位(红色)
		seatArray:[],
        //影院座位行数
        seatRow:10,
        //影院座位列数
        seatCol:20,
        //座位尺寸
        seatSize:'',
        //推荐选座最大数量
		}
	},
	methods: {
    onClickLeft() {
      this.$router.push("/Details")
	},
	}
}
</script>
<style >
.seat{
  display: block;
  display: flex;
  margin-top: 20px;
  justify-content: center
}
.unselected-seat{
    background: url('../assets/unselected.png') center center no-repeat 10 0;
    background-size: 100% 100%;
    width: 20px;
    height: 20px;
  }
.bought-seat{
    background: url('../assets/bought.png') center center no-repeat;
    background-size: 100% 100%;
    width: 20px;
    height: 20px;
  }
.selected-seat{
    background: url('../assets/selected.png') center center no-repeat;
    background-size: 100% 100%;
    width: 20px;
    height: 20px;
  } 
.screen-center{
    margin: 0 auto;
    height: 30px;
    width: 250px;
    background-color: #e3e3e3;
    border-radius: 0 0 30px 30px;
    color: #585858;
    line-height: 30px;
    text-align: center;
}
.text1 img{
	margin-left: 10px;
}
.van-col--6 {
    width: 50% !important;
}
#s3 div{
	display: inline-block;
}
#s3{
	background: #cccccc80;
	height: 500px;
	
}
.time{
	margin-top: 10px;
	margin-left:15px;
	background-color: #ffffff;
	height: 50px;
	border-bottom: 0.5px solid #f2f3f5;
	/* margin-bottom: 15px; */
}
.van-nav-bar__title {
    font-weight: bold !important;
}
.van-nav-bar .van-icon {
    color: #ef4238 !important;
}
</style>