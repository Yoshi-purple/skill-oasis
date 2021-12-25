<template>
  <div class="container-fruid row" id="app" style="background-color: #eceeec">
    <Appheader></Appheader>
    <div id="nav"></div>
    <router-view />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
      crossorigin="anonymous"
    />
  </div>
</template>
<script>
import Appheader from './components/Appheader.vue';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['loginUser']),
  },
  mounted() {},
  created() {},

  components: {
    Appheader,
  },
  methods: {},
};
</script>
<style>
body {
  background-color: #eceeec;
}
</style>
