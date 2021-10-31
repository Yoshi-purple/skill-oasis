<template>
  <div class="container-fluid" style="min-height: 2160px">
    <div class="container">
      <div class="row w-100 mt-5">
        <div class="col-sm">
          <Navbar class="col-sm"></Navbar>
        </div>
        <div class="col-lg-10 col-md-12">
          <Coachranking class="row"></Coachranking>
          <Manyevaluationscoaches class="row mt-3"></Manyevaluationscoaches>
          <Reqruitcard class="row mt-3"></Reqruitcard>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import Coachranking from '../components/Coachranking.vue';
import Manyevaluationscoaches from '../components/Manyevaluationscoaches.vue';
import Reqruitcard from '../components/Reqruitcard.vue';

export default {
  components: {
    Navbar,
    Coachranking,
    Manyevaluationscoaches,
    Reqruitcard,
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
</style>
