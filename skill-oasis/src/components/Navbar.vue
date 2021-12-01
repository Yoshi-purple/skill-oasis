<template>
  <ul class="nav flex-column">
    <li class="nav-item">
      <a class="nav-link text-dark text-nowrap" href="/Messagebox">メッセージ</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-dark text-nowrap" href="/Myprofile" style="cursor: pointer">
        プロフィール
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-dark text-nowrap" href="/RegisterCoach">コーチになる</a>
    </li>
  </ul>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['userProfile']),
  },
  methods: {
    showProfile() {
      this.$router.push({ path: '/Myprofile', query: this.userProfile });
    },
  },
};
</script>
