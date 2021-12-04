<template>
  <div class="container-fluid" style="height: 2160px">
    <div class="container mt-5" style="max-width: 720px">
      <div class="card text-center" style="padding: 0 30px">
        <div class="card-body" style="padding: 1rem 3rem">
          <p
            class="card-title fs-3 mb-5 w-100 mx-auto"
            style="border-bottom: 2.1px solid #eceeec; color: #79b270"
          >
            プロフィールを編集
          </p>
          <div class="row g-3">
            <div class="col-sm">
              <div class="row">
                <p>
                  <img
                    v-if="this.newAvator === ''"
                    class="img rounded-circle mx-auto px-0"
                    style="width: 100px; height: 100px; background-color: #eceeec"
                  />
                  <img
                    v-if="this.newAvator !== ''"
                    class="img rounded-circle mx-auto px-0"
                    style="width: 100px; height: 100px; background-color: #eceeec"
                    :src="newAvator"
                  />
                </p>
              </div>
              <div class="row">
                <label>
                  <span class="btn-sm btn-light" @change="selectedFile">
                    画像を設定
                    <input type="file" style="display: none" />
                  </span>
                </label>
              </div>
            </div>
            <div class="col-sm mt-3">
              <p class="mb-0" style="text-align: left">ユーザー名</p>
              <input
                type="text"
                class="form-control mb-3"
                style="background-color: #eceeec; border: none"
                v-model="profileName"
              />
              <p class="mb-0" style="text-align: left">目標</p>
              <input
                type="text"
                class="form-control"
                style="background-color: #eceeec; border: none"
                placeholder="例:大会に出れるレベルまで行きたいです"
                v-model="goal"
              />
            </div>
          </div>
          <div class="row">
            <p class="card-text-left fs-5 w-50">自己紹介</p>
            <textarea
              class="form-control"
              style="background-color: #eceeec; border: none"
              rows="12"
              v-model="comment"
            ></textarea>
          </div>
          <div class="d-grid gap-2 col-12 mx-auto justify-content-center">
            <button
              class="btn mx-auto mt-3"
              style="
                background-color: #79b270;
                color: #fff;
                border: #79b270;
                border-radius: 6px;
                width: 100px;
              "
              @click="sendEdit()"
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
// import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      profileName: '',
      goal: '',
      comment: '',
      newAvator: '',
    };
  },
  mounted() {},
  computed: {
    ...mapGetters[('userProfile', 'loginUser')],
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
          this.newAvator = img;
          console.log(this.newAvator);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async sendEdit() {
      try {
        await this.$store.dispatch('makeProfile', {
          profileName: this.profileName,
          goal: this.goal,
          comment: this.comment,
          image: this.newAvator,
        });
        this.$store.commit('setUserProfile', {
          profileName: this.profileName,
          goal: this.goal,
          comment: this.comment,
          image: this.newAvator,
        });
        this.$router.push('Myprofile');
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
