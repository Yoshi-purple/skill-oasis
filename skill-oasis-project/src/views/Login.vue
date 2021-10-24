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
          <!-- <router-link to="/Mypage"> -->
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

            <button class="btn btn-light" type="button">Googleでログイン</button>
          </div>
          <!-- </router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Auth } from 'aws-amplify';
import { AmplifyEventBus } from 'aws-amplify-vue';
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  created() {
    this.isUserSignedIn();
    AmplifyEventBus.$on('authState', (info) => {
      if (info === 'signedIn') {
        this.isUserSignedIn();
      } else {
        this.signedIn = false;
      }
    });
  },
  computed: {},
  methods: {
    async isUserSignedIn() {
      try {
        const userObj = await Auth.currentAuthenticatedUser();
        this.signedIn = true;
        this.$store.commit('setLoginUser', {
          userName: userObj.username,
          email: userObj.attributes.email,
        });
      } catch (err) {
        this.signedIn = false;
        console.log(err);
      }
    },
    async signIn() {
      try {
        await Auth.signIn(this.email, this.password);
        this.isUserSignedIn();
        this.$router.push('Mypage');
        this.$store.commit('setAuthState');
      } catch (error) {
        console.log(error);
      }
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
