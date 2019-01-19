<template>
  <div class="statistics text-center">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <p class="subtitle">{{statisticsSubtitle}}</h2>
            <h2 class="statistics__title">{{statisticsTitle}}</h2>
          </div>
        </div>
        <div class="row">
          <div class="offset-2 col-md-4">
            <p class="statistics__number">{{statNumber1}}</p>
            <p class="statistics__label">{{statTitle1}}</p>
          </div>
          <div class="col-md-4">
            <p class="statistics__number">{{statNumber2}}</p>
            <p class="statistics__label">{{statTitle2}}</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "Statistics2",
    props: {
      statNumber1: {
        type: String,
        required: true
      },
      statNumber2: {
        type: String,
        required: true
      },
      statTitle1: {
        type: String,
        required: true
      },
      statTitle2: {
        type: String,
        required: true
      },
      statisticsSubtitle: {
        type: String,
        required: true
      },
      statisticsTitle: {
        type: String,
        required: true
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../public/scss/application.scss";
</style>
