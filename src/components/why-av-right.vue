<template>
  <div class="text-block">
    <div class="container">
      <div class="row lr-block-desktop">
        <div class="col-md-6">
          <div class="img-container">
            <img
              :src="require(`@/../public/img/${imageSrc1}`)"
              :alt="imageAlt1"
              class="text-block__add-img left rellax"
              data-rellax-speed=".5"
            />

            <img
              :src="require(`@/../public/img/${imageSrc2}`)"
              :alt="imageAlt2"
              class="text-block__graph-img left rellax"
              data-rellax-speed="-.15"
            />
          </div>
          <div class="color-bands">
            <div class="left-bar yellow-bar"></div>
            <div class="left-bar pink-bar"></div>
            <div class="left-bar blue-bar"></div>
          </div>
        </div>
        <div class="offset-md-1 col-md-4">
          <p>
          <span class="text-block__number">{{number}}</span><br>
          <span class="text-block__title h3">{{title}}</span>
          <span>{{textBlock}}</span>
        </p>
        </div>
      </div>
      <div class="row lr-block-mobile">
        <div class="offset-md-1 col-md-6">
          <div class="img-container">
            <img
              :src="require(`@/../public/img/${imageSrc1}`)"
              :alt="imageAlt1"
              class="text-block__add-img"
            />

            <img
              :src="require(`@/../public/img/${imageSrc2}`)"
              :alt="imageAlt2"
              class="text-block__graph-img"
            />
          </div>
        </div>
        <div class="offset-md-1 col-md-5 centered-text">
          <p><br><span class="full-width h3 pb-20">{{title}}</span><br>
          <span class="full-width pb-20">{{textBlock}}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "WhyAvRight",
    props: {
      title: {
        type: String,
        required: true
      },
      number: {
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
      imageSrc1: {
        type: String,
        required: true
      },
      imageAlt1: {
        type: String,
        required: true
      },
      imageSrc2: {
        type: String,
        required: true
      },
      imageAlt2: {
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
