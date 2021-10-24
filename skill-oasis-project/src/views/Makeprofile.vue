<template>
  <div class="container-fluid" style="height: 1440px">
    <div style="background-color: #79b270">
      <p class="fs-3" style="color: #ffffff; text-align: center; padding: 15px">
        登録が完了しました。ようこそ、{{ loginUser.userName }}さん。
      </p>
    </div>
    <div class="container" style="max-width: 720px; height: 873px">
      <div class="card text-center" style="padding: 0 30px">
        <div class="card-body" style="padding: 1rem 3rem">
          <p
            class="card-title fs-3 mb-5 w-100 mx-auto"
            style="border-bottom: 2.1px solid #eceeec; color: #79b270"
          >
            プロフィールを作成
          </p>
          <div class="row g-3">
            <div class="col-sm">
              <img
                class="img-fluid rounded-circle"
                style="width: 100px; height: 100px; background-color: #eceeec"
              />
              <p class="fs-6">画像を設定</p>
            </div>
            <div class="col-sm mt-3">
              <p class="mb-0" style="text-align: left">ユーザー名</p>
              <input
                type="text"
                class="form-control mb-3"
                style="background-color: #eceeec; border: none"
                placeholder="例:あんぱん食べたい人"
              />
              <p class="mb-0" style="text-align: left">目標</p>
              <input
                type="text"
                class="form-control"
                style="background-color: #eceeec; border: none"
                placeholder="例:大会に出れるレベルまで行きたいです"
              />
            </div>
          </div>
          <div class="row">
            <p class="card-text-left fs-5 w-50">自己紹介</p>
            <textarea
              class="form-control"
              style="background-color: #eceeec; border: none"
              rows="12"
            ></textarea>
          </div>
          <div class="mt-3">
            <router-link to="/Myprofile">
              <button
                ref="/Myprofile"
                class="btn mx-auto"
                style="
                  background-color: #79b270;
                  color: #fff;
                  border: #79b270;
                  border-radius: 6px;
                  width: 100px;
                "
              >
                作成
              </button>
            </router-link>
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
  computed: {
    ...mapGetters(['loginUser']),
  },
  data() {
    return {};
  },
  methods: {
    async isUserSignedIn() {
      try {
        await Auth.currentAuthenticatedUser().then((userObj) => {
          this.signedIn = true;
          this.$store.commit('setLoginUser', {
            userName: userObj.username,
            email: userObj.attributes.email,
          });
        });
      } catch (err) {
        this.signedIn = false;
        console.log(err);
      }
    },
  },
};
</script>
