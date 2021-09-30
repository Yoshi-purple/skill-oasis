<template>
  <div id="app">
    <Appheader></Appheader>
    <div id="nav"></div>
    <router-view />
  </div>
</template>
<script>
import Appheader from './components/Appheader.vue';
export default {
  components: {
    Appheader,
  },
};
</script>
<style>
body {
  background-color: #eceeec;
}
</style>
