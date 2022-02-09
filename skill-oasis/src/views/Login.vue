<template>
  <div class="container-fruid" style="min-height: 700px">
    <div
      class="card px-3"
      style="
        margin-top: 100px;
        margin-bottom: 100px;
        max-width: 450px;
        background-color: #ffffff;
      "
    >
      <div class="card-body">
        <div class="mb-3 row">
          <p
            class="card-title text-center fs-3"
            style="color: #79b270; font-weight: bold"
          >
            ログイン
          </p>
          <div class="row mt-3">
            <label for="staticEmail" class="col-lg-12 col-form-label text-nowrap"
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
          </div>
          <div class="row mt-3 mx-auto">
            <div class="d-grid gap-2 justify-content-center">
              <button
                class="btn p-3"
                type="button"
                style="
                  background-color: #79b270;
                  color: #fff;
                  border: #79b270;
                  border-radius: 6px;
                "
                @click="signIn()"
              >
                <a> 認証メールを受け取る </a>
              </button>

              <button
                class="btn p-3 btn-secondary"
                type="button"
                @click="signInWithGoogle()"
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
                  Googleでログイン
                </a>
              </button>
            </div>
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
  computed: {},

  methods: {
    signIn() {
      this.$store.dispatch('logIn', {
        email: this.email,
        password: this.password,
      });
    },
    async signInWithGoogle() {
      try {
        await this.$store.dispatch('signInWithGoogle');
        // this.$router.push('/Mypage');
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
</style>
