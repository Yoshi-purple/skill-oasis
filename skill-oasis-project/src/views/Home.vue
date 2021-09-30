<template>
  <div class="home">
    <img class="home_img" alt="Vue logo" src="../assets/video-controller.jpg" />
    <router-link to="/Signup">
      <button class="signup-btn">新規会員登録</button>
    </router-link>
    <router-link to="/Login">
      <button class="login-btn">ログイン</button>
    </router-link>
    <div class="ranking-items">
      <p>コーチランキング</p>
    </div>
    <div class="meny-enviroment-items">
      <p>評価件数が多いコーチ</p>
    </div>
    <div class="reqruit-items">
      <p>募集カード一覧</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
};
</script>
<style>
.home {
  z-index: 1;
  position: relative;
  text-align: center;
}
.home_img {
  width: 100%;
}
.signup-btn {
  position: absolute;
  width: 24em;
  top: 50%;
  left: 50%;
}
.login-btn {
  position: absolute;
  width: 24em;
  top: 60%;
  left: 50%;
}
.ranking-items {
  background-color: #ffffff;
  margin: 30px 100px;
}
.meny-enviroment-items {
  background-color: #ffffff;
  margin: 30px 100px;
}
.reqruit-items {
  background-color: #ffffff;
  margin: 30px 100px;
}
</style>
