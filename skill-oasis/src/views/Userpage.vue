<template>
  <div class="container-fluid" style="min-height: 760px">
    <div class="navbar" style="background-color: #79b270; color: #ffffff; height: 120px">
      <div class="container mt-3">
        <div class="row">
          <div class="col-lg-2 col-md-1 col-sm-12">
            <img
              class="row img rounded-circle px-0"
              style="
                width: 130px;
                height: 130px;
                background-color: #ffffff;
                border: solid 8px #79b270;
              "
              :src="this.user.image"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-12 col-sm-12">
          <div class="card mt-5" style="padding: 10px 15px; background-color: #ffffff">
            <div class="row gx-0 fs-5 row-cols-1 row-cols-sm-2 row-cols-md-3">
              <div class="col col-lg-12 col-md-12 col-sm-12">
                <div class="row">
                  <h5 class="fs-3 text-center" style="color: #79b270">
                    {{ this.user.profile_name }}
                  </h5>
                </div>
                <p class="fs-6">ステータス</p>
                <div
                  class="row p-3 border fs-5 text-nowrap mx-auto"
                  style="background-color: #eceeec; text-align: center"
                >
                  <p>
                    <StarRating
                      class="d-flex justify-content-center"
                      v-model="this.targetUserStatus[0].rate"
                      v-bind:star-size="21"
                      :increment="0.5"
                      :read-only="true"
                      :show-rating="false"
                    ></StarRating>
                  </p>
                </div>
              </div>
              <div class="col col-lg-6 col-md-6 col-sm-6">
                <div>
                  <p
                    class="text-nowrap mx-auto fs-6"
                    style="background-color: #eceeec; text-align: center"
                  >
                    フォロー<br />{{ this.targetUserStatus[0].followings }}
                  </p>
                </div>
              </div>
              <div class="col col-lg-6 col-md-6 col-sm-6">
                <div>
                  <p
                    class="text-nowrap mx-auto fs-6"
                    style="background-color: #eceeec; text-align: center"
                  >
                    フォロワー<br />{{ this.targetUserStatus[0].followers }}
                  </p>
                </div>
              </div>
            </div>
            <p class="mt-3">目標</p>
            <div class="row gx-3">
              <div class="col">
                <div
                  class="border text-align-center"
                  style="background-color: #eceeec; min-height: 30px"
                >
                  {{ this.user.goal }}
                </div>
              </div>
            </div>
          </div>
          <div class="row gx-3 mx-auto mt-3">
            <a
              v-if="this.targetUserStatus[0].joinedRoom"
              class="col-lg-12 col-md-12 btn mb-lg-0 mb-md-3 mb-sm-3"
              style="background-color: #79b270; color: #ffffff; border-radius: 50px"
              href="/Messagebox"
            >
              メッセージBOXへ
            </a>
            <!-- </div>
          <div class="row gx-3 mx-auto mt-3"> -->
            <a
              v-if="!this.targetUserStatus[0].joinedRoom"
              class="col-lg-12 col-md-12 btn mb-lg-0 mb-md-3 mb-sm-3"
              style="background-color: #79b270; color: #ffffff; border-radius: 50px"
              @click="openModal"
            >
              メッセージを送信
            </a>
          </div>
          <div class="row mx-auto mt-1">
            <button
              v-if="this.targetUserStatus[0].followState == false"
              class="btn text-light"
              style="background-color: #efa472; border-radius: 50px"
              @click="doFollow()"
            >
              フォローする
            </button>
            <button
              v-if="this.targetUserStatus[0].followState == true"
              class="btn text-light"
              style="background-color: #efa472; opacity: 0.6; border-radius: 50px"
              @click="unFollow()"
            >
              フォロー中
            </button>
          </div>
        </div>
        <div class="col-lg-9 col-md-12 col-sm-12 mt-5">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active btn" data-toggle="tab" href="#mylessons">
                レッスン
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link btn" data-toggle="tab" href="#introduce">自己紹介</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane active" id="mylessons">
              <TargetUserLessons></TargetUserLessons>
            </div>
            <div class="tab-pane" id="editprofile"></div>
            <div class="tab-pane" id="introduce">
              <div class="row mx-0">
                <div class="card-body">
                  <div class="p-1" style="background-color: #eceeec; min-height: 300px">
                    <div class="row">
                      <div class="col-10">
                        {{ this.user.introduce }}
                      </div>
                      <div class="col-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Messagetotargetuser
      v-if="this.modalStatus === true"
      @close="closeModal"
      :user="user"
    ></Messagetotargetuser>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import StarRating from 'vue-star-rating';
import TargetUserLessons from '../components/TargetUserLessons.vue';
import Messagetotargetuser from '../modals/Messagetotargetuser.vue';

export default {
  components: {
    StarRating,
    TargetUserLessons,
    Messagetotargetuser,
  },
  data() {
    return {
      rating: '',
      user: this.$route.query.user,
      uid: this.$route.query.uid,
      modalStatus: false,
    };
  },
  computed: {
    ...mapGetters(['userProfile', 'targetUserStatus']),
  },
  mounted() {},

  methods: {
    openModal() {
      if (this.$store.getters.userProfile.uid === this.uid) {
        alert('自分のアカウントです');
      } else if (this.$store.state.authState === false) {
        this.$router.push('Recommendsignin');
      } else {
        this.modalStatus = true;
      }
    },
    closeModal() {
      this.modalStatus = false;
    },
    doFollow() {
      if (this.$store.getters.userProfile.uid === this.uid) {
        alert('自分のアカウントです');
      } else if (this.$store.state.authState === false) {
        this.$router.push('Recommendsignin');
      } else {
        try {
          this.$store.dispatch('doFollow', {
            targetUserId: this.uid,
          });
          this.targetUserStatus[0].followState = true;
        } catch (error) {
          return;
        }
      }
    },
    unFollow() {
      try {
        this.$store.dispatch('unFollow', {
          targetUserId: this.uid,
        });
        this.targetUserStatus[0].followState = false;
      } catch (error) {
        return;
      }
    },
  },
};
</script>
<style>
.img-fluid {
  max-width: 100%;
  height: auto;
}
.nav-item a {
  font-weight: bold;
}
</style>
