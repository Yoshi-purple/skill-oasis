<template>
  <nav class="navbar navbar-expand-lg sticky-top" style="background-color: #303030">
    <div class="container-fluid">
      <a v-if="!this.authState" class="navbar-brand" style="color: #79b270" href="/"
        >Skill Oasis</a
      >
      <a v-if="this.authState" class="navbar-brand" style="color: #79b270" href="Mypage"
        >Skill Oasis</a
      >

      <div class="collapse navbar-collapse">
        <form class="d-flex">
          <div class="input-group">
            <input
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div class="input-group-append"></div>
            <a
              class="btn input-group-append"
              type="submit"
              style="background-color: #79b270"
            >
              Search
            </a>
          </div>
        </form>
        <a
          v-if="this.authState"
          class="btn"
          type="button"
          style="color: #ffffff"
          href="/Mypage"
          >コーチを探す</a
        >
        <a v-if="this.authState" class="btn" style="color: #ffffff" href="Makereqruitcard"
          >コーチを募集する</a
        >
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          v-if="this.authState"
          class="btn"
          type="button"
          style="
            background-color: #79b270;
            color: #fff;
            border: #79b270;
            border-radius: 6px;
          "
          @click="signOut()"
        >
          ログアウト
        </button>
        <div class="btn btn-outline-light text-white" @click="redirectToHome()">HOME</div>
      </div>
    </div>
  </nav>
</template>
<script>
import { Auth } from 'aws-amplify';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['authState']),
  },
  methods: {
    async signOut() {
      try {
        await Auth.signOut().then(() => {
          this.$router.push('/');
        });
        this.$store.commit('setAuthState');
      } catch (error) {
        console.log('error signing out: ', error);
      }
    },
    redirectToHome() {
      if (this.authState) {
        this.$router.push('/Mypage');
      } else {
        this.$router.push('/');
      }
    },
  },
};
</script>
<style>
.app-header {
  z-index: 9;
  position: fixed;
  display: flex;
  background-color: #303030;
  width: 100%;
  top: 0px;
  left: 0px;
}
.header-title {
  color: #79b270;
  margin-left: 30px;
}
.search-btn {
  background-color: #79b270;
  border: #79b270;
}
.home-btn {
  margin: 30px 0;
  margin-left: auto;
  margin-right: 30px;
}
#home-btn {
  background-color: #303030;
  color: #79b270;
  border: #303030;
}
.search-coach {
  margin-right: 10px;
  color: #ffffff;
}
.reqruit-coach {
  margin-right: 10px;
  color: #ffffff;
}
</style>
