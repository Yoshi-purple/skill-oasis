<template>
  <div class="card">
    <!-- <router-link to="Messageroom"> -->
    <div class="card-body" @click="showRoom" style="cursor: pointer">
      <div class="row g-0 p-1">
        <img
          class="img rounded-circle"
          style="width: 30px; height: 30px; background-color: #eceeec"
          :src="room.image"
        />
        <div class="col-8 mx-2">
          <p class="fs-5" style="color: #79b270">{{ room.profile_name }}</p>
          <!-- <p class="fs-5" style="color: #79b270">{{ message.profile_name }}</p> -->
        </div>
      </div>
      <div class="row g-0 p-2">
        <div class="col-11" style="margin-left: 30px">{{ room.comment }}</div>
        <!-- <div class="col-11" style="margin-left: 30px">{{ message.comment }}</div> -->
      </div>
    </div>
    <!-- </router-link> -->
  </div>
</template>
<script>
export default {
  props: ['message', 'index', 'room'],
  methods: {
    showRoom() {
      this.$router.push('Messageroom');
    },
  },
};
</script>
