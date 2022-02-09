<template>
  <div class="container-fruid" style="min-height: 700px">
    <div class="row">
      <div
        class="card"
        style="
          margin-top: 100px;
          margin-bottom: 100px;
          max-width: 700px;
          min-height: 300px;
          background-color: #ffffff;
        "
      >
        <div class="card-body row p-5">
          <div class="col-sm-12 col-md-12 col-lg-6">
            <div class="row p-3">
              <p
                class="card-title text-center fs-3 text-nowrap"
                style="color: #79b270; font-weight: bold"
              >
                ログインが必要です。
              </p>
            </div>
            <div class="row mt-3">
              <p
                class="card-text text-center fs-6 text-nowrap text-secondary"
                style="font-weight: bold"
              >
                ※機能を使用するには、会員登録をするか、
                <br />ログインしてください。
              </p>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-6">
            <div class="row mx-auto text-center text-secondary p-3">
              <a href="/Signup" class="btn signup-btn p-4 mx-auto" id="signup-btn">
                新規会員登録 (無料)
              </a>
              <a href="/Login" class="btn login-btn p-4 mx-auto mt-3" id="login-btn">
                ログイン
              </a>
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
  created() {},
  computed: {},
  methods: {},
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
