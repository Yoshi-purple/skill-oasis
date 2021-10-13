<template>
  <div class="container-fluid">
    <div style="background-color: #79b270">
      <p class="fs-5" style="color: #ffffff; text-align: center; padding: 15px">
        培った知識やスキルを共有しましょう！
      </p>
    </div>
    <div class="container" style="max-width: 720px; height: 873px">
      <div class="card mt-3">
        <div class="card-body" style="padding: 1rem 3rem">
          <p
            class="card-title fs-3 mb-3 w-100 mx-auto text-center"
            style="border-bottom: 2.1px solid #eceeec; color: #79b270"
          >
            何を教えますか？
          </p>

          <div class="mb-3">
            <label for="coachingTitleInputForm" class="form-label">タイトル</label>
            <textarea class="form-control" type="text" rows="3" name="" id=""></textarea>
          </div>
          <div class="mb-3">
            <input
              type="file"
              class="form-control form-control-sm"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
              aria-label="Upload"
              style="background-color: #eceeec"
            />
          </div>
          <div class="mb-3">
            <input
              type="file"
              class="form-control form-control-sm"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
              aria-label="Upload"
              style="background-color: #eceeec"
            />
          </div>
          <div class="mb-3">
            <label for="coachingTitleInputForm" class="form-label">自己紹介</label>
            <textarea class="form-control" type="text" rows="15" name="" id=""></textarea>
          </div>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-lg text-white" style="background-color: #79b270">
              作成
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
