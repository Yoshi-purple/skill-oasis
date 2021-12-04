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
import { Auth } from 'aws-amplify';
import { AmplifyEventBus } from 'aws-amplify-vue';

export default {
  computed: {
    ...mapGetters(['authState', 'loginUser']),
  },
  mounted() {
    AmplifyEventBus.$on('authState', (info) => {
      if (info === 'signedIn') {
        this.isUserSignedIn();
      } else {
        this.signedIn = false;
      }
    });
  },
  data() {
    return {
      userName: '',
      email: '',
      password: '',
      signedIn: false,
    };
  },
  methods: {
    async isUserSignedIn() {
      try {
        const userObj = await Auth.currentAuthenticatedUser();
        this.signedIn = true;
        this.$store.commit('setLoginUser', {
          userName: userObj.username,
          email: userObj.attributes.email,
        });
        console.log(userObj);
        console.log(this.loginUser);
      } catch (err) {
        this.signedIn = false;
        console.log(err);
      }
    },
    async signUp() {
      try {
        await Auth.signUp({
          username: this.userName,
          password: this.password,
          attributes: {
            email: this.email, // optional
          },
        })
          .then((user) => {
            this.$router.push({
              path: '/Confirmsignup',
              query: {
                email: this.email,
                username: this.userName,
                password: this.password,
              },
            });
            this.$store.dispatch('addNewUser', {
              userName: this.userName,
              email: this.email,
              password: this.password,
            });
            console.log(user);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    },
    async signupWithGoogle() {
      try {
        await Auth.federatedSignIn({ provider: 'Google' });
        const userObj = await Auth.currentAuthenticatedUser();
        this.signedIn = true;
        this.$store.dispatch('addNewUser', {
          userName: userObj.attributes.name,
          email: userObj.attributes.email,
          password: null,
        });
        this.$store.commit('setLoginUser', {
          userName: userObj.attributes.name,
          email: userObj.attributes.email,
        });
        // this.$router.push({ path: 'Makeprofile' });
      } catch (error) {
        console.log(error);
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
