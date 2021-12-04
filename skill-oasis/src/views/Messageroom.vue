<template>
  <div class="container-fluid" style="min-height: 2160px">
    <div class="container">
      <div class="row w-100 mt-5">
        <Navbar class="col-sm"></Navbar>
        <div class="col-10">
          <Messagebar
            v-for="(message, index) in messages"
            :key="index"
            :message="message"
          ></Messagebar>

          <div class="row mt-3">
            <textarea
              class="form-control"
              style="background-color: #ffffff; border: none"
              rows="12"
            ></textarea>
          </div>
          <div class="row gx-3 px-2 mt-5">
            <div
              class="col-6 btn mx-auto"
              style="background-color: #79b270; color: #ffffff"
            >
              送信
            </div>
          </div>
          <div class="row gx-3 px-2 mt-3">
            <p
              class="col-2 mx-auto text-center fs-5 text-nowrap"
              style="border-bottom: 1px solid #79b270"
            >
              ユーザーを評価
            </p>
          </div>
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
  computed: {
    ...mapGetters(['messages']),
  },
  components: {
    Navbar,
    Messagebar,
  },
  methods: {},
};
</script>
