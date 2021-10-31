<template>
  <div class="container-fluid" style="min-height: 1080px">
    <MessageModal v-if="this.modalStatus === true" @click="closeModal"></MessageModal>
    <div class="container">
      <div class="row w-100 mt-3">
        <div class="col-lg-3 col-md-12 col-sm-12">
          <div class="card">
            <div class="card-body">
              <div class="row text-center">
                <figure
                  class="img-fluid rounded-circle mx-auto"
                  style="width: 100px; height: 100px; background-color: #eceeec"
                ></figure>
                <p class="fs-3" style="color: #79b270">aaa</p>
              </div>
              <div class="row fs-6">
                <p>ステータス</p>
              </div>
              <div class="row">
                <div class="col">
                  <div
                    class="border"
                    style="background-color: #eceeec; text-align: center"
                  >
                    <p>マッチング数:0<br />評価平均:4.6</p>
                  </div>
                </div>
              </div>
              <div class="row mx-auto">
                <div class="col" style="margin: 0; padding: 0">
                  <p style="background-color: #eceeec; text-align: center">
                    フォロー<br />1
                  </p>
                </div>
                <div class="col" style="margin: 0; padding: 0">
                  <p style="background-color: #eceeec; text-align: center">
                    フォロワー<br />3
                  </p>
                </div>
              </div>
              <div class="row mx-auto">
                <button
                  class="btn text-light"
                  style="background-color: #79b270"
                  @click="openModal"
                >
                  メッセージを送信
                </button>
              </div>
              <div class="row mx-auto">
                <button class="btn text-light" style="background-color: #efa472">
                  フォローする
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9 col-md-12 col-sm-12">
          <div class="card">
            <div class="card-body">
              <div class="row mx-auto">
                <p>募集内容</p>
                <div
                  class="img-fluid mx-auto"
                  style="max-width: 100%; height: 200px; background-color: #eceeec"
                ></div>
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
                  </ul>
                </div>
                <div class="tab-content" id="myTabContent">
                  <div style="background-color: #eceeec; height: 300px">自己紹介</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MessageModal from '../components/Messagemodal.vue';
export default {
  components: {
    MessageModal,
  },
  data() {
    return {
      modalStatus: false,
    };
  },
  methods: {
    openModal() {
      this.modalStatus = true;
      console.log(this.modalStatus);
    },
    closeModal() {
      this.modalStatus = false;
    },
  },
};
</script>
<style></style>
