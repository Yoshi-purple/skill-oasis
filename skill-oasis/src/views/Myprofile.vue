<template>
  <div class="container-fluid" style="height: 2160px; width: 100%">
    <div class="navbar" style="background-color: #79b270; color: #ffffff; height: 120px">
      <div class="container mt-3">
        <div class="row gx-5">
          <div class="col-4">
            <img
              class="row img rounded-circle px-0"
              style="width: 120px; height: 120px; background-color: #ffffff"
              :src="this.userProfile.image"
            />
          </div>
          <div class="col-6">
            <h3 class="text-nowrap mt-3">{{ this.userProfile.profile_name }}</h3>
          </div>
          <div class="col-2">
            <a class="btn text-nowrap mt-3" href="/Editprofile">編集</a>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-3">
      <div class="row col-lg-6 col-md-12 col-sm-12">
        <div class="card mt-5" style="padding: 10px 15px; background-color: #ffffff">
          <div class="row gx-3 fs-5 px-4">ステータス</div>
          <div class="row gx-0 fs-5 row-cols-1 row-cols-sm-2 row-cols-md-3">
            <div class="col col-lg-4 col-md-12 col-sm-12">
              <div
                class="p-3 border fs-5 text-nowrap mx-auto"
                style="background-color: #eceeec; text-align: center"
              >
                マッチング数:0<br />評価平均:4.6
              </div>
            </div>
            <div class="col col-lg-4 col-md-6 col-sm-12">
              <div
                class="p-3 border fs-5 text-nowrap mx-auto"
                style="background-color: #eceeec; text-align: center"
              >
                フォロー<br />1
              </div>
            </div>
            <div class="col col-lg-4 col-md-6 col-sm-12">
              <div
                class="p-3 border fs-5 text-nowrap mx-auto"
                style="background-color: #eceeec; text-align: center"
              >
                フォロワー<br />3
              </div>
            </div>
          </div>
          <div class="row gx-3 fs-5 px-4 fs-5 mt-3">目標</div>
          <div class="row gx-3 fs-5">
            <div class="col">
              <div class="p-3 border fs-4" style="background-color: #eceeec">
                {{ this.userProfile.goal }}
              </div>
            </div>
          </div>
          <div class="row gx-3 mt-3">
            <div>
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a class="nav-link fs-5" aria-current="page" href="#">自己紹介</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fs-5" href="#">レビュー</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fs-5" href="#">募集内容</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fs-5" href="#">コーチ</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="tab-content p-1"
            id="myTabContent"
            style="background-color: #eceeec; height: 300px"
          >
            <div>{{ this.userProfile.introduce }}</div>
          </div>
        </div>
        <div class="row gx-3 mx-auto mt-3">
          <div
            class="col-lg-6 col-md-12 btn mb-lg-0 mb-md-3 mb-sm-3"
            style="background-color: #79b270; color: #ffffff"
          >
            募集する
          </div>
          <div
            class="col-lg-6 col-md-12 btn"
            style="background-color: #efa472; color: #ffffff"
          >
            コーチを探す
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
    return {};
  },
  computed: {
    ...mapGetters(['userProfile']),
  },
  mounted() {},

  methods: {},
};
</script>
<style>
.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>
