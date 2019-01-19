<template>
  <section class="tool-summary">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <img
            :src="require(`@/../public/img/tools/${imageSrc}`)"
            :alt="imageAlt"
            class="img-responsive"
          />
        </div>
        <div class="offset-md-1 col-md-5">
          <h2 class="tool-summary__title">{{summaryTitle}}</h2>
          <ul class="tool-summary__list">
            <li>{{bullet1}}</li>
            <li>{{bullet2}}</li>
            <li>{{bullet3}}</li>
            <li>{{bullet4}}</li>
            <li>{{bullet5}}</li>
          </ul>
          <p>{{summaryText}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "ToolSummary",
    props: {
      imageSrc: {
        type: String,
        required: true
      },
      imageAlt: {
        type: String,
        required: true
      },
      summaryTitle: {
        type: String,
        required: true
      },
      summaryText: {
        type: String,
        required: true
      },
      bullet1: {
        type: String,
        required: true
      },
      bullet2: {
        type: String,
        required: true
      },
      bullet3: {
        type: String,
        required: true
      },
      bullet4: {
        type: String,
        required: true
      },
      bullet5: {
        type: String,
        required: true
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../public/scss/application.scss";
  p {
    font-size: 14px;
  }
</style>
