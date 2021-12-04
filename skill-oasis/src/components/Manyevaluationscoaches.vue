<template>
  <div class="row">
    <div class="card-deck" style="background-color: #ffffff">
      <p class="px-3">評価件数が多いコーチ</p>
      <div class="row">
        <div
          class="card gx-0"
          style="width: 18rem"
          v-for="(lesson, index) in lessons"
          :key="index"
        >
          <img
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="180"
            :src="lesson.image"
          />
          <div class="card-body">
            <h5 class="card-title">{{ lesson.lesson_title }}</h5>
            <p class="card-text">
              {{ lesson.lesson_detail }}
            </p>
            <a
              class="btn text-light"
              style="background-color: #79b270"
              @click="showPlan(index)"
              >このプランを見る</a
            >
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
    return {
      index: null,
    };
  },
  computed: {
    ...mapGetters(['lessons', 'users']),
  },
  methods: {
    showPlan(index) {
      this.index = index;
      const id = this.lessons[index].coachinguser_id;
      const card = this.lessons[index];
      console.log(id);
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
