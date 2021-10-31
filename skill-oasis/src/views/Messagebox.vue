<template>
  <div class="container-fluid" style="min-height: 2160px">
    <div class="container">
      <div class="row w-100 mt-5">
        <Navbar class="col-sm"></Navbar>
        <div class="col-10">
          <Messagebar></Messagebar>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import Messagebar from '../components/Messagebar.vue';
export default {
  components: {
    Navbar,
    Messagebar,
  },
  methods: {},
};
</script>
