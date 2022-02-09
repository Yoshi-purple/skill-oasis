<template>
  <div class="card">
    <div class="card-body" @click="showRoom(room)" style="cursor: pointer">
      <div class="row g-0 p-1">
        <img
          v-if="room.roomUser.data.image === ''"
          class="img rounded-circle"
          style="width: 30px; height: 30px; background-color: #eceeec"
        />
        <img
          class="img rounded-circle"
          style="width: 30px; height: 30px; background-color: #eceeec"
          :src="room.roomUser.data.image"
        />
        <div class="col-8 mx-2">
          <p class="fs-5" style="color: #79b270">{{ room.roomUser.data.profile_name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['message', 'index', 'room'],
  methods: {
    showRoom(room) {
      this.$store.commit('clearMessages');
      this.$router.push({ path: 'Messageroom', query: { room: room } });
    },
  },
};
</script>
