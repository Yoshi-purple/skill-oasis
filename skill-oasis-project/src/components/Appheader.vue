<template>
  <nav
    class="navbar navbar-expand-lg navbar-light sticky-top"
    style="background-color: #303030"
  >
    <div class="container">
      <a class="navbar-brand" style="color: #79b270">Skill Oasis</a>

      <div class="collapse navbar-collapse">
        <form class="d-flex">
          <div class="input-group">
            <input
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div class="input-group-append"></div>
            <a
              class="btn input-group-append"
              type="submit"
              style="background-color: #79b270"
            >
              Search
            </a>
          </div>
        </form>
        <router-link to="Mypage">
          <button class="btn" type="button" style="color: #ffffff">コーチを探す</button>
        </router-link>
        <router-link to="Makereqruitcard">
          <div class="btn" style="color: #ffffff">コーチを募集する</div>
        </router-link>
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <router-link to="/">
          <div class="btn btn-outline-light text-white">HOME</div>
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style>
.app-header {
  z-index: 9;
  position: fixed;
  display: flex;
  background-color: #303030;
  width: 100%;
  top: 0px;
  left: 0px;
}
.header-title {
  color: #79b270;
  margin-left: 30px;
}
.search-btn {
  background-color: #79b270;
  border: #79b270;
}
.home-btn {
  margin: 30px 0;
  margin-left: auto;
  margin-right: 30px;
}
#home-btn {
  background-color: #303030;
  color: #79b270;
  border: #303030;
}
.search-coach {
  margin-right: 10px;
  color: #ffffff;
}
.reqruit-coach {
  margin-right: 10px;
  color: #ffffff;
}
</style>
