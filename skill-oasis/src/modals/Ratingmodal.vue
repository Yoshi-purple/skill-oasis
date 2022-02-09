<template>
  <transition class="container-fluid" name="modal" appear>
    <div class="overlay" @click.self="$emit('close')">
      <div class="card w-30 mt-5">
        <div class="card-body" style="padding: 3rem 6rem">
          <div class="mx-auto">
            <p class="fs-3 text-nowrap">{{ user.data.profile_name }}を評価する</p>
            <StarRating
              class="mx-auto"
              v-model="rating"
              v-bind:increment="0.5"
              v-bind:show-rating="true"
              v-bind:star-size="30"
              @rating-selected="setRating"
            ></StarRating>
          </div>

          <div class="d-grid col-9 mx-auto mt-3">
            <button
              class="btn btn-lg text-white"
              style="background-color: #79b270"
              @click="sendRating()"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import StarRating from 'vue-star-rating';
export default {
  computed: {},
  components: {
    StarRating,
  },
  props: ['user'],
  data() {
    return {
      message: '',
      // targetUser: '',
      rating: 0,
    };
  },
  created() {},
  methods: {
    setRating(rating) {
      this.rating = rating;
    },
    sendRating() {
      this.$store.dispatch('sendReview', {
        rate: this.rating,
        userUid: this.user.uid,
      });
      this.$emit('close');
    },
  },
};
</script>
<style>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}
.modal-enter,
.modal-leave {
  opacity: 0;
}
.modal-leave-active {
  transition: opacity 0.3s ease 0.1s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}
li {
  list-style: none;
}

.overlay {
  /*要素を重ねた時の順番*/
  z-index: 1;

  /*画面全体を覆う設定*/
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  /*画面の中央に要素を表示させる設定*/
  display: flex;
  align-items: center;
  justify-content: center;
}
.content {
  z-index: 2;
  width: 10%;
  padding: 1em;
  background: #fff;
  border-radius: 10px;
}
</style>
