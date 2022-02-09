<template>
  <div class="row">
    <div class="mx-3" style="background-color: #eceeec">
      <div class="row mt-3">
        <div
          class="card gx-0"
          style="max-width: 18rem; min-width: 17rem"
          v-for="(lesson, index) in newLessons"
          :key="index"
          @click="showPlan(index)"
        >
          <img
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="180"
            :src="lesson.lessonData.image"
          />

          <div class="card-body">
            <h5
              class="card-title d-inline-block text-truncate"
              style="max-width: 200px; min-width: 200px; font-weight: bold"
            >
              {{ lesson.lessonData.lessonTitle }}
            </h5>
            <p
              class="card-text d-inline-block text-truncate"
              style="max-width: 200px; min-width: 200px; color: #636363"
            >
              {{ lesson.lessonData.introduce }}
            </p>
          </div>
          <div class="row card-body">
            <div class="col-2">
              <img
                class="card-img-top rounded-circle"
                style="width: 30px; height: 30px; background-color: #eceeec"
                width="100%"
                height="180"
                :src="lesson.profile.image"
              />
            </div>
            <div class="col-10">
              <p
                class="card-text d-inline-block text-truncate"
                style="max-width: 200px; min-width: 200px; opacity: 0.6"
              >
                {{ lesson.profile.profile_name }}
              </p>
            </div>
          </div>
          <div class="card-body">
            <StarRating
              v-model="lesson.rate"
              v-bind:star-size="18"
              :inline="true"
              :increment="0.5"
              :read-only="true"
              :show-rating="false"
              :max-rating="1"
            >
            </StarRating>
            <a v-if="!isNaN(lesson.rate)" style="opacity: 0.6">
              {{ lesson.rate }}
            </a>
            <a v-if="!isNaN(lesson.rate)" style="opacity: 0.6">
              ({{ lesson.review }}件)
            </a>
            <a v-if="isNaN(lesson.rate)" style="opacity: 0.6"> - </a>
            <a class="btn" @click="showPlan(index)" style="color: #79b270"
              ><svg
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
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              このプランを見る</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StarRating from 'vue-star-rating';

import { mapGetters } from 'vuex';

export default {
  components: {
    StarRating,
  },
  computed: {
    ...mapGetters(['newLessons', 'users']),
  },
  methods: {
    showPlan(index) {
      this.index = index;
      const id = this.newLessons[index].coachId;
      const card = this.newLessons[index];
      const result = this.users.filter((user) => {
        return user.id === id;
      });
      this.$router.push({
        path: '/Coachprofile',
        query: { lesson: card, user: result },
      });
    },
  },
};
</script>
