<template>
  <div id="app">
    <!--缓存路由组件-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    <router-view name="footer-bar"></router-view>
  </div>
</template>

<script>
  // import FooterBar from '@/components/FooterBar.vue';
  export default{
    // components:{
    //   FooterBar
    // }
  }
</script>

<style lang="scss">

</style>
