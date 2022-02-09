<template>
  <div class="container-fruid" style="min-height: 700px">
    <div
      class="card"
      style="
        margin-top: 100px;
        margin-bottom: 100px;
        max-width: 650px;
        background-color: #ffffff;
      "
    >
      <div class="card-body">
        <div class="mb-3 row">
          <p
            class="card-title text-center fs-3"
            style="color: #79b270; font-weight: bold"
          >
            認証メールを送信しました。
          </p>
          <div class="row mt-3 mx-auto text-center text-secondary">
            <p for="staticEmail" class="col-lg-12 col-md-2 col-sm-12 text-nowrap">
              お客様のメールアドレスに認証用のメールを送信しました。
              <!-- </p>
            <p for="staticEmail" class="col-lg-12 col-md-2 col-sm-12 text-nowrap"> -->
              <br />
              本文のリンクにアクセスして、ログインを完了してください。
            </p>
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
