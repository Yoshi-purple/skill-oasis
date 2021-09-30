<template>
  <header class="app-header">
    <h1 class="header-title">skill oasis</h1>
    <input type="text" style="margin: 30px 0" />
    <button style="margin: 30px 0" class="search-btn">検索</button>
    <span style="margin: 30px 10px" class="search-coach">コーチを探す</span>
    <span style="margin: 30px 10px" class="reqruit-coach">コーチを募集する</span>
    <router-link class="home-btn" to="/">
      <button id="home-btn">HOME</button>
    </router-link>
  </header>
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
