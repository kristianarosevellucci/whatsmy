<template>
  <div class="">
    <p class="hiw-steps__number">{{number}}</p>
    <img src="../../public/img/small-dot-accent.png" alt="Small Dot Pattern" class="dot-pattern">
    <h3 class="hiw-steps__title">{{title}}</h3>
    <p>{{description}}</p>
  </div>
</template>

<script>
  export default {
    name: "numberedStep",
    props: {
      number: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../public/scss/application.scss";
</style>
