<template>
  <div class="card">
    <div class="card-body" style="cursor: pointer">
      <div class="row g-0 p-1">
        <img
          v-if="message.sendUser.image === 'null'"
          class="img rounded-circle"
          style="width: 30px; height: 30px; background-color: #eceeec"
        />
        <img
          class="img rounded-circle"
          style="width: 30px; height: 30px; background-color: #eceeec"
          :src="message.sendUser.image"
        />
        <div class="col-8 mx-2">
          <p class="fs-4" style="color: #79b270">
            {{ message.sendUser.profile_name }}
          </p>
        </div>
        <div class="col-sm mx-2">
          <p>
            <span class="fs-6 text-dark" style="opacity: 45%">
              {{ message.year }}/{{ message.month }}/{{ message.date }}
              {{ message.hours }}:{{ message.minutes }}</span
            >
          </p>
        </div>
      </div>
      <div class="row g-0 p-1">
        <div class="col-10" style="margin-left: 30px">{{ message.data.message }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['message', 'index'],
  methods: {},
};
</script>
