<template>
    <Page>
      <div class="about-hero">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4 hiw-hero__text">
              <h1>How It Works</h1>
              <p class="hero-lead">Monthly reports on time, every time. Here's how we do it.</p>
              <router-link class="btn-primary" to=“/”>Get Started</router-link>
            </div>
            <div class="col-md-8 hiw-hero__device-container">
              <div class="row hiw-hero__devices">
                <div class="col-md-4">
                  <img src="../../public/img/hiw-step-1.png" alt="WhatsMy HIW Step 1" class="img-responsive">
                </div>
                <div class="col-md-4">
                  <img src="../../public/img/hiw-step-2.png" alt="WhatsMy HIW Step 2" class="img-responsive">
                </div>
                <div class="col-md-4">
                  <img src="../../public/img/hiw-step-3.png" alt="WhatsMy HIW Step 3" class="img-responsive">
                </div>
              </div>
              <img src="../../public/img/hiw-blue-pattern.png" alt="Blue Pattern" class="img-responsive hiw-hero__blue">
            </div>
          </div>
        </div>
      </div>
      <div class="hiw-partners text-center">
        <div class="container-fluid hiw-content">
          <div class="row">
            <div class="offset-md-3 col-md-6">
              <p class="subtitle">We have a little help from our friends</p>
              <p class="lead">We partner with the industry's most trusted data providers to deliver your monthly reports.</p>
            </div>
          </div>
          <div class="row">
            <div class="offset-md-2 col-md-8">
              <div class="row">
                <div class="col-md-4">
                  <img src="../../public/img/partner-black-book.png" alt="Blackbook" class="img-responsive" data-aos="fade-up">
                </div>
                <div class="col-md-4">
                  <img src="../../public/img/partner-teranet.png" alt="Teranet" class="img-responsive teranet-logo" data-aos="fade-up" data-aos-duration="500">
                </div>
                <div class="col-md-4">
                  <img src="../../public/img/partner-trans-union.png" alt="Transunion" class="img-responsive" data-aos="fade-up" data-aos-duration="1000">
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="hiw-steps-container">
        <div class="container-fluid">
          <div class="row">
            <div class="offset-sm-1 col-sm-10">
              <p class="subtitle">What you Must Do</p>
              <h2>The process is simple.</h2>
              <p class="hiw-steps__lead">You provide us your information, we give you the data and ability to track your asset’s value over time…</p>
              <div class="row">
                <div class="col-sm-4">
                  <numberedStep
                    number="01"
                    title="Create Account"
                    description="Sign up for WhatsMy and create your free account."
                  />
                </div>
                <div class="col-sm-4">
                  <numberedStep
                    number="02"
                    title="Complete Details"
                    description="Tellu s about your home and/or vehicle."
                  />
                </div>
                <div class="col-sm-4">
                  <numberedStep
                    number="03"
                    title="See Results"
                    description="Sit back, relax and receive valuable monthly updates."
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="hiw-blurb">
        <div class="container-fluid">
          <div class="row">
            <div class="offset-md-1 col-md-6">
              <img src="../../public/img/line-accent.png" alt="images" class="hiw-blurb__line-accent rellax" data-rellax-speed=".4">
              <img src="../../public/img/sidekick-main.png" alt="images" class="hiw-blurb__main-img rellax" data-rellax-speed=".3">
              <img src="../../public/img/sidekick-blur.png" alt="images" class="hiw-blurb__main-blur">
              <img src="../../public/img/large-dot-accent.png" alt="images" class="hiw-blurb__large-dots rellax" data-rellax-speed="1.75">
            </div>
            <div class="offset-md-1 col-md-3">
              <h3 class="hiw__title">WhatsMy: Your Handy Sidekick</h3>
              <p>We operate on one guiding principal – We believe consumers should have free, transparent access to valuation data for their home and/or vehicle. Our goal is to take the work off your plate by delivering the information you need — automatically, monthly, and free of charge.</p>
            </div>
          </div>
        </div>
      </div>

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
import Page from './../components/page';
import iconBlock from './../components/icon-block';
import numberedStep from './../components/numbered-step';
import CtaBanner from './../components/cta-banner';

export default {
  name: "about",
  components: {
    Page,
    CtaBanner,
    numberedStep,
    iconBlock
  },
  mounted() {
    rellax = new Rellax(".rellax");
  },
  destroyed() {
    rellax.destroy();
  }
};
</script>

<style lang="scss" scoped></style>
