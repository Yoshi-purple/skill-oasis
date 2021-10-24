<template>
  <div class="container-fluid" style="height: 2160px">
    <div class="container-fruid" style="border-radius: none">
      <div>
        <img
          class="card-img px-0"
          style="max-width: 100%; height: 720px; object-fit: cover; border-radius: none"
          alt="Vue logo"
          src="../assets/video-controller.jpg"
        />
        <p
          class="card-img-overlay mx-auto"
          style="top: 30%; text-align: center; color: #ffffff"
        >
          可能性を広げる、お手伝い。
        </p>
        <a
          href="/Signup"
          class="btn signup-btn card-img-overlay mx-auto"
          id="signup-btn"
          type="button"
          to="/Signup"
        >
          新規会員登録 (無料)
        </a>
        <a
          href="/Login"
          class="btn login-btn card-img-overlay mx-auto"
          id="login-btn"
          style=""
        >
          ログイン
        </a>
      </div>
    </div>
    <!-- <div class="card mx-auto"> -->

    <div class="container mt-5">
      <Coachranking class="mb-3"></Coachranking>
      <Manyevaluationscoaches class="mb-3"></Manyevaluationscoaches>
      <Reqruitcard class="mb-3"></Reqruitcard>
      <!-- </div> -->
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
    // Reqruitcard,
    Coachranking,
    Manyevaluationscoaches,
    Reqruitcard,
  },
  methods: {},
};
</script>
<style>
.home_img {
  width: 100%;
}
.signup-btn {
  /* position: absolute; */
  width: 24em;
  top: 50%;
  left: 50%;
}
.login-btn {
  /* position: absolute; */
  width: 24em;
  top: 60%;
  left: 50%;
}
.coach-items {
  background-color: #ffffff;
  margin: 30px 100px;
  height: 270px;
}

.reqruit-items {
  background-color: #ffffff;
  margin: 30px 100px;
  height: 270px;
}
#signup-btn {
  background-color: #efa472;
  color: #fff;
  border: #efa472;
  border-radius: 6px;
  top: 36%;
  height: 60px;
}
#login-btn {
  background-color: #79b270;
  color: #fff;
  border: #79b270;
  border-radius: 6px;
  max-height: 60px;
  top: 45%;
}
</style>
