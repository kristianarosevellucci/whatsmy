<template>
  <div class="cta-banner text-center">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <h2>{{ctaText}}</h2>
            <br>
            <router-link class="btn-primary" to=“/contact”>{{linkName}}</router-link>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "CtaBanner",
    props: {
      ctaText: {
        type: String,
        required: true
      },
      linkName: {
        type: String,
        required: true
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../public/scss/application.scss";
</style>
