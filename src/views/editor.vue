<template>
  <div>
    <app-header></app-header>
    <app-body></app-body>
  </div>
</template>
<script>
import appHeader from "@/views/layout/header.vue";
import appBody from "@/views/main.vue";
export default {
  components: {
    appHeader,
    appBody
  }
};
</script>