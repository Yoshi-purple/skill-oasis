<template>
  <div class="container-fluid">
    <div class="container-fruid">
      <div class="position-relative">
        <img class="img-fluid" alt="Vue logo" src="../assets/video-controller.jpg" />
        <div class="position-absolute img-caption-title text-center">
          <p class="fs-3" style="color: #ffffff">可能性を広げる、お手伝い。</p>
        </div>
        <div class="position-absolute img-caption text-center">
          <a href="/Signup" class="btn signup-btn p-3" id="signup-btn">
            新規会員登録 (無料)
          </a>
          <a href="/Login" class="btn login-btn p-3" id="login-btn"> ログイン </a>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" data-toggle="tab" href="#popular">人気</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#new" @click="getNewLessons()"
            >新着</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#recruit" @click="getRecruits()"
            >募集</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#search">レッスンを検索</a>
        </li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane active" id="popular">
          <Coachranking class="row"></Coachranking>
        </div>
        <div class="tab-pane" id="new">
          <Newlessons class="row"></Newlessons>
        </div>
        <div class="tab-pane" id="recruit">
          <Reqruitcard class="row"></Reqruitcard>
        </div>
        <div class="tab-pane" id="search">
          <Searchlessons class="row"></Searchlessons>
        </div>
      </div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import Coachranking from '../components/Coachranking.vue';
import Newlessons from '../components/Newlessons.vue';
import Reqruitcard from '../components/Reqruitcard.vue';
import Searchlessons from '../components/Searchlessons.vue';

export default {
  name: 'Home',
  components: {
    Coachranking,
    Newlessons,
    Reqruitcard,
    Searchlessons,
  },
  methods: {
    signInWithGoogle() {
      this.$store.dispatch('signInWithGoogle');
    },
    getNewLessons() {
      this.$store.dispatch('getNewLessons');
    },
    getRecruits() {
      this.$store.dispatch('getRecruits');
    },
  },
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
