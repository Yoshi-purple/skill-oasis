<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row mt-5">
        <!-- <h1>
        <p class="text-center" style="color: #79b270; font-weight: bold">コーチを検索</p>
      </h1> -->
        <div class="row" style="min-height: 600px">
          <div class="col-lg-2 col-md-1 d-none d-md-block">
            <Iconnavbar class="col-sm d-lg-none d-block"></Iconnavbar>
            <Navbar class="col-sm d-none d-lg-block"></Navbar>
          </div>
          <div class="col-lg-10 col-md-11 col-sm-12">
            <!-- <div class="col-12"> -->
            <ais-instant-search
              :search-client="searchClient"
              index-name="focus"
              class="container"
            >
              <!-- <ais-index> -->
              <ais-search-box placeholder="search" class="text-center" />
              <!-- <ais-state-results v-slot="{ results: { hits }  }"> -->
              <ais-hits class="row mt-3">
                <div slot-scope="{ items }" style="background-color: #eceeec">
                  <div class="row">
                    <div
                      class="card gx-0"
                      v-for="item in items"
                      :key="item.lessonId"
                      @click="showPlan(item)"
                      style="min-width: 17rem; max-width: 17rem"
                    >
                      <img :src="item.image" class="card-img-top" style="height: 180px" />
                      <div class="card-body">
                        <div class="card-title">
                          <h5
                            class="card-title d-inline-block text-truncate"
                            style="max-width: 200px; min-width: 200px; font-weight: bold"
                          >
                            {{ item.lessonTitle }}
                          </h5>
                        </div>
                        <div class="card-text">
                          <p
                            class="card-text d-inline-block text-truncate"
                            style="max-width: 200px; min-width: 200px; color: #636363"
                          >
                            {{ item.introduce }}
                          </p>
                          <div class="row card-body p-0 mt-3">
                            <div class="col-2">
                              <img
                                class="card-img-top rounded-circle"
                                style="
                                  width: 30px;
                                  height: 30px;
                                  background-color: #eceeec;
                                "
                                width="100%"
                                height="180"
                                :src="item.coachingUser.image"
                              />
                            </div>
                            <div class="col-10">
                              <p
                                class="card-text d-inline-block text-truncate"
                                style="max-width: 200px; min-width: 200px; opacity: 0.6"
                              >
                                {{ item.coachingUser.profile_name }}
                              </p>
                            </div>
                          </div>
                          <div class="card-body row px-0 mt-3">
                            <div class="col-12">
                              <StarRating
                                v-model="item.rate"
                                v-bind:star-size="18"
                                :inline="true"
                                :increment="0.5"
                                :read-only="true"
                                :show-rating="false"
                                :max-rating="1"
                              >
                              </StarRating>
                              <a v-if="item.rate != 0" style="opacity: 0.6">
                                {{ item.rate }}
                              </a>
                              <a v-if="item.rate != 0" style="opacity: 0.6">
                                ({{ item.review }}件)
                              </a>
                              <a v-if="item.review == 0" style="opacity: 0.6"> - </a>
                              <a v-if="item.review == 0" style="opacity: 0.6"> (件)) </a>
                            </div>
                            <div class="col-12 px-0">
                              <a
                                class="btn"
                                @click="showPlan(item)"
                                style="border-radius: 50px; color: #79b270"
                              >
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
                                  class="feather feather-eye"
                                  style="color: #79b270"
                                >
                                  <path
                                    d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                                  ></path>
                                  <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                このプランを見る</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ais-hits>
              <!-- </ais-state-results>   -->

              <!-- </ais-index> -->
            </ais-instant-search>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import StarRating from 'vue-star-rating';
import { mapGetters } from 'vuex';
import Navbar from '../components/Navbar.vue';
import Iconnavbar from '../components/Iconnavbar.vue';

export default {
  components: {
    StarRating,
    Iconnavbar,
    Navbar,
  },
  computed: {
    ...mapGetters(['users', 'lessons']),
  },
  data() {
    return {
      searchClient: algoliasearch(
        process.env.VUE_APP_ALGOLIAID,
        process.env.VUE_APP_SEARCHONLYAPIKEY
      ),
    };
  },
  created() {},
  methods: {
    showPlan(item) {
      const id = item.lessonId;
      const result = this.lessons.filter((lesson) => {
        return lesson.lessonId === id;
      });
      this.$router.push({
        path: '/Coachprofile',
        query: { lesson: result[0] },
      });
    },
  },
};
</script>
<style></style>
