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
              :src="this.userProfile.user.image"
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
                    {{ this.userProfile.user.profile_name }}
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
                      v-model="this.userProfile.rate"
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
                    フォロー<br />{{ this.userProfile.followies }}
                  </p>
                </div>
              </div>
              <div class="col col-lg-6 col-md-6 col-sm-6">
                <div>
                  <p
                    class="text-nowrap mx-auto fs-6"
                    style="background-color: #eceeec; text-align: center"
                  >
                    フォロワー<br />{{ this.userProfile.followers }}
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
                  {{ this.userProfile.user.goal }}
                </div>
              </div>
            </div>
            <p class="mt-3">自己紹介</p>
            <div class="row mx-0">
              <div class="p-1" style="background-color: #eceeec; min-height: 180px">
                <div>
                  {{ this.userProfile.user.introduce }}
                </div>
              </div>
            </div>
          </div>
          <div class="row gx-3 mx-auto mt-3">
            <a
              class="col-lg-12 col-md-12 btn mb-1"
              style="background-color: #79b270; color: #ffffff; border-radius: 50px"
              href="/Makereqruitcard"
            >
              募集する
            </a>
            <a
              class="col-lg-12 col-md-12 btn"
              style="background-color: #efa472; color: #ffffff; border-radius: 50px"
              href="/RegisterCoach"
            >
              コーチになる
            </a>
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
              <a class="nav-link btn" type="btn" data-toggle="tab" href="#myrecruit"
                >募集</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link btn"
                type="btn"
                data-toggle="tab"
                href="#myfollowlist"
                @click="getFollowList()"
                >フォローリスト</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link btn" data-toggle="tab" href="#introduce">自己紹介</a>
            </li>
            <li class="nav-item">
              <a class="nav-link btn text-nowrap" data-toggle="tab" href="#editprofile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-edit"
                >
                  <path
                    d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                  ></path>
                  <path
                    d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                  ></path></svg
                >編集</a
              >
            </li>
          </ul>
          <div class="tab-content ml-3">
            <div class="tab-pane active" id="mylessons">
              <Mylessons></Mylessons>
            </div>
            <div class="tab-pane" id="myrecruit">
              <Myrecruits></Myrecruits>
            </div>
            <div class="tab-pane" id="myfollowlist">
              <Myfollowlist></Myfollowlist>
            </div>
            <div class="tab-pane" id="editprofile">
              <Editprofile></Editprofile>
            </div>
            <div class="tab-pane" id="introduce">
              <div class="row mx-0">
                <div class="card-body">
                  <div class="p-1" style="background-color: #eceeec; min-height: 300px">
                    <div class="row">
                      <div class="col-10">
                        {{ this.userProfile.user.introduce }}
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
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import StarRating from 'vue-star-rating';
import Mylessons from '../components/Mylessons.vue';
import Myrecruits from '../components/Myrecruits';
import Myfollowlist from '../components/Myfollowlist';
import Editprofile from './Editprofile.vue';

export default {
  components: {
    StarRating,
    Mylessons,
    Myfollowlist,
    Myrecruits,
    Editprofile,
  },
  data() {
    return {
      rating: '',
    };
  },
  computed: {
    ...mapGetters(['userProfile']),
  },
  mounted() {
    this.$store.dispatch('getMylessons');
    // this.$store.dispatch('getMyrecruits');
  },

  methods: {
    getFollowList() {
      this.$store.dispatch('getMyFollowList');
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
.nav-tabs .nav-item .nav-link.active {
  color: #79b270;
  font-size: 20px;
  background-color: #eceeec;
  border-bottom: 0.9px solid;
  border-radius: 9px 9px 0px 0px;
}
.nav-tabs .nav-item .nav-link {
  color: #636363;
}
</style>
