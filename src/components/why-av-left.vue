<template>
  <div class="text-block">
    <div class="container">
      <div class="row lr-block-desktop">
          <div class="offset-md-1 col-md-4 product-wheel__text">
            <p><span class="full-width block-title pb-20">{{title}}</span>
            <span class="full-width pb-20">{{textBlock}}</span></p>
          </div>
          <router-link class=“btn-primary” to=“/”>{{linkName}}</router-link>
        <div class="offset-md-1 col-md-6">
          <div class="image-container">
            <img
              :src="require(`@/../public/img/${imageSrc}`)"
              :alt="imageAlt"
              class="img-responsive image-container__item"
            />
          </div>
        </div>
      </div>
      <div class="row lr-block-mobile">
        <div class="col-md-6">
          <div class="image-container">
            <img
              :src="require(`@/../public/img/${imageSrc}`)"
              :alt="imageAlt"
              class="img-responsive"
            />
          </div>
        </div>
        <div class="offset-md-1 col-md-5 product-wheel__text">
          <p><span class="full-width block-title pb-20">{{title}}</span>
          <span class="full-width pb-20">{{textBlock}}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "WhyAvLeft",
    props: {
      title: {
        type: String,
        required: true
      },
      textBlock: {
        type: String,
        required: true
      },
      linkName: {
        type: String,
        required: true
      },
      imageSrc: {
        type: String,
        required: true
      },
      imageAlt: {
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

  .image-container {
    background: $yellow;
    padding: 0 0 15px 0;
    transition: .5s ease;
    &:hover {
      padding: 0 5px 20px 0;
    }
  }

  .image-container__item {
    margin: -15px 0 0 -15px;
  }
</style>
