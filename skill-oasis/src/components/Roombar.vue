<template>
  <div class="card">
    <!-- <router-link to="Messageroom"> -->
    <div class="card-body" @click="showRoom(room)" style="cursor: pointer">
      <div class="row g-0 p-1">
        <img
          v-if="room.image === ''"
          class="img rounded-circle"
          style="width: 30px; height: 30px; background-color: #eceeec"
        />
        <img
          class="img rounded-circle"
          style="width: 30px; height: 30px; background-color: #eceeec"
          :src="room.image"
        />
        <div class="col-8 mx-2">
          <p class="fs-5" style="color: #79b270">{{ room.profile_name }}</p>
        </div>
      </div>
      <div class="row g-0 p-2">
        <div class="col-11" style="margin-left: 30px">{{ room.comment }}</div>
      </div>
    </div>
    <!-- </router-link> -->
  </div>
</template>
<script>
export default {
  props: ['message', 'index', 'room'],
  methods: {
    showRoom(user) {
      try {
        console.log(user);
        this.$store.dispatch('getMessages', user.id);
        this.$router.push({ path: 'Messageroom', query: { user: user } });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
