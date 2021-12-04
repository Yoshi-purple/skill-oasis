<template>
  <div class="container-fluid">
    <div class="container" style="max-width: 720px; height: 873px">
      <div class="card mt-3">
        <div class="card-body" style="padding: 1rem 3rem">
          <p
            class="card-title fs-3 mb-3 w-100 mx-auto text-center"
            style="border-bottom: 2.1px solid #eceeec; color: #79b270"
          >
            募集カードを作成
          </p>

          <div class="mb-3">
            <textarea
              class="form-control"
              type="text"
              rows="3"
              v-model="title"
            ></textarea>
          </div>
          <div class="mb-3">
            <textarea
              class="form-control"
              type="text"
              rows="10"
              v-model="comment"
            ></textarea>
          </div>

          <div class="d-grid gap-2 col-6 mx-auto">
            <button
              class="btn btn-lg text-white"
              style="background-color: #79b270"
              @click="makeRecruitCard()"
            >
              作成
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      comment: '',
      title: '',
    };
  },
  methods: {
    makeRecruitCard() {
      console.log(this.comment);
      this.$store.dispatch('makeRecruitment', {
        comment: this.comment,
        title: this.title,
      });
    },
  },
};
</script>
