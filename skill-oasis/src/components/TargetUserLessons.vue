<template>
  <div class="row">
    <div style="background-color: #eceeec">
      <div class="row mt-3 ml-3">
        <div v-if="this.targetUserLessons.length == 0" class="mx-auto">
          <p>レッスンはありません</p>
        </div>
        <div
          class="card gx-0 mx-1"
          style="width: 18rem"
          v-for="(lesson, index) in targetUserLessons"
          :key="index"
        >
          <img
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="180"
            :src="lesson.lessonData.image"
          />
          <div class="card-body">
            <h5
              class="card-title text-truncate"
              style="max-width: 200px; min-width: 200px"
            >
              {{ lesson.lessonData.lessonTitle }}
            </h5>
            <p class="card-text text-truncate" style="max-width: 200px">
              {{ lesson.lessonData.introduce }}
            </p>

            <a
              class="btn text-dark btn-outline-success"
              style="opacity: 0.6"
              @click="showPlan(index)"
              >確認する</a
            >
          </div>
        </div>
      </div>
    </div>
    <Showlesson
      v-if="this.modalStatus == true"
      :lesson="lesson"
      @close="closeModal"
    ></Showlesson>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Showlesson from '../modals/Showlesson.vue';
export default {
  components: {
    Showlesson,
  },
  data() {
    return {
      index: null,
      modalStatus: false,
      lesson: '',
    };
  },
  computed: {
    ...mapGetters(['targetUserLessons', 'users']),
  },

  methods: {
    showPlan(index) {
      this.index = index;
      this.lesson = this.targetUserLessons[index];
      this.modalStatus = true;
    },
    closeModal() {
      this.modalStatus = false;
    },
  },
};
</script>
