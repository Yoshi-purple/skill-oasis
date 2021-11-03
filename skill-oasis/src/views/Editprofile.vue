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
              <figure
                class="figure rounded-circle"
                style="width: 100px; height: 100px; background-color: #eceeec"
              ></figure>
              <p class="fs-6">画像を設定</p>
            </div>
            <div class="col-sm mt-3">
              <p class="mb-0" style="text-align: left">ユーザー名</p>
              <input
                type="text"
                class="form-control mb-3"
                style="background-color: #eceeec; border: none"
                placeholder="例:あんぱん食べたい人"
              />
              <p class="mb-0" style="text-align: left">目標</p>
              <input
                type="text"
                class="form-control"
                style="background-color: #eceeec; border: none"
                placeholder="例:大会に出れるレベルまで行きたいです"
              />
            </div>
          </div>
          <div class="row">
            <p class="card-text-left fs-5 w-50">自己紹介</p>
            <textarea
              class="form-control"
              style="background-color: #eceeec; border: none"
              rows="12"
            ></textarea>
          </div>
          <div class="row mt-3">
            <router-link to="/Myprofile">
              <button
                class="btn mx-auto"
                style="
                  background-color: #79b270;
                  color: #fff;
                  border: #79b270;
                  border-radius: 6px;
                  width: 100px;
                "
                href="#/Myprofile"
              >
                作成
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
