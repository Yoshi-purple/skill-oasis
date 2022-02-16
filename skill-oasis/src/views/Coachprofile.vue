<template>
  <div class="container-fluid" style="min-height: 1080px">
    <div class="container">
      <div class="row w-100 mt-3">
        <div class="col-lg-3 col-md-12 col-sm-12">
          <div class="card">
            <div class="card-body">
              <div class="row text-center">
                <img
                  class="row img rounded-circle mx-auto px-0"
                  style="width: 120px; height: 120px; background-color: #ffffff"
                  :src="this.lesson.profile.image"
                  @click="showUser()"
                />
                <p class="fs-3" style="color: #79b270" @click="showUser()">
                  {{ this.lesson.profile.profile_name }}
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
                    <p>
                      評価
                      <StarRating
                        class="d-flex justify-content-center"
                        v-model="rating"
                        v-bind:star-size="21"
                        :increment="0.5"
                        :read-only="true"
                        :show-rating="false"
                      ></StarRating>
                    </p>
                  </div>
                </div>
              </div>
              <div class="row mx-auto">
                <div class="col" style="margin: 0; padding: 0">
                  <p style="background-color: #eceeec; text-align: center">
                    フォロー<br />{{ this.lesson.followies }}
                  </p>
                </div>
                <div class="col" style="margin: 0; padding: 0">
                  <p style="background-color: #eceeec; text-align: center">
                    フォロワー<br />{{ this.lesson.followers }}
                  </p>
                </div>
              </div>
              <div class="row mx-auto mb-1">
                <button
                  v-if="this.joinedRoomId != ''"
                  class="btn text-light"
                  style="background-color: #79b270; border-radius: 50px"
                  @click="toMessageBox"
                >
                  メッセージBOXへ
                </button>
                <button
                  v-if="this.joinedRoomId == ''"
                  class="btn text-light"
                  style="background-color: #79b270; border-radius: 50px"
                  @click="openModal"
                >
                  メッセージを送信
                </button>
              </div>
              <div class="row mx-auto">
                <button
                  v-if="this.followState == false"
                  class="btn text-light"
                  style="background-color: #efa472; border-radius: 50px"
                  @click="doFollow()"
                >
                  フォローする
                </button>
                <button
                  v-if="this.followState == true"
                  class="btn text-light"
                  style="background-color: #efa472; opacity: 0.6; border-radius: 50px"
                  @click="unFollow()"
                >
                  フォロー中
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9 col-md-12 col-sm-12">
          <div style="background-color: #eceeec">
            <div class="card-body" style="background-color: #ffffff">
              <div class="gx-3 mx-auto">
                <!-- <p>レッスンタイトル</p> -->
                <div class="gx-3 mx-auto mb-3" style="max-width: 100%; height: auto">
                  <div class="p-1 card-title">
                    <h5 style="font-weight: bold">
                      {{ this.lesson.lessonData.lessonTitle }}
                    </h5>
                  </div>
                </div>
                <div class="row gx-0 card">
                  <div class="card-img">
                    <img
                      class="img-fluid w-100 h-100"
                      style="background-color: #eceeec"
                      :src="this.lesson.lessonData.image"
                    />
                  </div>
                </div>
              </div>
              <div class="row gx-3 mt-3">
                <div>
                  <h5 class="nav-link fs-5 text-secondary" aria-current="page" href="#">
                    レッスン紹介
                  </h5>
                </div>
                <div class="" id="myTabContent">
                  <div style="height: auto" class="p-1">
                    <p>
                      {{ this.lesson.lessonData.introduce }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MessagetocoachModal
      v-if="this.modalStatus === true"
      @close="closeModal"
      :user="user"
    ></MessagetocoachModal>
  </div>
</template>
<script>
import MessagetocoachModal from '../modals/Messagetocoachmodal.vue';
import StarRating from 'vue-star-rating';

import { mapGetters } from 'vuex';
export default {
  components: {
    MessagetocoachModal,
    StarRating,
  },
  data() {
    return {
      lesson: this.$route.query.lesson,
      user: '',
      modalStatus: false,
      rating: 0,
      joinedRoomId: '',
      followState: false,
    };
  },
  computed: {
    ...mapGetters(['userProfile']),
  },
  mounted() {
    this.user = this.lesson;
    console.log(this.user)
    this.rating = this.user.rate;
    this.joinedRoomId = this.user.joinedRoom.id;
    this.followState = this.user.followState;
  },

  methods: {
    openModal() {
      if (
        this.$store.getters.userProfile.uid === this.user.lessonData.coachingUser.ref.id
      ) {
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
      if (
        this.$store.getters.userProfile.uid === this.user.lessonData.coachingUser.ref.id
      ) {
        alert('自分のアカウントです');
      } else if (this.$store.state.authState === false) {
        this.$router.push('Recommendsignin');
      } else {
        try {
          this.$store.dispatch('doFollow', {
            targetUserId: this.user.lessonData.coachingUser.ref.id,
          });
          this.followState = true;
        } catch (error) {
          return;
        }
      }
    },
    unFollow() {
      try {
        this.$store.dispatch('unFollow', {
          targetUserId: this.user.lessonData.coachingUser.ref.id,
        });
        this.followState = false;
      } catch (error) {
        return;
      }
    },
    toMessageBox() {
      this.$router.push('Messagebox');
    },
    showUser() {
      this.$router.push({
        path: '/Userpage',
        query: { user: this.user.profile, uid: this.user.lessonData.coachingUser.id },
      });
      this.$store.dispatch('getTargetLessons', this.user.lessonData.coachingUser.id);
      this.$store.dispatch('getTargetUserStatus', this.user.lessonData.coachingUser.id);
    },
  },
};
</script>
<style></style>
