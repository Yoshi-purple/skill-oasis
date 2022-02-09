<template>
  <div class="row">
    <div style="background-color: #eceeec">
      <div class="row mt-3">
        <div v-if="this.mylessons.length == 0" class="mx-auto">
          <p>レッスンはありません</p>
        </div>
        <div
          class="card gx-0"
          style="width: 17rem"
          v-for="(lesson, index) in mylessons"
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
    <Deletelesson
      v-if="this.modalStatus == true"
      :lesson="lesson"
      @close="closeModal"
      @delete="deleteLesson"
    ></Deletelesson>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Deletelesson from '../modals/Deletelesson.vue';
export default {
  components: {
    Deletelesson,
  },
  data() {
    return {
      index: null,
      modalStatus: false,
      lesson: '',
    };
  },
  computed: {
    ...mapGetters(['mylessons', 'users']),
  },

  methods: {
    showPlan(index) {
      this.index = index;
      this.lesson = this.mylessons[index];
      this.modalStatus = true;
    },
    closeModal() {
      this.modalStatus = false;
    },
    deleteLesson() {
      try {
        this.$store.dispatch('deleteLesson', {
          lessonId: this.lesson.lessonId,
          objectId: this.lesson.lessonData.objectId,
        });
        this.$store.dispatch('getMylessons');
        this.closeModal();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
