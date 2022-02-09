<template>
  <div class="container-fluid" style="min-height: 2160px">
    <div class="container">
      <div class="row w-100 mt-5">
        <div class="col-lg-2 col-md-1 d-none d-md-block">
          <Iconnavbar class="col-sm d-lg-none d-block"></Iconnavbar>
          <Navbar class="col-sm d-none d-lg-block"></Navbar>
        </div>
        <div class="col-lg-10 col-md-11 col-sm-12">
          <div class="message-group row">
            <Messagebar
              v-for="(message, index) in messages"
              :key="index"
              :message="message"
            ></Messagebar>
          </div>

          <div class="row mt-3">
            <textarea
              class="form-control"
              style="background-color: #ffffff; border: none"
              rows="12"
              v-model="message"
            ></textarea>
          </div>
          <div class="row gx-3 px-2 mt-5">
            <div
              class="col-6 btn mx-auto"
              style="background-color: #79b270; color: #ffffff"
              @click="sendMessage"
            >
              送信
            </div>
          </div>
          <div class="row gx-3 px-2 mt-3">
            <div
              class="col-6 mx-auto btn"
              style="background-color: #ffffff"
              @click="openModal()"
            >
              ユーザーを評価
            </div>
          </div>
        </div>
      </div>
    </div>
    <RatingModal v-if="this.modalStatus === true" @close="closeModal" :user="user">
    </RatingModal>
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import Iconnavbar from '../components/Iconnavbar.vue';
import Messagebar from '../components/Messagebar.vue';
import RatingModal from '../modals/Ratingmodal.vue';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      message: '',
      room: this.$route.query.room,
      user: '',
      modalStatus: false,
    };
  },
  computed: {
    ...mapGetters(['messages']),
  },
  components: {
    Navbar,
    Iconnavbar,
    Messagebar,
    RatingModal,
  },
  created() {
    this.$store.dispatch('getMessages', {
      roomId: this.room.id,
    });
    this.user = this.room.roomUser;
  },
  methods: {
    sendMessage() {
      if (this.message !== '') {
        this.$store.dispatch('sendMessage', {
          message: this.message,
          roomId: this.room.id,
        });
        this.message = '';
      } else {
        alert('メッセージを入力してください');
      }
    },
    openModal() {
      this.modalStatus = true;
    },
    closeModal() {
      this.modalStatus = false;
    },
  },
};
</script>
<style>
.message-group {
  max-height: 600px;
  margin-bottom: 10px;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
