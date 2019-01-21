<template>
  <Page>
  <section class="home-hero">
    <img src="../../public/img/homepage-hero.png" alt="Homepage Hero" class="home-hero__img">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <span class="home-hero__subtitle">Your home and vehicle values change.</span>
          <h1>
            <span class="home-hero__large">Stay</span>
            <span class="home-hero__small"> in the </span>
            <span class="home-hero__large">know</span>
          </h1>
          <a href="#" class="btn-primary home-hero__btn">Get Free Monthly Reports</a>
        </div>
        <div class="col-md-6">
          <img src="../../public/img/whatsmy-home.gif" alt="" class="img-responsive home-hero__devices">
        </div>
      </div>
    </div>
  </section>

  <section class="lead" data-aos="fade-up" data-aos-duration="2000">
    <full-text class="bottom-block"
      title="Free Monthly Home &amp; Vehicle Valuation Reports"
      text="WhatsMy makes staying on top of your home and vehicle values easy. You paid for them, you should know what they are worth. Sign up to get FREE monthly updates."
    />
  </section>

  <section class="use-cases">
    <div class="container-fluid">

      <why-av-right class="bottom-block"
        number="01"
        title="Get leads that sell"
        textBlock="You don’t just want leads — you want leads that sell. AutoVerify helps you generate 8X more leads from your existing web traffic to deliver real, measurable ROI at every stage of the purchase process."
        imageSrc1="add-home.png"
        imageAlt1="Add Home"
        imageSrc2="home-graph.png"
        imageAlt2="Home Graph"
      />

      <why-av-left class="bottom-block"
      number="01"
      title="Get leads that sell"
      textBlock="You don’t just want leads — you want leads that sell. AutoVerify helps you generate 8X more leads from your existing web traffic to deliver real, measurable ROI at every stage of the purchase process."
      imageSrc1="add-vehicle.png"
      imageAlt1="Add Vehicle"
      imageSrc2="vehicle-graph.png"
      imageAlt2="Vehicle Graph"
      />

    </div>
  </section>

  <section class="features">
    <div class="row">
      <div class="offset-md-1 col-md-10">
        <h2>Use WhatsMy and you'll never have to guess again.</h2>

        <div class="row">
          <div class="col-sm-6 features__item-container" data-aos="fade-up" data-aos-duration="1500">
            <feature-block
            title="Get leads that sell"
            description="You don’t just want leads — you want leads that sell. AutoVerify helps you generate 8X more leads from your existing web traffic to deliver real, measurable ROI at every stage of the purchase process."
            imageSrc="magnifying-glass.png"
            imageAlt="Add Vehicle"
            />
          </div>
          <div class="col-sm-6 features__item-container" data-aos="fade-up" data-aos-duration="1500">
            <feature-block
            title="Get leads that sell"
            description="You don’t just want leads — you want leads that sell. AutoVerify helps you generate 8X more leads from your existing web traffic to deliver real, measurable ROI at every stage of the purchase process."
            imageSrc="magnifying-glass.png"
            imageAlt="Add Vehicle"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 features__item-container" data-aos="fade-up" data-aos-duration="1500">
            <feature-block
            title="Get leads that sell"
            description="You don’t just want leads — you want leads that sell. AutoVerify helps you generate 8X more leads from your existing web traffic to deliver real, measurable ROI at every stage of the purchase process."
            imageSrc="magnifying-glass.png"
            imageAlt="Add Vehicle"
            />
          </div>
          <div class="col-sm-6 features__item-container" data-aos="fade-up" data-aos-duration="1500">
            <feature-block
            title="Get leads that sell"
            description="You don’t just want leads — you want leads that sell. AutoVerify helps you generate 8X more leads from your existing web traffic to deliver real, measurable ROI at every stage of the purchase process."
            imageSrc="magnifying-glass.png"
            imageAlt="Add Vehicle"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <ctaBanner
    ctaText="Get Started"
    linkName="Get Free Monthly Report"
  />

  </Page>
</template>

<script>

// @ is an alias to /src
import FullText from './../components/full-text';
import FeatureBlock from './../components/feature-block';
import CtaBanner from './../components/cta-banner';
import WhyAvLeft from './../components/why-av-left';
import WhyAvRight from './../components/why-av-right';

export default {
  name: "home",
  components: {
    FullText,
    FeatureBlock,
    CtaBanner,
    WhyAvLeft,
    WhyAvRight
  }
};

import VanillaTilt from "vanilla-tilt";
</script>

<style scoped lang="scss">
.intro-text {
  border: none;
  padding: 0 0 215px;
}
</style>
