<template>
  <div class="container-fluid" style="height: 1440px">
    <div class="container" style="margin-top: 100px">
      <div class="card px-3" style="max-width: 450px">
        <div class="mb-3 row">
          <div class="card-body">
            <p
              class="card-title text-center fs-3"
              style="color: #79b270; font-weight: bold"
            >
              新規会員登録
            </p>
            <div class="row mt-3">
              <label for="userName" class="col-12 col-form-label">ユーザー名</label>
              <div class="col-12">
                <input
                  v-model="userName"
                  type="text"
                  class="form-control"
                  style="background-color: #eceeec; border: none"
                />
              </div>
              <label for="staticEmail" class="col-12 col-form-label text-nowrap"
                >メールアドレス</label
              >
              <div class="col-12">
                <input
                  v-model="email"
                  type="text"
                  class="form-control"
                  value="email@example.com"
                  style="background-color: #eceeec; border: none"
                />
              </div>
              <label for="inputPassword" class="col-12 col-form-label">パスワード</label>
              <div class="col-12">
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
                  class="btn btn-md p-3"
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
                <button
                  class="btn p-3 btn-secondary"
                  type="button "
                  style="border: #79b270; border-radius: 6px"
                  @click="signUpWithGoogle()"
                  @submit="signUpWithGoogle()"
                >
                  <a>
                    <svg
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24px"
                      height="24px"
                    >
                      <path
                        d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                      />
                    </svg>
                    Googleで登録
                  </a>
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
      }
    },
    signUpWithGoogle() {
      this.$store.dispatch('signUpWithGoogle');
    },
  },
};
</script>
<style>
.signup {
  margin-top: 100px;
  text-align: center;
}
</style>
