<template>
  <div>
    <img
      :src="require(`@/../public/img/${imageSrc}`)"
      :alt="imageAlt"
      class="about-story__icon"
    />
    <h3 class="value-title">{{valueTitle}}</h3>
    <p>{{valueText}}</p>
  </div>
</template>

<script>
  export default {
    name: "iconBlock",
    props: {
      valueTitle: {
        type: String,
        required: true
      },
      valueText: {
        type: String,
        required: true
      },
      imageAlt: {
        type: String,
        required: true
      },
      imageSrc: {
        type: String,
        required: true
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../public/scss/application.scss";
</style>
