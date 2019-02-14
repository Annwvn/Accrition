<template>

<div class="list_cont">
    <div class="list_cont" v-for="(item,ind) in list" :key="ind">
      <h2 @click="Bind(ind)" :style="{color:item.color}">{{item.id}}</h2>
    <div class="list_conts" ref="h1">
          <p class="list_color">{{item.name}}</p>
          <Cont v-if="item.list" :list = "item.list"></Cont>
      </div>
      
    </div>
</div>
   
</template>
<script>
export default {
    name:"Cont",
    props:{
        list:Array
    },
methods: {
    Bind(id){
        
        let Dom = this.$refs.h1[id]
        if(Dom.style.height === "auto"){
            Dom.style.height = "0px"
        }else{
            Dom.style.height = "auto"
        }
    }
},
}
</script>
<style scoped>
.v-enter{
    opacity:0;
}
.v-enter-to{
    opacity:1;
}
.v-enter-active{
    transition:opacity linear 1s;
}
.v-leave{
    opacity:1;
}
.v-leave-to{
    opacity:0;
}
.v-leave-active{
    transition:opacity linear 1s;
}
.list_color{
    background: #eee;
    font-size:20px;
    line-height:60px;
    padding:0 20px;
}
.list_cont{
  width:100%;
  height:auto;
}
h2{
  background: khaki;
  height:45px;
  border:1px solid #ccc;
}
.list_conts{
    width:100%;
    height:0px;
padding-left:15px;

    transition: all 1s linear;
    overflow: hidden;
}

</style>