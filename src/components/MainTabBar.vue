<template>
     <Taber>
      <taber-list path="/home" activeColor="green">
        <img slot="item-icon" src="../assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </taber-list>
      <taber-list path="/cate" activeColor="green">
        <img slot="item-icon" src="../assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </taber-list>
      <taber-list path="/cart" activeColor="green">
        <img slot="item-icon" src="../assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </taber-list>
      <taber-list path="/profile" activeColor="green">
        <img slot="item-icon" src="../assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar//profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </taber-list>
      </Taber> 
</template>
<script>
import Taber from './Taber'
import TaberList from './TaberList'
export default {
 name: '',
 components:{
         Taber,
    TaberList
 }
}
</script>


<style  scoped>

</style>