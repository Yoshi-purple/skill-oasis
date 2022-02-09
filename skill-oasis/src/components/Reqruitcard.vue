<template>
  <div class="row">
    <div class="card-deck mx-3" style="background-color: #eceeec">
      <!-- <p>募集カード一覧</p> -->
      <div class="row mt-3">
        <div class="row">
          <div
            class="col-lg-6 col-md-12 col-sm-12"
            v-for="(card, index) in recruitCards"
            :key="index"
            @click="openCard(index)"
          >
            <div class="card">
              <div class="card-body">
                <div class="row g-0 w-50">
                  <div class="col-1">
                    <img
                      class="card-img-top rounded-circle mx-auto"
                      style="width: 30px; height: 30px; background-color: #eceeec"
                      :src="card.profile.image"
                    />
                  </div>
                  <p class="col-11 px-3 text-truncate" style="opacity: 0.6">
                    {{ card.profile.profile_name }}
                  </p>
                </div>
                <h5
                  class="card-title text-truncate fs-4"
                  style="min-width: 200px; max-width: 600px; font-weight: bold"
                >
                  {{ card.recruitsData.title }}
                </h5>
                <p
                  class="card-text text-truncate"
                  style="max-width: 600px; min-width: 200px; color: #636363"
                >
                  {{ card.recruitsData.comment }}
                </p>
                <a @click="openCard(index)" class="btn px-0" style="color: #79b270"
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
                  募集カードを開く</a
                >
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
      user: '',
    };
  },
  computed: {
    ...mapGetters(['recruitCards', 'users']),
  },
  created() {},
  methods: {
    openCard(index) {
      const card = this.recruitCards[index];
      const result = this.users.filter((user) => {
        return user.id === card.recruitsData.recruitUserId;
      });

      this.$router.push({ path: '/Userprofile', query: { card: card, user: result } });
    },
  },
};
</script>
