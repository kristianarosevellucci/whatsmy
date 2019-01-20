<template>
  <section class="home-lead">
    <div class="container-fluid text-center">
      <div class="offset-sm-2 col-sm-8">
        <h2 class="h3">{{title}}</h2>
        <p class="lead">{{text}}</p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "FullText",
    props: {
      title: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../public/scss/application.scss";
</style>
