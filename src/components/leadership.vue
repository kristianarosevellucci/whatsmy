<template>
  <div class="leadership-container">
    <img
      :src="require(`@/../public/img/staff/${imageSrc}`)"
      :alt="imageAlt"
      class="img-responsive"
    />
    <div class="leadership__description">
      <h3 class="leadership__name">{{personName}}</h3>
      <p class="leadership__position">{{personTitle}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "leadership",
    props: {
      personName: {
        type: String,
        required: true
      },
      personTitle: {
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
