<template>
  <div class="leadership-container">
    <img
      :src="require(`@/../public/img/staff/${imageSrc}`)"
      :alt="imageAlt"
      class="img-responsive"
      data-tilt
    />
    <div class="leadership__link">
      <p class="leadership__position">{{personTitle}}</p>
      <a href="#" class="leadership__social">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#3500F5" class="linkedin"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
      </a>
    </div>
    <div class="leadership__description">
      <h3>{{personName}}</h3>
      <p class="leadership__bio">{{personDescription}}</p>
    </div>
  </div>
</template>

<script>
import VanillaTilt from "vanilla-tilt";

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
      personDescription: {
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
    },
    mounted() {
      const tiltElements = document.querySelectorAll("[data-tilt]");
      const options = {
        max: 10,
        glare: true,
        maxGlare: .5
      };
      tiltElements.forEach(element => VanillaTilt.init(element, options));
    },
    destroyed() {
      const tiltElements = document.querySelectorAll("[data-tilt]");
      tiltElements.forEach(element => element.vanillaTilt.destroy());
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../public/scss/application.scss";
</style>
