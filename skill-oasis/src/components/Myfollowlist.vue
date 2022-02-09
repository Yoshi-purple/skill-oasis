<template>
  <div class="row">
    <div style="background-color: #eceeec">
      <div class="row mt-3">
        <div v-if="this.myFollowList.length == 0" class="mx-auto">
          <p>フォローしているユーザーはいません</p>
        </div>
        <div class="card" v-for="(user, index) in myFollowList" :key="index">
          <div class="card-body" @click="showUser(index)">
            <div class="row">
              <div class="col-1 p-1">
                <img
                  class="rounded-circle"
                  style="width: 60px; height: 60px; background-color: #eceeec"
                  width="100%"
                  height="180"
                  :src="user.userData.image"
                />
              </div>
              <div class="col-10 mx-3">
                <div class="row">
                  <h5
                    class="text-start"
                    style="max-width: 200px; min-width: 200px; color: #79b270"
                  >
                    {{ user.userData.profile_name }}
                  </h5>
                </div>
                <div class="row">
                  <p
                    class="text-start text-secondary"
                    style="max-width: 200px; min-width: 200px"
                  >
                    {{ user.userData.introduce }}
                  </p>
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
export default {
  components: {},
  data() {
    return {
      index: null,
      modalStatus: false,
      recruit: '',
    };
  },
  computed: {
    ...mapGetters(['myFollowList', 'users']),
  },
  created() {
    // this.$store.dispatch('getMyFollowList');
    console.log(this.myFollowList);
  },
  methods: {
    showUser(index) {
      const user = this.myFollowList[index];
      this.$router.push({
        path: '/Userpage',
        query: { user: user.userData, uid: user.userId },
      });
      this.$store.dispatch('getTargetLessons', user.userId);
      this.$store.dispatch('getTargetUserStatus', user.userId);
    },
  },
};
</script>
<style>
.card {
  cursor: pointer;
}
</style>
