<template>
  <div class="container-fluid" style="height: 1440px">
    <div style="background-color: #79b270">
      <p class="fs-3" style="color: #ffffff; text-align: center; padding: 15px">
        登録が完了しました。ようこそ、{{ loginUser.username }}さん。
      </p>
    </div>
    <div class="container" style="max-width: 720px; height: 873px">
      <div class="card text-center" style="padding: 0 30px">
        <div class="card-body" style="padding: 1rem 3rem">
          <p
            class="card-title fs-3 mb-5 w-100 mx-auto"
            style="border-bottom: 2.1px solid #eceeec; color: #79b270"
          >
            プロフィールを作成
          </p>
          <div class="row g-3">
            <div class="col-sm">
              <div class="row">
                <p>
                  <img
                    v-if="this.avator === ''"
                    class="img rounded-circle mx-auto px-0"
                    style="width: 100px; height: 100px; background-color: #eceeec"
                  />
                  <img
                    v-if="this.avator !== ''"
                    class="img rounded-circle mx-auto px-0"
                    style="width: 100px; height: 100px; background-color: #eceeec"
                    :src="avator"
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
                v-model="profileName"
                type="text"
                class="form-control mb-3"
                style="background-color: #eceeec; border: none"
                placeholder="例:gamer01"
              />
              <p class="mb-0" style="text-align: left">目標</p>
              <input
                v-model="goal"
                type="text"
                class="form-control"
                style="background-color: #eceeec; border: none"
                placeholder="例:上手くなって配信したい"
              />
            </div>
          </div>
          <div class="row">
            <p class="card-text-left fs-5 w-50">自己紹介</p>
            <textarea
              v-model="comment"
              class="form-control"
              style="background-color: #eceeec; border: none"
              rows="12"
            ></textarea>
          </div>
          <div class="mt-3">
            <span
              @click="makeProfile()"
              ref="/Myprofile"
              class="btn mx-auto"
              style="
                background-color: #79b270;
                color: #fff;
                border: #79b270;
                border-radius: 6px;
                width: 100px;
              "
            >
              作成
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  created() {},
  computed: {
    ...mapGetters(['loginUser']),
  },
  data() {
    return {
      profileName: '',
      goal: '',
      comment: '',
      image: '',
      avator: '',
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
          this.avator = img;
          console.log(this.avator);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async makeProfile() {
      await this.$router.push('/Myprofile');
      try {
        this.$store.dispatch('makeProfile', {
          profileName: this.profileName,
          goal: this.goal,
          comment: this.comment,
          image: this.avator,
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
