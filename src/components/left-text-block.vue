<template>
  <div class="text-block">
    <div class="container">
      <div class="row lr-block-desktop">
          <div class="col-md-5 product-wheel__text">
            <p><span class="full-width bold pb-20">{{inlineTestimonial1}}</span>
            <span class="full-width pb-20">{{textBlock1}}</span>
            <span class="full-width bold pb-20">{{inlineTestimonial2}}</span>
            <span class="full-width">{{textBlock2}}</span></p>
          </div>
          <router-link class=“btn-primary” to=“/”>{{linkName}}</router-link>
        <div class="offset-md-1 col-md-6">
          <img
            :src="require(`@/../public/img/${imageSrc}`)"
            :alt="imageAlt"
            class="img-responsive"
          />
        </div>
      </div>
      <div class="row lr-block-mobile">
        <div class="col-md-6">
          <img
            :src="require(`@/../public/img/${imageSrc}`)"
            :alt="imageAlt"
            class="img-responsive"
          />
        </div>
        <div class="offset-md-1 col-md-5 product-wheel__text">
          <p><span class="full-width bold pb-20">{{inlineTestimonial1}}</span>
          <span class="full-width pb-20">{{textBlock1}}</span>
          <span class="full-width bold pb-20">{{inlineTestimonial2}}</span>
          <span class="full-width">{{textBlock2}}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LeftTextBlock",
    props: {
      inlineTestimonial1: {
        type: String,
        required: true
      },
      textBlock1: {
        type: String,
        required: true
      },
      inlineTestimonial2: {
        type: String,
        required: true
      },
      textBlock2: {
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
</style>
