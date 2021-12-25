<template>
  <div class="container-fluid" style="height: 1440px">
    <div class="container" style="margin-top: 100px">
      <div class="card d-flex mx-auto" style="max-width: 650px">
        <div id="signup-tag">新規会員登録</div>
        <div class="mb-3 row" style="text-align: center">
          <div class="row" style="margin-top: 60px">
            <label for="userName" class="col-sm-2 col-form-label">ユーザー名</label>
            <div class="col-sm-10">
              <input
                v-model="userName"
                type="text"
                class="form-control"
                style="background-color: #eceeec; border: none"
              />
            </div>
            <label for="staticEmail" class="col-sm-2 col-form-label"
              >メールアドレス</label
            >
            <div class="col-sm-10">
              <input
                v-model="email"
                type="text"
                class="form-control"
                value="email@example.com"
                style="background-color: #eceeec; border: none"
              />
            </div>
            <label for="inputPassword" class="col-sm-2 col-form-label">パスワード</label>
            <div class="col-sm-10">
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="inputPassword"
                style="background-color: #eceeec; border: none"
              />
            </div>
          </div>
          <div class="row" style="margin-top: 30px">
            <div class="d-grid gap-2 col-12 mx-auto justify-content-center">
              <button
                class="btn"
                type="button"
                style="
                  background-color: #79b270;
                  color: #fff;
                  border: #79b270;
                  border-radius: 6px;
                "
                @click="signUp()"
                @submit="signUp()"
              >
                新規会員登録(無料)
              </button>
              <!-- <button class="btn btn-light" type="button" @click="signupWithGoogle()">
                Googleでログイン
              </button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'signup',
  computed: {
    ...mapGetters(['authState', 'loginUser']),
  },
  mounted() {},
  data() {
    return {
      userName: '',
      email: '',
      password: '',
      signedIn: false,
    };
  },
  methods: {
    signUp() {
      if (this.email === '' || this.password === '' || this.userName === '') {
        alert('ユーザー情報を全て入力してください');
      } else {
        this.$store.dispatch('addNewUser', {
          name: this.userName,
          email: this.email,
          password: this.password,
        });
        // await this.$router.push('/Confirmsignup'); //ページ推移
        // this.userName = '';
        // this.email = '';
        // this.password = '';
      }
    },
  },
};
</script>
<style>
.signup {
  margin-top: 100px;
  text-align: center;
}
#signup-tag {
  width: 200px;
  color: #ffffff;
  text-align: center;
  border-bottom: 30px solid #79b270;
  /* border-right: 0px solid transparent; */
  height: 0;
}
</style>
