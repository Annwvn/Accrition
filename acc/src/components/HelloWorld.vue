<template>
  <div class="list_list">
    <Cont :list = "dat"></Cont>
    <!-- <div class="list_cont" v-for="(item,ind) in dat" :key="ind">
      <h1 @click="Bind(ind)">{{item.id}}</h1>
      <div class="list_conts" ref="conts">
        <div v-for="(ele,index) in item.list" :key="index">
            <p>{{ele.name}}</p>
        </div>
    </div> -->
    <!-- </div> -->
  </div>
</template>
<script>
import Cont from './Cont'
import fetchs from 'data/async.js'
export default {
  props:{

  },
  components:{
    Cont
  },
  data(){
    return {
      dat :[]
    }
  },
  methods: {
    Bind(id){
      let Dom = this.$refs.conts[id]
      if(Dom.style.height === "280px"){
        Dom.style.height = "0px"
      }else{
        Dom.style.height = "280px"
      }
    }
  },
  mounted(){
    fetchs('/list').then(res=>{
      this.dat = res
      console.log(res);
      
    }).catch(err=>{
        console.log(err);
    }) 
  }
}
</script>
<style scoped>
.list_list{
  width:100%;
  height:auto;

}
.list_cont{
  width:100%;
  height:auto;
}
h1{
  background: khaki;

}
.list_conts{
    width:100%;
    height:0px;
    overflow: hidden;
    background: palevioletred;
    transition: all 1s linear;
}
p{
    height:60px;
}
</style>