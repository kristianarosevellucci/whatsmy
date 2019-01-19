<template>
    <footer class="container-fluid py-4">
      <div class="row">
        <div class="col-md-3">
          <p>{{poweredBy}}<a href="www.mobials.com" target="blank">Mobials</a></p>
        </div>
        <div class="col-md-6 text-center footer__contact">
          <p>{{footerCenterText}}</p>
        </div>
        <div class="col-md-3">
          <p class="footer__copyright">{{copyRight}}</p>
        </div>
      </div>
    </footer>
</template>

<script>
  export default {
    name: "Footer",
    props: {
      footerCenterText: {
        type: String,
        required: true
      },
      poweredBy: {
        type: String,
        required: true
      },
      copyRight: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../public/scss/application.scss";
</style>
