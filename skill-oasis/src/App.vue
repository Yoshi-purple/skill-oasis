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
import axios from 'axios';
// import base64url from 'base64url';

import { Auth } from 'aws-amplify';
export default {
  computed: {
    ...mapGetters(['loginUser']),
  },
  mounted() {
    try {
      this.isUserSignedIn();
      this.$store.dispatch('getUsers');
      this.$store.dispatch('getLessons');
      this.$store.dispatch('getRecruitCards');
    } catch (error) {
      console.log(error);
    }
  },
  created() {},

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

        const email = userObj.attributes.email;
        const user = await axios
          .get(`http://localhost:3000/api/users/${email}`)
          .then((res) => {
            return res.data[0];
          })
          .catch((err) => console.log(err));
        console.log(user);
        this.$store.commit('setUserProfile', user);
        this.$store.dispatch('getRooms', user.id);
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
