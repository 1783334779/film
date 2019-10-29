import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      mid:1,
      si:123,
      value1: "深圳",
      value2: '深圳',
      option1: [
        { text: '深圳', value: "深圳" },
        { text: '广州', value: "广州" },
        { text: '惠州', value: "惠州" },
        { text: '东莞', value: "东莞" }
      ],
      dname:"",
      ename:"",
      setSmartChoose:[],
      price:"",
      pic:""
  },
  getters:{
    getSi(state){
      return state.si;
    },
    getDname(state){
      return state.dname;
    },
    getEname(state){
      return state.ename;
    },
    getPrice(state){
      return state.price;
    },
    getMid(state){
			return state.mid;
		},
  },
  mutations: {
    setDname(state){
      state.dname=sessionStorage.getItem("dname");
    },
    setEname(state){
      state.ename=sessionStorage.getItem("ename");
    },
    setPrice(state){
      state.price=sessionStorage.getItem("price");
    },
    changeMid(state,id){
			state.mid=id;
    },
    setPic(state){
			state.pic=sessionStorage.getItem("pic");
    },
    setSmartChoose(state){
      state.smartChoose=sessionStorage.getItem("smartChoose");
    }
  },
  actions: {

  }
})
