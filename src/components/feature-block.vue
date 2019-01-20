<template>
  <div class="features__item">
    <h3>
      <img
        :src="require(`@/../public/img/${imageSrc}`)"
        :alt="imageAlt"
        class="features__icon"
      />
      {{title}}
    </h3>
    <p>{{description}}</p>
  </div>
</template>

<script>
  export default {
    name: "featureBlock",
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
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
</style>
