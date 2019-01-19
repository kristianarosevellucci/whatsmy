<template>

<section class="tools-hero">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-5">
        <div class="tools-hero__text">
          <p class="subtitle">{{toolSubtitle}}</p>
          <h1>{{toolTitle}}</h1>
          <p class="lead tools-hero__lead">{{toolDescription}}</p>
          <router-link class="btn-primary" to=“/”>{{linkName}}</router-link>
        </div>
      </div>
      <div class="col-md-7 tools-hero__img-container">
        <img
          :src="require(`@/../public/img/tools/${imageSrc}`)"
          :alt="imageAlt"
          class="img-responsive tools-hero__img"
        />
      </div>
    </div>
  </div>
</section>

</template>

<script>
  export default {
    name: "ToolsHero",
    props: {
      imageSrc: {
        type: String,
        required: true
      },
      imageAlt: {
        type: String,
        required: true
      },
      toolSubtitle: {
        type: String,
        required: true
      },
      toolTitle: {
        type: String,
        required: true
      },
      toolDescription: {
        type: String,
        required: true
      },
      linkName: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../public/scss/application.scss";
  p {
    font-size: 14px;
  }
</style>
