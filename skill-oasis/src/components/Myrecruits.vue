<template>
  <div class="row">
    <div class="card-deck" style="background-color: #eceeec">
      <div class="row mt-3">
        <div v-if="this.myRecruits.length == 0" class="mx-auto">
          <p>募集はありません</p>
        </div>
        <div
          class="card gx-0"
          style="width: 18rem"
          v-for="(recruit, index) in myRecruits"
          :key="index"
        >
          <div class="card-body">
            <h5
              class="card-title d-inline-block text-truncate"
              style="max-width: 200px; min-width: 200px"
            >
              {{ recruit.recruitData.title }}
            </h5>
            <p class="card-text text-truncate" style="min-width: 200px; max-width: 600px">
              {{ recruit.recruitData.comment }}
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
    <deleterecruit
      v-if="this.modalStatus == true"
      :recruit="recruit"
      @close="closeModal"
      @delete="deleterecruit"
    ></deleterecruit>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Deleterecruit from '../modals/Deleterecruit.vue';
export default {
  components: {
    Deleterecruit,
  },
  data() {
    return {
      index: null,
      modalStatus: false,
      recruit: '',
    };
  },
  computed: {
    ...mapGetters(['myRecruits', 'users']),
  },
  created() {
    this.$store.dispatch('getMyrecruits');
  },
  methods: {
    showPlan(index) {
      this.index = index;
      this.recruit = this.myRecruits[index];
      this.modalStatus = true;
    },
    closeModal() {
      this.modalStatus = false;
    },
    deleterecruit() {
      try {
        this.$store.dispatch('deleteRecruit', {
          recruitId: this.recruit.recruitId,
        });
        this.closeModal();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
