<template>
  <div class="container-fluid" style="min-height: 1080px">
    <div class="container">
      <div class="row w-100 mt-3">
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="card">
            <div class="card-body">
              <div class="row text-center">
                <img
                  class="row img rounded-circle mx-auto px-0"
                  style="width: 120px; height: 120px; background-color: #ffffff"
                  :src="this.user.image"
                />
                <p class="fs-3" style="color: #79b270">{{ this.user.profile_name }}</p>
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
                    <p>
                      マッチング数:{{ this.user.matching_number_of_times
                      }}<br />評価平均:4.6
                    </p>
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
        <div class="col-lg-9 col-md-6 col-sm-12">
          <div class="card">
            <div class="card-body">
              <div class="gx-3 mx-auto">
                <p>レッスンタイトル</p>
                <div
                  class="gx-3 mx-auto mb-3"
                  style="max-width: 100%; height: 100px; background-color: #eceeec"
                >
                  <div class="p-1">{{ this.lesson.lesson_title }}</div>
                </div>
                <div class="row text-center mx-auto"></div>
                <div class="row g-1">
                  <div class="col-lg-6 col-md-12 col-sm-12">
                    <img
                      class="img"
                      style="height: 300px; background-color: #eceeec"
                      :src="this.lesson.image"
                    />
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
                  </ul>
                </div>
                <div class="tab-content" id="myTabContent">
                  <div style="background-color: #eceeec; height: 300px" class="p-1">
                    {{ this.lesson.lesson_detail }}
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
      :user="user"
    ></MessageModal>
  </div>
</template>
<script>
import MessageModal from '../components/Messagemodal.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    MessageModal,
  },
  data() {
    return {
      lesson: this.$route.query.lesson,
      user: this.$route.query.user[0],
      modalStatus: false,
    };
  },
  computed: {
    ...mapGetters(['userProfile']),
  },
  mounted() {
    console.log(this.lesson);
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
