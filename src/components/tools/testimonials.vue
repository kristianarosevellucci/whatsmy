<template>
  <section class="testimonial-block text-center">
    <div class="container-fluid">
      <div class="row">
        <div class="offset-sm-2 col-sm-8">
          <p class="testimonial">{{quote}}</p>
          <span class="divider"></span>
          <p class="testimonial-author">{{author}}</p>
          <p class="testimonial-position">{{authorJob}}</p>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
  export default {
    name: "Testimonials",
    props: {
      quote: {
        type: String,
        required: true
      },
      author: {
        type: String,
        required: true
      },
      authorJob: {
        type: String,
        required: true
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../public/scss/application.scss";
</style>
