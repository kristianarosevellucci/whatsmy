<template>
  <section class="logo-carousel">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h2 class="logo-carousel__title">Trusted by the biggest names in the industry.</h2>
        </div>
      </div>
      <carousel :per-page="1" :navigate-to="someLocalProperty" :autoplay="true" :loop="true" :paginationEnabled="false" :autoplayTimeout="3000" :speed="1000">
        <slide>
          <div class="row">
            <div class="col-sm-2">
              <img
                :src="require(`@/../public/img/home/bmw.png`)"
                :alt="honda"
                class="logo-carousel__img"
              />
            </div>
            <div class="col-sm-2">
              <img
                :src="require(`@/../public/img/home/subaru.png`)"
                :alt="honda"
                class="logo-carousel__img"
              />
            </div>
            <div class="col-sm-2">
              <img
                :src="require(`@/../public/img/home/mercedes.png`)"
                :alt="honda"
                class="logo-carousel__img"
              />
            </div>
            <div class="col-sm-2">
              <img
                :src="require(`@/../public/img/home/toyota.png`)"
                :alt="honda"
                class="logo-carousel__img"
              />
            </div>
            <div class="col-sm-2">
              <img
                :src="require(`@/../public/img/home/volkswagen.png`)"
                :alt="honda"
                class="logo-carousel__img"
              />
            </div>
            <div class="col-sm-2">
              <img
                :src="require(`@/../public/img/home/acura.png`)"
                :alt="honda"
                class="logo-carousel__img"
              />
            </div>
          </div>
        </slide>
        <slide>
          <div class="row">
            <div class="col-sm-2">
              <img
                :src="require(`@/../public/img/home/hyundai.png`)"
                :alt="honda"
                class="logo-carousel__img"
              />
            </div>
            <div class="col-sm-2">
              <img
                :src="require(`@/../public/img/home/nissan.png`)"
                :alt="honda"
                class="logo-carousel__img"
              />
            </div>
            <div class="col-sm-2">
              <img
                :src="require(`@/../public/img/home/gm.png`)"
                :alt="honda"
                class="logo-carousel__img"
              />
            </div>
            <div class="col-sm-2">
              <img
                :src="require(`@/../public/img/home/infiniti.png`)"
                :alt="honda"
                class="logo-carousel__img"
              />
            </div>
            <div class="col-sm-2">
              <img
                :src="require(`@/../public/img/home/kia.png`)"
                :alt="honda"
                class="logo-carousel__img"
              />
            </div>
            <div class="col-sm-2">
              <img
                :src="require(`@/../public/img/home/jeep.png`)"
                :alt="honda"
                class="logo-carousel__img"
              />
            </div>
          </div>
        </slide>
        <slide>
          <div class="row">
            <div class="offset-sm-3 col-sm-2">
              <img
                :src="require(`@/../public/img/home/dodge.png`)"
                :alt="honda"
                class="logo-carousel__img"
              />
            </div>
            <div class="col-sm-2">
              <img
                :src="require(`@/../public/img/home/chrysler.png`)"
                :alt="honda"
                class="logo-carousel__img"
              />
            </div>
            <div class="col-sm-2">
              <img
                :src="require(`@/../public/img/home/ford.png`)"
                :alt="honda"
                class="logo-carousel__img"
              />
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </section>
</template>

<script>

import Vue from 'vue';
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);

export default {
  name: "LogoCarousel",
}

</script>

<style lang="scss" scoped>
  @import "../../public/scss/application.scss";
  p {
    font-size: 14px;
  }
</style>
