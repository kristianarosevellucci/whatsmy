<template>

    <section class="tool-benefits">
      <div class="container-fluid no-padding">
        <div class="row">
          <div class="col-md-3">
            <img
              :src="require(`@/../public/img/tools/${imageSrc}`)"
              :alt="imageAlt"
              class="img-responsive"
            />
          </div>
          <div class="offset-md-1 col-md-8">
            <div class="row">
              <div class="col-md-12">
                <h2 class="tool-benefits__title">{{benefitsTitle}}</h2>
              </div>
            </div>
            <div class="row tool-benefits__content">
              <div class="col-md-6">
                <h3 class="tool-benefits__subtitle"><span class="tool-benefits__number">{{benefitsNumber1}}</span>{{benefitsTitle1}}</h3>
                <p class="tool-benefits__text">{{benefitsText1}}</p>
              </div>
              <div class="col-md-6">
                <h3 class="tool-benefits__subtitle"><span class="tool-benefits__number">{{benefitsNumber2}}</span>{{benefitsTitle2}}</h3>
                <p class="tool-benefits__text">{{benefitsText2}}</p>
              </div>
            </div>
            <div class="row tool-benefits__content pt-75">
              <div class="col-md-6">
                <h3 class="tool-benefits__subtitle"><span class="tool-benefits__number">{{benefitsNumber3}}</span>{{benefitsTitle3}}</h3>
                <p class="tool-benefits__text">{{benefitsText3}}</p>
              </div>
              <div class="col-md-6">
                <h3 class="tool-benefits__subtitle"><span class="tool-benefits__number">{{benefitsNumber4}}</span>{{benefitsTitle4}}</h3>
                <p class="tool-benefits__text">{{benefitsText4}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

</template>

<script>
  export default {
    name: "ToolBenefits",
    props: {
      imageSrc: {
        type: String,
        required: true
      },
      imageAlt: {
        type: String,
        required: true
      },
      benefitsTitle: {
        type: String,
        required: true
      },
      summaryText: {
        type: String,
        required: true
      },
      benefitsNumber1: {
        type: String,
        required: true
      },
      benefitsTitle1: {
        type: String,
        required: true
      },
      benefitsText1: {
        type: String,
        required: true
      },
      benefitsNumber2: {
        type: String,
        required: true
      },
      benefitsTitle2: {
        type: String,
        required: true
      },
      benefitsText2: {
        type: String,
        required: true
      },
      benefitsNumber3: {
        type: String,
        required: true
      },
      benefitsTitle3: {
        type: String,
        required: true
      },
      benefitsText3: {
        type: String,
        required: true
      },
      benefitsNumber4: {
        type: String,
        required: true
      },
      benefitsTitle4: {
        type: String,
        required: true
      },
      benefitsText4: {
        type: String,
        required: true
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../public/scss/application.scss";
  p {
    font-size: 14px;
  }
</style>
