<template>
  <div class="container-fluid" style="min-height: 1080px">
    <div class="container">
      <div class="row w-100 mt-3">
        <div class="col-lg-3 col-md-12 col-sm-12">
          <div class="card">
            <div class="card-body">
              <div class="row text-center">
                <img
                  class="row img rounded-circle px-0 mx-auto"
                  style="width: 120px; height: 120px; background-color: #ffffff"
                  :src="this.card.image"
                />
                <p class="text-nowrap fs-3" style="color: #79b270">
                  {{ this.card.profile_name }}
                </p>
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
                  @click="openModal(card)"
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
                  class="img-fluid mx-auto p-1"
                  style="max-width: 100%; height: 36px; background-color: #eceeec"
                >
                  {{ this.card.recruit_title }}
                </div>
                <div
                  class="img-fluid mx-auto mt-1 p-1"
                  style="max-width: 100%; height: 200px; background-color: #eceeec"
                >
                  {{ this.card.cardtext }}
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
                  </ul>
                </div>
                <div class="tab-content" id="myTabContent">
                  <div class="p-1" style="background-color: #eceeec; height: 300px">
                    {{ this.card.comment }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MessageModal
      v-if="this.modalStatus === true"
      @close="closeModal"
      :user="card"
    ></MessageModal>
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
      card: this.$route.query.card,
    };
  },
  mounted() {
    console.log(this.card);
  },
  methods: {
    openModal() {
      this.modalStatus = true;
    },
    closeModal() {
      this.modalStatus = false;
    },
  },
};
</script>
<style></style>
