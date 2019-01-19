<template>
  <div class="col-md-4 support-testimonial">
    <div class="support-testimonial-container">
      <p class="support-testimonial__text">"{{quote}}"</p>
      <p class="support-testimonial__author">"{{author}}"</p>
      <p class="support-testimonial__position">"{{position}}"</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SupportTestimonial",
    props: {
      quote: {
        type: String,
        required: true
      },
      author: {
        type: String,
        required: true
      },
      position: {
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
