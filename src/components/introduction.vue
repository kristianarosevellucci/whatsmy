<template>
    <div class="intro-text">
      <div class="container">
        <div class="row">
          <div class="offset-md-2 col-md-8">
            <p class="lead text-center">{{introductionText}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Introduction",
    props: {
      introductionText: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
