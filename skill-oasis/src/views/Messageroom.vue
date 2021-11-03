<template>
  <div class="container-fluid" style="min-height: 2160px">
    <div class="container">
      <div class="row w-100 mt-5">
        <Navbar class="col-sm"></Navbar>
        <div class="col-10">
          <div class="row">
            <div class="card-deck px-3" style="background-color: #ffffff">
              <div class="row">
                <div class="card">
                  <div class="row">
                    <div
                      class="card-img-top rounded-circle"
                      style="width: 30px; height: 30px; background-color: #eceeec"
                    ></div>
                    <!-- <router-link to="Userprofile"> -->
                    <div class="col-8">
                      <a class="fs-5" href="/Userprofile">username01</a>
                    </div>
                    <!-- </router-link> -->
                    <div class="row">
                      <div class="col-11" style="margin-left: 30px">message</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="card">
                  <div class="row">
                    <div
                      class="card-img-top rounded-circle"
                      style="width: 30px; height: 30px; background-color: #eceeec"
                    ></div>
                    <!-- <router-link to="Userprofile"> -->
                    <div class="col-8">
                      <a class="fs-5" href="/Userprofile">username01</a>
                    </div>
                    <!-- </router-link> -->
                    <div class="row">
                      <div class="col-11" style="margin-left: 30px">message</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
              class="col-2 mx-auto text-center fs-5"
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
export default {
  components: {
    Navbar,
  },
  methods: {},
};
</script>
