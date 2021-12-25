<template>
  <div class="container-fruid" style="height: 1440px">
    <div
      class="card d-flex mx-auto"
      style="
        margin-top: 100px;
        margin-bottom: 100px;
        max-width: 650px;
        background-color: #ffffff;
      "
    >
      <div id="login-tag">ログイン</div>

      <div class="mb-3 row" style="text-align: center">
        <div class="row" style="margin-top: 60px">
          <label for="staticEmail" class="col-sm-2 col-form-label">メールアドレス</label>
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
              @click="signIn()"
            >
              ログイン
            </button>

            <!-- <button class="btn btn-light" type="button" @click="signupWithGoogle()">
              Googleでログイン
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  created() {},
  computed: {},
  methods: {
    signIn() {
      this.$store.dispatch('logIn', {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
<style>
.btn-login {
  background-color: #79b270;
  color: #fff;
  border: #79b270;
  border-radius: 6px;
}
#login-tag {
  width: 200px;
  color: #ffffff;
  text-align: center;
  border-bottom: 30px solid #79b270;
  /* border-right: 0px solid transparent; */
  height: 0;
}
</style>
