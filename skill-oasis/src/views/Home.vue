<template>
  <div class="container-fluid" style="height: 3840px">
    <div class="container-fruid">
      <div class="position-relative">
        <img class="img-fluid" alt="Vue logo" src="../assets/video-controller.jpg" />
        <div class="position-absolute img-caption-title text-center">
          <p class="fs-3" style="color: #ffffff">可能性を広げる、お手伝い。</p>
        </div>
        <div class="position-absolute img-caption text-center">
          <a href="/Signup" class="btn signup-btn" id="signup-btn" to="/Signup">
            新規会員登録 (無料)
          </a>
          <a href="/Login" class="btn login-btn" id="login-btn" style=""> ログイン </a>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <Coachranking class="mb-3"></Coachranking>
      <Manyevaluationscoaches class="mb-3"></Manyevaluationscoaches>
      <Reqruitcard class="mb-3"></Reqruitcard>
    </div>
  </div>
</template>

<script>
import Coachranking from '../components/Coachranking.vue';
import Manyevaluationscoaches from '../components/Manyevaluationscoaches.vue';
import Reqruitcard from '../components/Reqruitcard.vue';

export default {
  name: 'Home',
  components: {
    Coachranking,
    Manyevaluationscoaches,
    Reqruitcard,
  },
  methods: {},
};
</script>
<style>
.position-relative {
  position: relative;
}

.position-absolute {
  position: absolute;
}

.text-center {
  text-align: center;
}

.img-caption-title {
  top: 15%;
  left: 0;
  right: 0;
}
.img-caption {
  top: 60%;
  left: 0;
  right: 0;
}

.signup-btn {
  width: 24em;
}
.login-btn {
  width: 24em;
}

#signup-btn {
  background-color: #efa472;
  color: #fff;
  border: #efa472;
  border-radius: 6px;
  inline-size: 20em;
  text-align: center;
  padding: 10px;
}
#login-btn {
  background-color: #79b270;
  color: #fff;
  border: #79b270;
  border-radius: 6px;
  inline-size: 20em;
  padding: 10px;
}
</style>
