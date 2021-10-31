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

import { Auth } from 'aws-amplify';
export default {
  computed: {
    ...mapGetters(['loginUser']),
  },
  created() {
    try {
      this.isUserSignedIn();
    } catch (error) {
      console.log(error);
    }
  },

  components: {
    Appheader,
  },
  methods: {
    async isUserSignedIn() {
      try {
        const userObj = await Auth.currentAuthenticatedUser();
        this.signedIn = true;
        this.$store.commit('setLoginUser', {
          userName: userObj.attributes.name,
          email: userObj.attributes.email,
        });
        console.log(userObj);
      } catch (err) {
        this.signedIn = false;
        console.log(err);
      }
    },
  },
};
</script>
<style>
body {
  background-color: #eceeec;
}
</style>
