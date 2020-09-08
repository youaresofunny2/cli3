<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <router-view/>
  </div>
</template>
<script>
import MainTabBar from '@/components/MainTabBar'
export default {
  name:"App",
  components:{
    MainTabBar
  },
  methods:{
    Add(){
      this.$store.commit('add')
    },
    Sub(){
      this.$store.commit('sub')
    }
  }
}
</script>
<style>
body {
  padding: 0;
  margin: 0;
}
</style>
