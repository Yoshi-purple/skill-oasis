<template>
  <div class="container-fluid" style="min-height: 760px">
    <div class="container p-3">
      <div class="row mt-5">
        <div class="col-lg-2 col-md-1 d-none d-md-block">
          <Iconnavbar class="col-sm d-lg-none d-block"></Iconnavbar>
          <Navbar class="col-sm d-none d-lg-block"></Navbar>
        </div>
        <div class="col-lg-10 col-md-11 col-sm-12">
          <Roombar v-for="(room, index) in rooms" :key="index" :room="room"></Roombar>
          <div v-if="this.rooms.length == 0">
            <div class="card">
              <div class="card-body">メッセージはありません</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import Iconnavbar from '../components/Iconnavbar.vue';
import Roombar from '../components/Roombar.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    Navbar,
    Iconnavbar,
    Roombar,
  },
  methods: {},
  computed: {
    ...mapGetters(['messages', 'rooms']),
  },
  mounted() {
    this.$store.commit('cleanMessages');
  },
  created() {},
};
</script>
