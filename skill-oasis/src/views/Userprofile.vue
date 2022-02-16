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
                  :src="this.card.profile.image"
                  @click="showUser()"
                />
                <p class="text-nowrap fs-3" style="color: #79b270" @click="showUser()">
                  {{ this.card.profile.profile_name }}
                </p>
              </div>
              <div class="fs-6">ステータス</div>
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
                    フォロー<br />{{ this.card.followies }}
                  </p>
                </div>
                <div class="col" style="margin: 0; padding: 0">
                  <p style="background-color: #eceeec; text-align: center">
                    フォロワー<br />{{ this.card.followers }}
                  </p>
                </div>
              </div>
              <div>目標</div>
              <div class="row mx-auto">
                <div class="col" style="margin: 0; padding: 0">
                  <p style="background-color: #eceeec">
                    {{ this.card.profile.goal }}
                  </p>
                </div>
              </div>
              <div class="row mx-auto">
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
                  @click="openModal(card)"
                >
                  メッセージを送信
                </button>
              </div>
              <div class="row mx-auto mt-1">
                <button
                  v-if="this.followState === false"
                  class="btn text-light"
                  style="background-color: #efa472; border-radius: 50px"
                  @click="doFollow()"
                >
                  フォローする
                </button>
                <button
                  v-if="this.followState === true"
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
          <div class="card">
            <div class="card-body">
              <div class="row mx-auto">
                <!-- <p>募集内容</p> -->
                <div class="img-fluid mx-auto p-1" style="max-width: 100%; height: auto">
                  <h5 style="font-weight: bold">
                    {{ this.card.recruitsData.title }}
                  </h5>
                </div>
                <div
                  class="img-fluid mx-auto mt-1 p-1"
                  style="max-width: 100%; height: 200px; background-color: #eceeec"
                >
                  {{ this.card.recruitsData.comment }}
                </div>
              </div>

              <div class="row gx-3 mt-3">
                <div>
                  <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <a class="nav-link fs-5" aria-current="page" href="#">自己紹介</a>
                    </li>
                  </ul>
                </div>
                <div class="tab-content" id="myTabContent">
                  <div class="p-1" style="background-color: #eceeec; min-height: 300px">
                    {{ this.card.profile.introduce }}
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
import MessageModal from '../modals/Messagemodal.vue';
import StarRating from 'vue-star-rating';

export default {
  components: {
    MessageModal,
    StarRating,
  },
  data() {
    return {
      modalStatus: false,
      card: this.$route.query.card,
      user: '',
      rating: 0,
      joinedRoomId: '',
      followState: false,
    };
  },
  mounted() {
    this.user = this.card;
    this.rating = this.card.rate;
    this.joinedRoomId = this.user.joinedRoom.id;
    this.followState = this.card.followState;
  },
  methods: {
    openModal() {
      if (
        this.$store.getters.userProfile.uid === this.user.recruitsData.recruitUser.ref.id
      ) {
        alert('自分のアカウントです');
      } else if (this.$store.state.authState === false) {
        this.$router.push('/');
      } else {
        this.modalStatus = true;
      }
    },
    closeModal() {
      this.modalStatus = false;
    },
    toMessageBox() {
      this.$router.push('Messagebox');
    },
    doFollow() {
      if (
        this.$store.getters.userProfile.uid === this.user.recruitsData.recruitUser.ref.id
      ) {
        alert('自分のアカウントです');
      } else if (this.$store.state.authState === false) {
        this.$router.push('/');
      } else {
        try {
          this.$store.dispatch('doFollow', {
            targetUserId: this.user.recruitsData.recruitUser.ref.id,
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
          targetUserId: this.user.recruitsData.recruitUser.ref.id,
        });
        this.followState = false;
      } catch (error) {
        return;
      }
    },
    showUser() {
      this.$router.push({
        path: '/Userpage',
        query: { user: this.user.profile, uid: this.user.recruitsData.recruitUser.id },
      });
      this.$store.dispatch('getTargetLessons', this.user.recruitsData.recruitUser.id);
      this.$store.dispatch('getTargetUserStatus', this.user.recruitsData.recruitUser.id);
    },
  },
};
</script>
<style></style>
