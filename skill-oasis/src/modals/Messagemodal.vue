<template>
  <transition class="container-fluid" name="modal" appear>
    <div class="overlay" @click.self="$emit('close')">
      <div class="card mt-5">
        <div class="card-body" style="padding: 1rem 3rem">
          <p
            class="card-title fs-3 mb-3 w-100 mx-auto text-center col-md-text-nowrap"
            style="border-bottom: 2.1px solid #eceeec; color: #79b270"
          >
            {{ user.profile.profile_name }}に送るメッセージを入力してください
          </p>

          <div class="mb-3">
            <textarea
              class="form-control"
              type="text"
              rows="3"
              cols="90"
              name=""
              id=""
              v-model="message"
            ></textarea>
          </div>

          <div class="d-grid gap-2 col-6 mx-auto">
            <button
              class="btn btn-lg text-white"
              style="background-color: #79b270"
              @click="sendMessage"
            >
              送信
            </button>
            <button
              class="btn btn-lg text-white"
              style="background-color: #efa472"
              @click="$emit('close')"
            >
              閉じる
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  computed: {},
  props: ['user'],
  data() {
    return {
      message: '',
    };
  },
  created() {},
  methods: {
    sendMessage() {
      if (this.message !== '') {
        this.$store.dispatch('sendFirstMessage', {
          message: this.message,
          receiveUser: this.user.recruitsData.recruitUser.ref,
        });
        this.$emit('close');
      } else {
        alert('メッセージを入力してください');
      }
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
