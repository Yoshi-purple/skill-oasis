<template>
  <div class="container-fluid" style="height: 960px">
    <div class="container" style="margin-top: 100px">
      <div class="card d-flex mx-auto" style="max-width: 650px">
        <div id="signup-tag">登録確認</div>
        <div class="mb-3 row" style="text-align: center">
          <div class="row" style="margin-top: 30px">
            <p>以下のアドレスに確認用のメールを送信しました。</p>
            <p>コードを入力して本登録を完了してください。</p>
            <p class="center">
              {{ this.email }}
            </p>
            <div class="row mb-3">
              <div class="col-6 mx-auto justify-content-center">
                <input
                  v-model="code"
                  type="code"
                  class="form-control"
                  style="background-color: #eceeec; border: none"
                />
              </div>
            </div>
            <div class="row">
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
                  @click="confirmSignUp()"
                  @submit="confirmSignUp()"
                >
                  確認
                </button>
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
  data() {
    return {
      email: this.$route.query.email,
      username: this.$route.query.username,
      password: this.$route.query.password,
      code: '',
      signedIn: false,
    };
  },
  computed: {
    ...mapGetters(['authState', 'loginUser']),
  },
  created() {},
  methods: {},
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
  height: 0;
}
</style>
