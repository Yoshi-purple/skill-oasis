<template>
  <div class="container-fluid" style="min-height: 2160px">
    <div class="container">
      <div class="row w-100 mt-5">
        <Navbar class="col-sm"></Navbar>
        <div class="col-10">
          <Messagebar
            v-for="(room, index) in rooms"
            :key="index"
            :room="room"
          ></Messagebar>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import Messagebar from '../components/Messagebar.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    Navbar,
    Messagebar,
  },
  methods: {},
  computed: {
    ...mapGetters(['messages', 'rooms']),
  },
  mounted() {
    this.$store.dispatch('getMessages');
    this.$store.dispatch('getRooms');
  },
};
</script>
