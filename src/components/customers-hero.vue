<template>

<section class="customers-hero">
  <div class="container-fluid">
    <div class="row">
    <div class="col-md-5 customers-hero__img-container">
      <img
      :src="require(`@/../public/img/case-studies/${imageSrc}`)"
      :alt="imageAlt"
      class="img-responsive customers-hero__img"
      />
    </div>
      <div class="col-md-6">
        <div class="customers-hero__text">
          <p class="subtitle">{{customersSubtitle}}</p>
          <h2>{{customersTitle}}</h2>
          <p>{{customersDescription}}</p>
        </div>
      </div>
    </div>
  </div>
</section>

</template>

<script>
  export default {
    name: "CustomersHero",
    props: {
      imageSrc: {
        type: String,
        required: true
      },
      imageAlt: {
        type: String,
        required: true
      },
      customersSubtitle: {
        type: String,
        required: true
      },
      customersTitle: {
        type: String,
        required: true
      },
      customersDescription: {
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
