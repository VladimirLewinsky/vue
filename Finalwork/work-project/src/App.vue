<template>
  <div id="app">
    <HeaderComp></HeaderComp>
    <router-view></router-view>
    <FooterComp></FooterComp>
  </div>
</template>

<script>

import FooterComp from './components/nav/FooterComp.vue'
import HeaderComp from './components/nav/HeaderComp.vue'


export default {
  name: 'App',
  components: {
    FooterComp, HeaderComp, 

  }
}
</script>



<style lang="scss">
@import './assets/styles/style.css'
</style>
