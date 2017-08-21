<template>
  <div id="app">
    <!--<com-header></com-header>-->
    <!--<dashboard-preview></dashboard-preview>-->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from 'pmo-header';
// import dashboardPreview from './views/components/dashboard-preview';

export default {
  name: 'app',
  components: {
    comHeader: Header
    // dashboardPreview: dashboardPreview
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
