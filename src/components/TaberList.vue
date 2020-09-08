<template>
    <div class="tabar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>   
      <div v-else><slot name="item-icon-active"></slot></div> 
      <div :style="activeStyle"><slot name="item-text"></slot></div> 
    </div>
</template>

<script>

export default {
  name: 'TaberList',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  computed:{
    isActive(){
     return this.$route.path.indexOf(this.path) !== -1 //$route 活跃路由属性 利用活跃路由的路径来判断是否添加clas属性
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  },
  data() {
    return {
      
    }
  },
}
</script>
<style  scoped>
.tabar-item {
  flex:1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tabar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
}
</style>
