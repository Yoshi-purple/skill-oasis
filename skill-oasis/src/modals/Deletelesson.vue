<template>
  <transition class="container-fluid" name="modal" appear>
    <div class="overlay" @click.self="$emit('close')">
      <div class="gx-3 mx-auto">
        <div class="row g-1">
          <div class="card deleteLesson-group">
            <div
              class="row card-body mx-auto gx-5"
              style="max-width: 900px; height: auto"
            >
              <div class="col-lg-8 col-md-12">
                <img
                  class="img-fluid"
                  style="background-color: #eceeec"
                  :src="this.lesson.lessonData.image"
                />
              </div>
              <div class="col-lg-4 col-md-12">
                <!-- <div class="row"> -->
                <p>レッスンタイトル</p>
                <div
                  class="gx-3 mx-auto mb-3"
                  style="max-width: 100%; height: auto; background-color: #eceeec"
                >
                  <div class="p-1">{{ this.lesson.lessonData.lessonTitle }}</div>
                </div>
                <p>レッスン詳細</p>
                <div
                  class="gx-3 mx-auto mb-3"
                  style="max-width: 100%; height: auto; background-color: #eceeec"
                >
                  <div class="p-1">{{ this.lesson.lessonData.introduce }}</div>
                </div>
                <div class="row mx-auto">
                  <button
                    class="btn btn-outline-danger text-nowrap"
                    @click="$emit('delete')"
                  >
                    このレッスンを削除する
                  </button>
                  <button
                    class="btn text-light mt-3"
                    style="background-color: #79b270"
                    @click="$emit('close')"
                  >
                    閉じる
                  </button>
                </div>
                <!-- </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  computed: {},
  components: {},
  props: ['lesson'],
  data() {
    return {};
  },
  created() {},
  methods: {},
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
.deleteLesson-group {
  max-height: 600px;
  margin-bottom: 10px;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
