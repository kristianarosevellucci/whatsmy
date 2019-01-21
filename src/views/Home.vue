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
            <span class="home-hero__small"> in the </span><br>
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
        title="WhatsMy house worth?"
        textBlock="Your home is your biggest asset. When you know what it's worth, you can make smarter financial decisions, confidently. By partnering with MPAC and Teranet, WhatsMy delivers accurate, up-to-date, value information to keep you in the know."
        imageSrc1="add-home.png"
        imageAlt1="Add Home"
        imageSrc2="home-graph.png"
        imageAlt2="Home Graph"
      />

      <why-av-left class="bottom-block"
      number="02"
      title="WhatsMy car worth?"
      textBlock="Your vehicle is one of your biggest asset. When you know what it's worth, you can make smarter financial decisions, confidently. WhatsMy delivers accurate, up-to-date, value information to keep you in the know."
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
            title="Your time is valuable."
            description="You have things to do. Let us research your home and vehicle values for you, so you always have the numbers in your back pocket."
            imageSrc="magnifying-glass.png"
            imageAlt="WhatsMy Valuable Time"
            />
          </div>
          <div class="col-sm-6 features__item-container" data-aos="fade-up" data-aos-duration="1500">
            <feature-block
            title="Sent to you monthly."
            description="You never know when you'll need them, but when you do, you can find updated WhatsMy values in your inbox every month."
            imageSrc="email.png"
            imageAlt="WhatsMy Email"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 features__item-container" data-aos="fade-up" data-aos-duration="1500">
            <feature-block
            title="Data you can trust."
            description="We only pertner with the industry's most reliable data sources. So you know you can trust the information we provide."
            imageSrc="hand-heart.png"
            imageAlt="WhatsMy hand heart"
            />
          </div>
          <div class="col-sm-6 features__item-container" data-aos="fade-up" data-aos-duration="1500">
            <feature-block
            title="Free today, free always."
            description="They are your assets. You should know what they're worth, and it shouldn't cost you anything."
            imageSrc="piggybank.png"
            imageAlt="WhatsMy Piggybank"
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

import Rellax from "rellax";
let rellax;

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
  },
  mounted() {
    rellax = new Rellax(".rellax");
  },
  destroyed() {
    rellax.destroy();
  }
};

import VanillaTilt from "vanilla-tilt";
</script>

<style scoped lang="scss"></style>
