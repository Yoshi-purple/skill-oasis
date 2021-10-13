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
                type="text"
                class="form-control"
                value="email@example.com"
                style="background-color: #eceeec; border: none"
              />
            </div>
            <label for="inputPassword" class="col-sm-2 col-form-label">パスワード</label>
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                style="background-color: #eceeec; border: none"
              />
            </div>
          </div>
          <div class="row" style="margin-top: 30px">
            <div class="d-grid gap-2 col-12 mx-auto justify-content-center">
              <router-link to="/Makeprofile">
                <button
                  class="btn"
                  type="button"
                  style="
                    background-color: #79b270;
                    color: #fff;
                    border: #79b270;
                    border-radius: 6px;
                  "
                >
                  新規会員登録(無料)
                </button>
              </router-link>

              <button class="btn btn-light" type="button">Googleでログイン</button>

              <button class="btn btn-primary text-white" type="button">
                Twitterでログイン
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="signup">
    <p>新規会員登録</p>
    <div>
      <span>ユーザーID</span>
      <input style="border: none" type="text" />
    </div>
    <div>
      <span>メールアドレス</span>
      <input style="border: none" type="text" />
    </div>
    <div>
      <span>パスワード</span>
      <input style="border: none" type="text" />
    </div>
    <button>新規会員登録(無料)</button>
  </div> -->
</template>
<script>
export default {};
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

/* h2:before {
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 0;
  height: 0;
  content: '';
  border-top: 10px solid #79b270;
  border-left: 0px solid transparent;
} */
</style>
