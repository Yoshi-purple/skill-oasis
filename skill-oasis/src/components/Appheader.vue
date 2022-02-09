<template>
  <nav class="navbar navbar-expand-lg sticky-top" style="background-color: #303030">
    <div class="container-fluid">
      <a
        v-if="!this.authState"
        class="navbar-brand fs-3"
        style="color: #79b270; font-weight: bold"
        href="/"
        >SkillOasis</a
      >
      <a
        v-if="this.authState"
        class="navbar-brand fs-3"
        style="color: #79b270; font-weight: bold"
        href="Mypage"
        >SkillOasis</a
      >

      <div class="collapse navbar-collapse">
        <form class="d-flex">
          <div class="input-group">
            <!-- Widgets -->
          </div>
        </form>
        <a
          v-if="this.authState"
          class="btn"
          type="button"
          style="color: #ffffff"
          href="/Search"
          >レッスンを検索</a
        >
        <a
          v-if="this.authState"
          class="btn"
          style="color: #ffffff"
          href="/Makereqruitcard"
          >コーチを募集する</a
        >
        <a v-if="this.authState" class="btn" style="color: #ffffff" href="/RegisterCoach"
          >コーチになる</a
        >
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <!-- <div class="collapse navbar-collapse"> -->
        <div v-if="!this.authState" class="dropdown">
          <a
            class="btn btn-outline-light"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            MENU
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-home"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              TOP</a
            >
            <a><hr class="dropdown-divider" /></a>
            <a class="dropdown-item" href="Login"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-log-in"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" y1="12" x2="3" y2="12"></line>
              </svg>
              ログイン</a
            >
          </div>
        </div>
        <div v-if="this.authState">
          <div class="dropleft">
            <img
              :src="this.userProfile.user.image"
              class="img rounded-circle mx-auto dropdown-toggle"
              style="width: 45px; height: 45px; background-color: #ffffff"
              type="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            />
            <div
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuLink"
            >
              <!-- <ul aria-labelledby="dropdownMenuButton"> -->
              <!-- <li> -->
              <a class="dropdown-item" href="Mypage">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-home"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                TOP</a
              >
              <!-- </li>
                <li> -->
              <a class="dropdown-item" href="Myprofile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-user"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle></svg
                >プロフィール</a
              >
              <!-- </li>
                <li> -->
              <a class="dropdown-item" href="Messagebox">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-mail"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  ></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                メッセージ</a
              >
              <!-- </li>
                <li> -->
              <a class="dropdown-item" href="RegisterCoach"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-plus-square"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
                コーチになる</a
              >
              <!-- </li>
                <li> -->
              <a class="dropdown-item" href="Makereqruitcard">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-message-square"
                >
                  <path
                    d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                  ></path>
                </svg>
                コーチを募集する</a
              >
              <!-- </li>
                <li> -->
              <a><hr class="dropdown-divider" /></a>
              <!-- </li>
                <li> -->
              <a class="dropdown-item" @click="signOut()" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-log-out"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                ログアウト</a
              >
              <!-- </li> -->
              <!-- </ul> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapState } from 'vuex';
import algoliasearch from 'algoliasearch';

export default {
  data() {
    return {
      searchClient: algoliasearch('VCI44UTWIB', 'a8eba24a61b5ad7bcbc5c726cf10b3f9'),
    };
  },
  computed: {
    ...mapState(['authState', 'userProfile']),
  },
  methods: {
    signOut() {
      this.$store.dispatch('signOut');
      // this.$store.commit('setAuthState');
    },
    search() {},
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
.dropdown-menu.show {
  margin-right: 10px;
}
</style>
