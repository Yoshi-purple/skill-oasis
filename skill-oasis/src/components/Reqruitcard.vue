<template>
  <div class="row">
    <div class="card-deck px-3" style="background-color: #ffffff">
      <p>募集カード一覧</p>
      <div class="row">
        <div class="row">
          <div class="col-12" v-for="(card, index) in recruitCards" :key="index">
            <div class="card">
              <div class="card-body">
                <div class="row g-0 w-50">
                  <div class="col-1">
                    <img
                      class="card-img-top rounded-circle mx-auto"
                      style="width: 30px; height: 30px; background-color: #eceeec"
                      :src="card.image"
                    />
                  </div>
                  <p class="col-11 px-3" style="color: #79b270">
                    {{ card.profile_name }}
                  </p>
                </div>
                <h5 class="card-title">{{ card.recruit_title }}</h5>
                <p class="card-text">
                  {{ card.cardtext }}
                </p>
                <a @click="openCard(index)" class="btn btn-dark">募集カードを開く</a>
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
export default {
  data() {
    return {
      image: null,
      messageModal: false,
    };
  },
  computed: {
    ...mapGetters(['recruitCards', 'users']),
  },
  created() {},
  methods: {
    openCard(index) {
      const card = this.recruitCards[index];
      this.$router.push({ path: '/Userprofile', query: { card: card } });
    },
  },
};
</script>
