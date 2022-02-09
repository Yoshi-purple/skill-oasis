<template>
  <div class="container-fluid" style="min-height: 760px">
    <div class="container">
      <div class="row w-100 mt-5">
        <div class="col-lg-2 col-md-1 d-none d-md-block">
          <Iconnavbar class="col-sm d-lg-none d-block"></Iconnavbar>
          <Navbar class="col-sm d-none d-lg-block"></Navbar>
        </div>
        <div class="col-lg-10 col-md-11 col-sm-12">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="tab" href="#popular">人気</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#new" @click="getNewLessons()"
                >新着</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#recruit" @click="getRecruits()"
                >募集</a
              >
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane active" id="popular">
              <Coachranking class="row"></Coachranking>
            </div>
            <div class="tab-pane" id="new">
              <Newlessons class="row"></Newlessons>
            </div>
            <div class="tab-pane" id="recruit">
              <Reqruitcard class="row"></Reqruitcard>
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
import Coachranking from '../components/Coachranking.vue';
import Newlessons from '../components/Newlessons.vue';
import Reqruitcard from '../components/Reqruitcard.vue';

export default {
  components: {
    Navbar,
    Iconnavbar,
    Coachranking,
    Newlessons,
    Reqruitcard,
  },
  methods: {
    getNewLessons() {
      this.$store.dispatch('getNewLessons');
    },
    getRecruits() {
      this.$store.dispatch('getRecruits');
    },
  },
};
</script>
<style>
.card {
  min-width: 220px;
  max-width: 2700px;
  margin-bottom: 10px !important;
  margin: auto;
}
.nav-tabs .nav-item .nav-link.active {
  color: #79b270;
  font-size: 20px;
  background-color: #eceeec;
  border-bottom: 0.9px solid;
  border-radius: 9px 9px 0px 0px;
}
.nav-tabs .nav-item .nav-link {
  color: #636363;
}
</style>
