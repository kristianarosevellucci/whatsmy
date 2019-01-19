<template>
  <div class="more-case-studies text-center">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <h2 class="more-case-studies__title">{{sectionTitle}}</h2>
          </div>
        </div>
        <div class="more-case-studies__content">
          <div class="row">
            <div class="col-md-6 col-lg-3">
              <router-link class=“more-case-studies__item” to="/customers/wheaton-chevrolet">

                <div class="more-case-studies__block">
                  <img
                    :src="require(`@/../public/img/case-studies/${imageSrc1}`)"
                    :alt="imageAlt1"
                    class="img-responsive"
                  />
                  <h3 class="case-study-content__block-title">{{wheatonChevrolet}}</h3>
                  <p class="case-study-content__link-title">{{personsName}}</p>
                  <p class="case-study-content__link-title">{{viewCaseStudy}}</p>
                </div>


              </router-link>
            </div>
            <div class="col-md-6 col-lg-3">
              <router-link class=“more-case-studies__item” to="/customers/palladino-honda">
                <div class="more-case-studies__block">
                  <img
                    :src="require(`@/../public/img/case-studies/${imageSrc2}`)"
                    :alt="imageAlt1"
                    class="img-responsive"
                  />
                  <h3 class="case-study-content__block-title">{{palladinoHonda}}</h3>
                  <p class="case-study-content__link-title">{{personsName}}</p>
                  <p class="case-study-content__link-title">{{viewCaseStudy}}</p>
                </div>
              </router-link>
            </div>
            <div class="col-md-6 col-lg-3">
              <router-link class=“more-case-studies__item” to="/customers/go-auto-outlets">
                <div class="more-case-studies__block">
                  <img
                    :src="require(`@/../public/img/case-studies/${imageSrc3}`)"
                    :alt="imageAlt1"
                    class="img-responsive"
                  />
                  <h3 class="case-study-content__block-title">{{goAuto}}</h3>
                  <p class="case-study-content__link-title">{{personsName}}</p>
                  <p class="case-study-content__link-title">{{viewCaseStudy}}</p>
                </div>
              </router-link>
            </div>
            <div class="col-md-6 col-lg-3">
              <router-link class=“more-case-studies__item” to="/customers/that-car-place">
                <div class="more-case-studies__block">
                  <img
                    :src="require(`@/../public/img/case-studies/${imageSrc4}`)"
                    :alt="imageAlt1"
                    class="img-responsive"
                  />
                  <h3 class="case-study-content__block-title">{{thatCarPlace}}</h3>
                  <p class="case-study-content__link-title">{{personsName}}</p>
                  <p class="case-study-content__link-title">{{viewCaseStudy}}</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "MoreCaseStudies",
    props: {
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
      },
      imageSrc3: {
        type: String,
        required: true
      },
      imageAlt3: {
        type: String,
        required: true
      },
      imageSrc4: {
        type: String,
        required: true
      },
      imageAlt4: {
        type: String,
        required: true
      },
      sectionTitle: {
        type: String,
        required: true
      },
      wheatonChevrolet: {
        type: String,
        required: true
      },
      thatCarPlace: {
        type: String,
        required: true
      },
      goAuto: {
        type: String,
        required: true
      },
      palladinoHonda: {
        type: String,
        required: true
      },
      viewCaseStudy: {
        type: String,
        required: true
      },
      personsName: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../public/scss/application.scss";
</style>
