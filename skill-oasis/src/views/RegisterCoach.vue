<template>
  <div class="container-fluid">
    <div style="background-color: #79b270">
      <p class="fs-5" style="color: #ffffff; text-align: center; padding: 15px">
        培った知識やスキルを共有しましょう！
      </p>
    </div>
    <div class="container" style="max-width: 720px; height: auto">
      <div class="card mt-3">
        <div class="card-body" style="padding: 1rem 3rem">
          <p
            class="card-title fs-3 mb-3 w-100 mx-auto text-center"
            style="border-bottom: 2.1px solid #eceeec; color: #79b270"
          >
            何を教えますか？
          </p>

          <div class="mb-3">
            <label type="text" for="coachingTitleInputForm" class="form-label"
              >タイトル</label
            >
            <textarea
              class="form-control"
              type="text"
              v-model="lessonTitle"
              rows="3"
              name=""
              id=""
            ></textarea>
          </div>
          <!-- <div class="mb-3">
            <input
              type="file"
              class="form-control form-control-sm"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
              aria-label="Upload"
              style="background-color: #eceeec"
            />
          </div> -->
          <div class="mb-3">
            <input
              type="file"
              class="form-control form-control-sm"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
              aria-label="Upload"
              style="background-color: #eceeec"
              @change="selectedFile"
            />
            <div class="row mt-3">
              <img :src="this.image" />
            </div>
          </div>
          <div class="mb-3">
            <label for="coachingTitleInputForm" class="form-label">自己紹介</label>
            <textarea
              class="form-control"
              type="text"
              v-model="coachIntroduce"
              rows="15"
              name=""
              id=""
            ></textarea>
          </div>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button
              class="btn btn-lg text-white"
              style="background-color: #79b270"
              @click="sendCoachResister()"
            >
              作成
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lessonTitle: '',
      coachIntroduce: '',
      image: '',
    };
  },
  methods: {
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    },
    selectedFile(event) {
      console.log(event);
      const images = event.target.files || event.dataTransfer.files;
      this.getBase64(images[0])
        .then((img) => {
          this.image = img;
          console.log(this.image);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    sendCoachResister() {
      try {
        this.$store.dispatch('makeLesson', {
          lessonTitle: this.lessonTitle,
          introduce: this.coachIntroduce,
          image: this.image,
        });
        this.$router.push('/Myprofile');
        console.log(this.lessonTitle);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
