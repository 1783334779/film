<template>
    <div>
        <div class="head">
            <div class="fanhui" @click="back">
                <router-link to="" style="color:#fff;">&lt;</router-link>
            </div>
            <div class="yyname">
                <span style="font-size:20px;">{{yy.ename}}</span>
            </div>
            <div class="right_img">
                <router-link to=""><img src="../assets/收藏.png"></router-link>
                <router-link to=""><img src="../assets/分享.png"></router-link>
            </div>
        </div>
        <div class="zhuti">
            <div class="yyinfo">
                <div class="yyna">
                    <div class="yynal">
                        <h3 >{{yy.ename}}</h3>
                        <p>{{yy.site}}</p>
                    </div>
                    
                </div>
                <div class="yynar">
                    <p>&gt;</p> 
                </div>
            </div>
            <div class="taocan">
                <div>
                    <div>
                        <h4>观影套餐</h4>
                        <p>小吃、周边13.75元起</p>
                    </div>
                    <!-- <img src="" alt=""> -->
                </div>
                <div>
                    <h4>折扣卡</h4>
                    <p>开卡首单2张立减2元</p>
                </div>
            </div>
        </div>
        <div class="movieList" @scroll="handleScroll" ref='movielist' >
			<div ref="imglist" class="imageList" :style="{width:boxWidth+'rem',paddingLeft:boxPading+'rem',paddingRight:boxPading+'rem'}" >
				<div class="item" v-for="(item,index) of movieList" :key="index" :data-code="index">
					<div :style="{left:imgsleft[index]+'rem',top:imgstop[index]+'rem',width:imgwidth[index]+'%'}" ref="img" :data-mid="item.mid">
							<img :src="'http://127.0.0.1:4000/'+item.pic">
					</div>
						
				</div>
			</div>
				
		</div>
        <span :style="{left:spanleft+'rem'}" class="sp"></span>
		<div class="moveinfo">
			<p><span>{{movie.mname}}</span>&nbsp;<span style="color:#fa0">{{movie.score}}分</span></p>
			<p>{{movie.duration}}|{{movie.mType}}|{{movie.actor}}</p>
		</div>
		<div class="date">
			<van-tabs v-model="active">
				<van-tab title="10月28日">
					<div class="playtime">
						<div class="d1">
							<p class="p1">15:40</p>
							<p class="p2">17:55散场</p>
						</div>
						<div>
							<p class="p3">{{movie.lanType}}</p>
							<p class="p4">激光3号厅</p>
						</div>
						<div>
							<p class="p5">{{movie.mprice}}元</p>
							<span class="sp1">折扣卡</span><span class="sp2">{{movie.mprice}}元</span>
						</div>
						<div class="d2">
							<router-link to="/home" class="tonext">特惠</router-link>
						</div>
					</div>
					<div class="playtime">
						<div class="d1">
							<p class="p1">15:40</p>
							<p class="p2">17:55散场</p>
						</div>
						<div>
							<p class="p3">{{movie.lanType}}</p>
							<p class="p4">激光3号厅</p>
						</div>
						<div>
							<p class="p5">{{movie.mprice}}元</p>
							<span class="sp1">折扣卡</span><span class="sp2">{{movie.mprice}}元</span>
						</div>
						<div class="d2">
							<router-link to="/home" class="tonext">特惠</router-link>
						</div>
					</div>
					<div class="playtime">
						<div class="d1">
							<p class="p1">15:40</p>
							<p class="p2">17:55散场</p>
						</div>
						<div>
							<p class="p3">{{movie.lanType}}</p>
							<p class="p4">激光3号厅</p>
						</div>
						<div>
							<p class="p5">{{movie.mprice}}元</p>
							<span class="sp1">折扣卡</span><span class="sp2">{{movie.mprice}}元</span>
						</div>
						<div class="d2">
							<router-link to="/home" class="tonext">特惠</router-link>
						</div>
					</div>
					<div class="playtime">
						<div class="d1">
							<p class="p1">15:40</p>
							<p class="p2">17:55散场</p>
						</div>
						<div>
							<p class="p3">{{movie.lanType}}</p>
							<p class="p4">激光3号厅</p>
						</div>
						<div>
							<p class="p5">{{movie.mprice}}元</p>
							<span class="sp1">折扣卡</span><span class="sp2">{{movie.mprice}}元</span>
						</div>
						<div class="d2">
							<router-link to="/home" class="tonext">特惠</router-link>
						</div>
					</div>
					<div class="playtime">
						<div class="d1">
							<p class="p1">15:40</p>
							<p class="p2">17:55散场</p>
						</div>
						<div>
							<p class="p3">{{movie.lanType}}</p>
							<p class="p4">激光3号厅</p>
						</div>
						<div>
							<p class="p5">{{movie.mprice}}元</p>
							<span class="sp1">折扣卡</span><span class="sp2">{{movie.mprice}}元</span>
						</div>
						<div class="d2">
							<router-link to="/home" class="tonext">特惠</router-link>
						</div>
					</div>
					<div class="playtime">
						<div class="d1">
							<p class="p1">15:40</p>
							<p class="p2">17:55散场</p>
						</div>
						<div>
							<p class="p3">{{movie.lanType}}</p>
							<p class="p4">激光3号厅</p>
						</div>
						<div>
							<p class="p5">{{movie.mprice}}元</p>
							<span class="sp1">折扣卡</span><span class="sp2">{{movie.mprice}}元</span>
						</div>
						<div class="d2">
							<router-link to="/home" class="tonext">特惠</router-link>
						</div>
					</div>

				</van-tab>
				<van-tab title="10月29日">
					<div class="playtime">
						<div class="d1">
							<p class="p1">15:40</p>
							<p class="p2">17:55散场</p>
						</div>
						<div>
							<p class="p3">{{movie.lanType}}</p>
							<p class="p4">激光3号厅</p>
						</div>
						<div>
							<p class="p5">{{movie.mprice}}元</p>
							<span class="sp1">折扣卡</span><span class="sp2">{{movie.mprice}}元</span>
						</div>
						<div class="d2">
							<router-link to="/home" class="tonext">特惠</router-link>
						</div>
					</div>
					<div class="playtime">
						<div class="d1">
							<p class="p1">15:40</p>
							<p class="p2">17:55散场</p>
						</div>
						<div>
							<p class="p3">{{movie.lanType}}</p>
							<p class="p4">激光3号厅</p>
						</div>
						<div>
							<p class="p5">{{movie.mprice}}元</p>
							<span class="sp1">折扣卡</span><span class="sp2">{{movie.mprice}}元</span>
						</div>
						<div class="d2">
							<router-link to="/home" class="tonext">特惠</router-link>
						</div>
					</div>
					<div class="playtime">
						<div class="d1">
							<p class="p1">15:40</p>
							<p class="p2">17:55散场</p>
						</div>
						<div>
							<p class="p3">{{movie.lanType}}</p>
							<p class="p4">激光3号厅</p>
						</div>
						<div>
							<p class="p5">{{movie.mprice}}元</p>
							<span class="sp1">折扣卡</span><span class="sp2">{{movie.mprice}}元</span>
						</div>
						<div class="d2">
							<router-link to="/home" class="tonext">特惠</router-link>
						</div>
					</div>
					<div class="playtime">
						<div class="d1">
							<p class="p1">15:40</p>
							<p class="p2">17:55散场</p>
						</div>
						<div>
							<p class="p3">{{movie.lanType}}</p>
							<p class="p4">激光3号厅</p>
						</div>
						<div>
							<p class="p5">{{movie.mprice}}元</p>
							<span class="sp1">折扣卡</span><span class="sp2">{{movie.mprice}}元</span>
						</div>
						<div class="d2">
							<router-link to="/home" class="tonext">特惠</router-link>
						</div>
					</div>
					<div class="playtime">
						<div class="d1">
							<p class="p1">15:40</p>
							<p class="p2">17:55散场</p>
						</div>
						<div>
							<p class="p3">{{movie.lanType}}</p>
							<p class="p4">激光3号厅</p>
						</div>
						<div>
							<p class="p5">{{movie.mprice}}元</p>
							<span class="sp1">折扣卡</span><span class="sp2">{{movie.mprice}}元</span>
						</div>
						<div class="d2">
							<router-link to="/home" class="tonext">特惠</router-link>
						</div>
					</div>
				</van-tab>
				<van-tab title="10月30日">
					<div class="playtime">
						<div class="d1">
							<p class="p1">15:40</p>
							<p class="p2">17:55散场</p>
						</div>
						<div>
							<p class="p3">{{movie.lanType}}</p>
							<p class="p4">激光3号厅</p>
						</div>
						<div>
							<p class="p5">{{movie.mprice}}元</p>
							<span class="sp1">折扣卡</span><span class="sp2">{{movie.mprice}}元</span>
						</div>
						<div class="d2">
							<router-link to="/home" class="tonext">特惠</router-link>
						</div>
					</div>
					<div class="playtime">
						<div class="d1">
							<p class="p1">15:40</p>
							<p class="p2">17:55散场</p>
						</div>
						<div>
							<p class="p3">{{movie.lanType}}</p>
							<p class="p4">激光3号厅</p>
						</div>
						<div>
							<p class="p5">{{movie.mprice}}元</p>
							<span class="sp1">折扣卡</span><span class="sp2">{{movie.mprice}}元</span>
						</div>
						<div class="d2">
							<router-link to="/home" class="tonext">特惠</router-link>
						</div>
					</div>
					<div class="playtime">
						<div class="d1">
							<p class="p1">15:40</p>
							<p class="p2">17:55散场</p>
						</div>
						<div>
							<p class="p3">{{movie.lanType}}</p>
							<p class="p4">激光3号厅</p>
						</div>
						<div>
							<p class="p5">{{movie.mprice}}元</p>
							<span class="sp1">折扣卡</span><span class="sp2">{{movie.mprice}}元</span>
						</div>
						<div class="d2">
							<router-link to="/home" class="tonext">特惠</router-link>
						</div>
					</div>
					<div class="playtime">
						<div class="d1">
							<p class="p1">15:40</p>
							<p class="p2">17:55散场</p>
						</div>
						<div>
							<p class="p3">{{movie.lanType}}</p>
							<p class="p4">激光3号厅</p>
						</div>
						<div>
							<p class="p5">{{movie.mprice}}元</p>
							<span class="sp1">折扣卡</span><span class="sp2">{{movie.mprice}}元</span>
						</div>
						<div class="d2">
							<router-link to="/home" class="tonext">特惠</router-link>
						</div>
					</div>
					<div class="playtime">
						<div class="d1">
							<p class="p1">15:40</p>
							<p class="p2">17:55散场</p>
						</div>
						<div>
							<p class="p3">{{movie.lanType}}</p>
							<p class="p4">激光3号厅</p>
						</div>
						<div>
							<p class="p5">{{movie.mprice}}元</p>
							<span class="sp1">折扣卡</span><span class="sp2">{{movie.mprice}}元</span>
						</div>
						<div class="d2">
							<router-link to="/home" class="tonext">特惠</router-link>
						</div>
					</div>

				</van-tab>
				<van-tab title="10月31日">
					<div class="playtime">
						<div class="d1">
							<p class="p1">15:40</p>
							<p class="p2">17:55散场</p>
						</div>
						<div>
							<p class="p3">{{movie.lanType}}</p>
							<p class="p4">激光3号厅</p>
						</div>
						<div>
							<p class="p5">{{movie.mprice}}元</p>
							<span class="sp1">折扣卡</span><span class="sp2">{{movie.mprice}}元</span>
						</div>
						<div class="d2">
							<router-link to="/home" class="tonext">特惠</router-link>
						</div>
					</div>
					<div class="playtime">
						<div class="d1">
							<p class="p1">15:40</p>
							<p class="p2">17:55散场</p>
						</div>
						<div>
							<p class="p3">{{movie.lanType}}</p>
							<p class="p4">激光3号厅</p>
						</div>
						<div>
							<p class="p5">{{movie.mprice}}元</p>
							<span class="sp1">折扣卡</span><span class="sp2">{{movie.mprice}}元</span>
						</div>
						<div class="d2">
							<router-link to="/home" class="tonext">特惠</router-link>
						</div>
					</div>
					<div class="playtime">
						<div class="d1">
							<p class="p1">15:40</p>
							<p class="p2">17:55散场</p>
						</div>
						<div>
							<p class="p3">{{movie.lanType}}</p>
							<p class="p4">激光3号厅</p>
						</div>
						<div>
							<p class="p5">{{movie.mprice}}元</p>
							<span class="sp1">折扣卡</span><span class="sp2">{{movie.mprice}}元</span>
						</div>
						<div class="d2">
							<router-link to="/home" class="tonext">特惠</router-link>
						</div>
					</div>
					<div class="playtime">
						<div class="d1">
							<p class="p1">15:40</p>
							<p class="p2">17:55散场</p>
						</div>
						<div>
							<p class="p3">{{movie.lanType}}</p>
							<p class="p4">激光3号厅</p>
						</div>
						<div>
							<p class="p5">{{movie.mprice}}元</p>
							<span class="sp1">折扣卡</span><span class="sp2">{{movie.mprice}}元</span>
						</div>
						<div class="d2">
							<router-link to="/home" class="tonext">特惠</router-link>
						</div>
					</div>
				</van-tab>
			</van-tabs>
		</div>
    </div>
</template>
<script>
	let interval=null;
	let leftValue=0;
export default {
    data(){
        return {
			 active: 0,
			isloaded:0,
				// mid:this.theMid,
			MovieL:[],
				// hall:hall,
			movieList:[],
				//三角图标的left
			spanleft:(window.innerWidth)/32-0.8,
			winWidth:window.innerWidth,
				//图片元素的宽度比
				// imgswidth:0.8,
			imgsleft:[0.3,0.7,0.7,0.7,0.7,0.7,0.7,0.7,0.7,0.7,0.7,0.7,0.7,0.7,0.7,0.7],
			imgstop:[0.4636,1.03,1.03,1.03,1.03,1.03,1.03,1.03,1.03,1.03,1.03,1.03,1.03,1.03,1.03],
			imgwidth:[90,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80],
			yy:{},
			movie:{}
        }
    },
    props:["eid"],
    created(){
		
        this.getcinema();
		this.getmovielist();
		this.getmovie();
    },
    methods:{
        getcinema(){
            var eid=this.eid;
            this.axios.get("movilist",{params:{eid}})
            .then(res=>{
                console.log(res)
				this.yy=res.data.data[0]
				sessionStorage.setItem( "ename", res.data.data[0].ename);
				this.$store.commit("setEname");
            })
        },
        getmovielist(){
            this.axios.get("film")
            .then(res=>{
                console.log(res.data.slice(0,14))
                this.movieList=res.data.slice(0,14);
                this.isloaded=1;
            })
		},
		getmovie(){
			this.axios.get("movie",{params:{mid:this.$store.getters.getMid}}).then(res=>{
				console.log(res.data[0]);
				this.movie=res.data[0];
				sessionStorage.setItem( "dname", res.data[0].mname);
				sessionStorage.setItem("price",res.data[0].mprice);
				  sessionStorage.setItem("pic",res.data[0].pic);
				this.$store.commit("setPic");				  
				this.$store.commit("setPrice");
				this.$store.commit("setDname");
			})
		},
        back(){
            this.$router.back();
        },
        setImgsItem(arrleft,arrtop,arrwidth,n){
				for(let i=0;i<arrleft.length;i++){
					this.$set(arrleft,i,0.7);
					this.$set(arrtop,i,1.03);
					this.$set(arrwidth,i,80);
				}
				this.$set(arrleft,n,0.3);
				this.$set(arrtop,n,0.4636);
				this.$set(arrwidth,n,90);
				
			},
		handleScroll(e){
				
				// console.log(this.$refs.imglist.offsetX)
				leftValue=e.target.scrollLeft;
				
				if(interval==null){
					interval=setInterval(()=>{
						if(e.target.scrollLeft==leftValue){
							
							if(leftValue>=0&&leftValue<46){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=0;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,0);
								//改变data中的mid
								// console.log(this.$refs.img[0].getAttribute('data-mid'));
								let mid=this.$refs.img[0].getAttribute('data-mid');

								this.$store.commit('changeMid',mid);
								//想一下办法怎么让数据请求过来之后再将img绑定到refs中
								
							}else if(leftValue>=46&&leftValue<144){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=96;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,1);
								let mid=this.$refs.img[1].getAttribute('data-mid');
								this.$store.commit('changeMid',mid);
							}else if(leftValue>=144&&leftValue<240){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=190;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,2);
								let mid=this.$refs.img[2].getAttribute('data-mid');
								this.$store.commit('changeMid',mid);
							}else if(leftValue>=240&&leftValue<336){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=288;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,3);
								let mid=this.$refs.img[3].getAttribute('data-mid');
								this.$store.commit('changeMid',mid);
							}else if(leftValue>=336&&leftValue<432){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=384;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,4);
								let mid=this.$refs.img[4].getAttribute('data-mid');
								this.$store.commit('changeMid',mid);
							}else if(leftValue>=432&&leftValue<528){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=480;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,5);
								let mid=this.$refs.img[5].getAttribute('data-mid');
								this.$store.commit('changeMid',mid);
							}else if(leftValue>=528&&leftValue<624){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=576;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,6);
								let mid=this.$refs.img[6].getAttribute('data-mid');
								this.$store.commit('changeMid',mid);
							}else if(leftValue>=624&&leftValue<720){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=672;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,7);
								let mid=this.$refs.img[7].getAttribute('data-mid');
								this.$store.commit('changeMid',mid);
							}else if(leftValue>=720&&leftValue<816){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=768;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,8);
								let mid=this.$refs.img[8].getAttribute('data-mid');
								this.$store.commit('changeMid',mid);
							}
							else if(leftValue>=816&&leftValue<912){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=864;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,9);
								let mid=this.$refs.img[9].getAttribute('data-mid');
								this.$store.commit('changeMid',mid);
								
							}
							else if(leftValue>=912&&leftValue<1008){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=960;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,10);
								let mid=this.$refs.img[10].getAttribute('data-mid');
								this.$store.commit('changeMid',mid);
								
							}
							else if(leftValue>=1008&&leftValue<1104){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=1056;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,11);
								let mid=this.$refs.img[11].getAttribute('data-mid');
								this.$store.commit('changeMid',mid);
								
							}
							else if(leftValue>=1104&&leftValue<1200){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=1152;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,12);
								let mid=this.$refs.img[12].getAttribute('data-mid');
								this.$store.commit('changeMid',mid);
								
							}
							else if(leftValue>=1200&&leftValue<1296){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=1248;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,13);
								let mid=this.$refs.img[13].getAttribute('data-mid');
								this.$store.commit('changeMid',mid);
							}else{
								e.target.scrollLeft=1248;
							}
							
						}
					},300);
					
				}
				
			},
				
    },
    computed:{
			// 图片滑动栏的宽
			boxWidth(){
				return this.movieList.length*8;
			},
			//图片滑动栏左右内边距
			
			boxPading(){
				return ((window.innerWidth/12)*0.5-4);
			},
			 listData() {
				return this.$store.state.mid;
				}	
    },
    mounted(){
			
			this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,this.$store.getters.getMid-1)
		},
		watch:{
			
			movieList(val,oldval){},
			listData(){
				this.getmovie();
			}
		},
		//update在页面每次更新数据之后执行，axios中请求的数据过来后，data中的数据更新，所以会触发下面的函数
		updated(){
			this.$refs.movielist.scrollLeft=96*(this.$store.getters.getMid-1);
		}
}
</script>
<style scoped>
    .head{
        width:100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position:fixed;
        top:0;
        left:0;
        background-color: #f63939;
        font-size:20px;
        
    }
    .fanhui{
        width: 20%;
        text-align: left;
        margin-left: 10px;
        font-size:25px; 
    }
    .yyname{
        width:60%;
        color:#fff;
        font-size:22px
    }
    .right_img{
        width:20%;
        display: flex;
        justify-content: space-between;
        padding-right: 10px;
        align-items: center;
    }
    .right_img img{
        width: 20px;
    }
    .zhuti{
        margin-top:40px;
        display: flex;
        flex-direction:column;
        
    }
    .yyinfo{
        display: flex;
        justify-content: space-between;
        align-items: center
    }
    .yyna{
        width: 85%;
        text-align: left;
        padding:10px; 
    }
    .yynar{
        width: 15%;
        margin-right: 0;
    }
    .taocan{
        display:flex;
        justify-content: space-between
    }
    .taocan>div{
        border:1px solid #ccc;
        margin: 10px;
        width: 50%;
        color:rgb(73, 94, 64);
        padding-left: 5px;
        background-color:burlywood;
        text-align: left;
    }
    .movieList{
		background-color:teal;
		margin-top: 0.5rem;
		width:100%;
		padding: 1rem 0 1rem 0 ;
		overflow-x:scroll;
		position: relative;
	}
	.sp{
		display: inline-block;
		position: absolute;
		border-left: 1rem solid transparent;
		border-right: 1rem solid transparent;
		border-bottom: 1rem solid white;
		top: 26.5rem;
	}
	.movieList>.imageList{
		margin-left:-3rem; 
		overflow: hidden;
	}
	.movieList>.imageList>.item{
		width: 6rem;
		height:8rem;
		float: left;
		margin:0;
		position: relative;
	}
	.movieList>.imageList>.item>div{
		
		border: 0.1rem solid white;
		position: absolute;
		
		/* 要减去边框的1像素 */
	}
	.movieList>.imageList>.item img{
		width: 100%;
	}
	.moveinfo{
		font-size: 16px;
		color:#666;
		text-align: center !important;
	}
	.playtime{
		width: 100%;
		height:80px;
		display: flex;
		border-bottom:1px solid #aaa;
		justify-content: space-between;
		align-items: center;
		
	}
	.d1{
		margin-left: 10px;
	}
	.d2{
		margin-right: 10px;
	}
	.p1{
		font-size: 18px;
		font-weight: bold;
		color:black;
	}
	.p2,.p4{
		font-size: 12px;
	}
	.p3{
		font-size: 14px;
		color:black;
	}
	.p5{
		font-size: 15px;
		color:chocolate;
	}
	.sp1{
		background: chocolate;
		border: 1px solid chocolate;
		color: #fff;
		font-size: 10px;
		padding: 2px;
	}
	.sp2{
		font-size: 10px;
		border: 1px solid chocolate;
		padding: 2px;
	}
	.tonext{
		border:1px solid chocolate;
		border-radius: 20px;
		padding:3px 10px; 
		color: chocolate;
		font-size: 14px;
	}
</style>
<style>
	div.van-tabs__line {
    	width: 50px !important;
	}
</style>