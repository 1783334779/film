<template>
  <div class="wrapper">
    
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
    <div class="cinema-wrapper">
      
      <div class="seat-wrapper">
        <div class="illustration" style="z-index:1">
          <div class="illustration-img-wrapper unselected-seat">
          </div>
          <span class="illustration-text">可选</span>
          <div class="illustration-img-wrapper selected-seat">
          </div>
          <span class="illustration-text">已选</span>
          <div class="illustration-img-wrapper bought-seat">
          </div>
          <span class="illustration-text">不可选</span>
        </div>
        <div class="screen">
          3号激光厅银幕
        </div>
        <div class="screen-center">
          银幕中央
          <div class="mid-line"></div>
        </div>
        <div class="inner-seat-wrapper" ref="innerSeatWrapper" >
          <div v-for="(row,index) in seatRow" :key="index">
            <!--这里的v-if很重要，如果没有则会导致报错，因为seatArray初始状态为空-->
            <div v-for="(col,x) in seatCol" :key="x"
                 v-if="seatArray.length>0"
                 class="seat"
                 style="width:17.5px;height:17.5px"
                >
              <div class="inner-seat"
                   @click="handleChooseSeat(row-1,col-1,row,col)"
                   v-if="seatArray[row-1][col-1]!==-1"
                   :class="seatArray[row-1][col-1]===2?'bought-seat':(seatArray[row-1][col-1]===1?'selected-seat':'unselected-seat')">
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <!-- <div class="s1" >
      <div><span id="io">{{smartChoose2+"行"+smartChoose2+"列"}}</span></div>
    </div> -->
    <div class="s1">
			<div  v-for="(p,i) of smartChoose" :key="i">
        <p class="p">{{p[0]}}排{{p[1]}}座&nbsp;<span @click="del" :data-i="i">x</span></p>
        <!-- <p class="p">{{smartChoose[0]}}排{{smartChoose[0+1]}}座</p> -->
      </div>
		</div>
    <div @click="skip">
    <van-button type="primary" size="large"   :disabled="disabled" class="pay" >确认订单</van-button>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'cinemaSeatChoose',
		data () {
			return {
				//影院座位的二维数组,-1为非座位，0为未购座位，1为已选座位(绿色),2为已购座位(红色)
				seatArray:[],
        //影院座位行数
        seatRow:8,
        //影院座位列数
        seatCol:20,
        //座位尺寸
        seatSize:'',
        //座位数组
        smartChoose:[],
        row:[],
        col:[],
        disabled:true
			}
		},
    computed:{
    },
    methods:{
      skip(){
      // console.log(this.code=sessionStorage.getItem("code"))
      if(this.code=sessionStorage.getItem("code")==1){
        var user = {sm:this.smartChoose};
           console.log(user)
        sessionStorage.setItem("smartChoose",JSON.stringify(user))
        this.$store.commit("setSmartChoose");
        var a=JSON.parse(this.$store.state.smartChoose);
         this.$router.push("close")
      }else{
        this.$messagebox.confirm("你还未登录是否登录").then(action=>{
         this.$router.push("login");
        }).catch(err=>{

        })
        
      }      
        
        
      },
      onClickLeft() {
      this.$router.push("/Details")
  },
  del(e){
      var r=this.row.splice(-1)
      var c=this.col.splice(-1);
     this.smartChoose.splice(-1);
     this.seatArray[r][c]=0;
     
  },
			// 选定且购买座位
      buySeat: function(){
      	//遍历seatArray，将值为1的座位变为2
        let oldArray = this.seatArray.slice();
        for(let i=0;i<this.seatRow;i++){
        	for(let j=0;j<this.seatCol;j++){
        		if(oldArray[i][j]===1){
              oldArray[i][j]=2
            }
          }
        }
        this.seatArray = oldArray;
      },
			//处理座位选择逻辑
      handleChooseSeat: function(row,col,r,c){
      	let seatValue = this.seatArray[row][col];
      	let newArray = this.seatArray;
        var sum=0;
        // console.log(sum)
        console.log(this.seatArray[row][col])
        
        let oldArray = this.seatArray.slice();
        for(let i=0;i<this.seatRow;i++){
        	for(let j=0;j<this.seatCol;j++){
              if(oldArray[i][j]==1){
                sum++;
              if(sum==5 && this.seatArray[row][col]==1){
          console.log(666)
          --sum;
          newArray[row][col]=0
          this.smartChoose.splice(-0,1)
          this.row.splice(-2)
          this.col.splice(-2)
          return;
        }
              if(sum==5){
                newArray[i][j]==0;
                this.$toast('座位选择不能超过5个');
                return;
                break;
              }
              }
          }
        }
        this.row.push(row);
        this.col.push(col);
      	//如果是已购座位，直接返回
        if(seatValue===2) return;
        //如果是已选座位点击后变未选
        if(seatValue === 1){
          console.log(1)
          newArray[row][col]=0
          this.smartChoose.splice(-0,1)
          this.row.splice(-2)
          this.col.splice(-2)       
        } 
        if(seatValue === 0){
          // console.log(2)
          newArray[row][col]=1
           this.smartChoose.push([r,c])
          }
        if(this.row.length>0){
          this.disabled=false;
        }else{
          this.disabled=true;
        }
        //必须整体更新二维数组，Vue无法检测到数组某一项更新,必须slice复制一个数组才行
        this.seatArray = newArray.slice();
        console.log(this.smartChoose)

        
      },
      //初始座位数组
      initSeatArray: function(){
        let seatArray = Array(this.seatRow).fill(0).map(()=>Array(this.seatCol).fill(0));
        this.seatArray = seatArray;
        // console.log(this.seatArray)
        // console.log(Array(this.seatRow))
        // console.log(this.$refs.innerSeatWrapper);
        // console.log(parseInt(parseInt(window.getComputedStyle(this.$refs.inne rSeatWrapper).width,10) / this.seatCol,10))
        //初始化不是座位的地方
        this.initNonSeatPlace();
      },
      //初始化不是座位的地方
      initNonSeatPlace: function(){
      	for(let i=0;i<8;i++){
          this.seatArray[i][0]=0;
        }
        for(let i=0;i<7;i++){
          this.seatArray[i][this.seatArray[0].length]=-1;
          this.seatArray[i][this.seatArray[0].length]=-1;
        }
        for(let i=0;i<7;i++){
          this.seatArray[i][this.seatArray[0].length]=-1;
        }
        for(let i=0;i<this.seatArray[0].length;i++){
        	this.seatArray[2][i]=-1;
        }
      }
    },
    mounted:function(){
      this.initSeatArray(10,20);
    }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper .pay{
    background-color:#ff9e05 !important;
    border: 1px solid #ff9e05 !important;
}
.wrapper .p{
  float: left;
  border: 1px solid #ccc;
  margin-left: 10px;
  line-height: 28px;
}
.wrapper p {
    display: inline-block;
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
        margin-top: 15px;
}
.wrapper .s1{
    background: #fff;
    width: 100%;
    height: 58px;
}
  .wrapper{
    height:100%;
    /* padding: 40px; */
    box-sizing: border-box;
  }
.wrapper  .cinema-wrapper{
    height:100%;
    background: #f2f1f6;
  }
 .wrapper .title{
    text-align: center;
  }
 .wrapper .seat-wrapper{
    height:520px;
    width: 350px;
    /* border:1px dotted #c5c5c5; */
    margin: 0 auto;
    position: relative;
    overflow: hidden;
  }
 .wrapper .screen{
    margin: 0 auto;
    height:30px;
    width:300px;
    background-color: #e3e3e3;
    border-radius: 0 0 30px 30px;
    color: #585858;
    line-height: 30px;
    text-align: center;
  }
 .wrapper .inner-seat-wrapper{
    position: absolute;
    top:120px;
    left: 0px;
    bottom:0;
    width:100%;
    box-sizing: border-box;
    background: #f2f1f6;
  }
 .wrapper .seat{
    float:left;
    display: flex;
    justify-content: center;
    align-items: center;
   
  }
  .wrapper .inner-seat{
    width:80%;
    height:80%;
    cursor: pointer;
  }
 .wrapper .selected-seat{
    background: url('./../assets/selected.png') center center no-repeat;
    background-size: 100% 100%;
  }
.wrapper  .unselected-seat{
    background: url('./../assets/座位 (6).png') center center no-repeat;
    background-size: 100% 100%;
  }
 .wrapper .bought-seat{
    background: url('./../assets/bought.png') center center no-repeat;
    background-size: 100% 100%;
  }
 .wrapper .screen-center{
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    padding:5px;
    font-size: 13px;
    border-radius: 5px;
    top:50px;
    background-color: #f6f6f6;
    color: #636363;
    border:1px solid #b1b1b1;
  }
.wrapper  .mid-line{
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    top:100%;
    width:1px;
    height:800px;
    border-left:1px dashed #919191;
  }
  .wrapper .btn-wrapper{
    margin: 20px auto;
    width:1000px;
    height:30px;
    text-align: center;
  }
 .wrapper .btn-buy{
    height:100%;
    line-height: 30px;
    font-size: 14px;
    border-radius: 5px;
    padding:0 5px;
    background-color: #ffa349;
    color: #ffffff;
    display: inline-block;
    cursor: pointer;
    margin-right: 10px;
  }
 .wrapper  .smart{
    background-color: #39ac6a;
  }
 .wrapper .illustration{
    position: absolute;
    left: 65px;
    top: 470px;
    height:35px;
    width:300px;
  }
.wrapper  .illustration-img-wrapper{
    width:25px;
    height:25px;
    position: relative;
    top:50%;
    display: inline-block;
    transform: translateY(-50%);
    margin-left: 10px;
  }
.wrapper  .illustration-text{
    display: inline-block;
    height:100%;
    line-height: 35px;
    font-size: 14px;
    position: relative;
    top:-2px;
  }

</style>

