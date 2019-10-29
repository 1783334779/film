<template>
  <div class="about">
    
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="tab1" >
        <Ex></Ex>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2" >
        <dy1></dy1>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab3" >
        <Cinemas></Cinemas>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab4" >
        <my></my>
      </mt-tab-container-item>
      </mt-tab-container>
  <mt-tabbar v-model="selected">
  <mt-tab-item id="tab1" @click.native="changeState(0)">
    <t :focused="currentIndex[0].isSelect" 
          :normalImage="require('../assets/首页1.png')"
          :selectedImage="require('../assets/首页2.png')"></t>
    <!-- <img slot="icon" src="../assets/1.jpg" > -->
    <span :class="currentIndex[0].isSelect?'color1':'color2'">首页</span>
  </mt-tab-item>
  <mt-tab-item id="tab2" @click.native="changeState(1)">
     <t :focused="currentIndex[1].isSelect" 
          :normalImage="require('../assets/电影1.png')"
          :selectedImage="require('../assets/电影2.png')"></t>
    <!-- <img slot="icon" src="../assets/1.jpg"> -->
    <span :class="currentIndex[1].isSelect?'color1':'color2'">电影</span>
  </mt-tab-item>
  <mt-tab-item id="tab3" @click.native="changeState(2)">
     <t :focused="currentIndex[2].isSelect" 
          :normalImage="require('../assets/影院1.png')"
          :selectedImage="require('../assets/影院2.png')"></t>
    <!-- <img slot="icon" src="../assets/1.jpg"> -->
    <span :class="currentIndex[2].isSelect?'color1':'color2'">影院</span>
  </mt-tab-item>
  <mt-tab-item id="tab4" @click.native="changeState(3)">
     <t :focused="currentIndex[3].isSelect" 
          :normalImage="require('../assets/我的1.png')"
          :selectedImage="require('../assets/我的2.png')"></t>
    <!-- <img slot="icon" src="../assets/1.jpg"> -->
    <span :class="currentIndex[3].isSelect?'color1':'color2'">我的</span>
  </mt-tab-item>
</mt-tabbar>
  </div>
</template>
<script>
import Ex from './Ex.vue';
import t from "./t.vue";
import dy1 from "./dy1.vue";
import my from "./my.vue";
import Cinemas from "./Cinemas.vue";
export default {
  data() {
    return {
      color:{
        color:""
      },
      selected:"tab1",
      currentIndex:[
        {isSelect:true},
        {isSelect:false},
        {isSelect:false},
        {isSelect:false}
        ]
    }
  },
  methods: {
    changeState(n){
        for(var i=0;i<this.currentIndex.length;i++){
          if(n==i){
            this.currentIndex[i].isSelect=true;
          }else{
            // console.log("123")
            this.currentIndex[i].isSelect=false;
            console.log(this.currentIndex[i].isSelect)
          }
        }
        console.log(this.currentIndex[0].isSelect)
      }
      
    },
  components:{
    Ex,
    t,
    dy1,
    my,
    Cinemas
  }
}
</script>
<style >
.mint-tabbar {
    height: 41px;
}
  .color1{
     color:#ee0a24;  
  }
  .color2{
    color:#2c3e50;
  }
  .mint-tabbar{
    position: fixed;
  }
</style>
