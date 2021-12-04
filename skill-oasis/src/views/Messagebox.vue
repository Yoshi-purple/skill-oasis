<template>
  <div class="container-fluid" style="min-height: 2160px">
    <div class="container">
      <div class="row w-100 mt-5">
        <Navbar class="col-sm"></Navbar>
        <div class="col-10">
          <Roombar v-for="(room, index) in rooms" :key="index" :room="room"></Roombar>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import Roombar from '../components/Roombar.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    Navbar,
    Roombar,
  },
  methods: {},
  computed: {
    ...mapGetters(['messages', 'rooms']),
  },
  mounted() {},
  created() {},
};
</script>
