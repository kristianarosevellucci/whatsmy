<template>
    <Page>
      <div class="about-hero">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4 about-hero__text">
              <h1>How It Works</h1>
              <p class="hero-lead">Monthly reports on time, every time. Here's how we do it.</p>
              <router-link class="btn-primary" to=“/”>Sign Up For Free</router-link>
            </div>
            <div class="col-md-8 hiw-hero__device-container">
              <div class="row hiw-hero__devices">
                <div class="col-sm-4">
                  <img src="../../public/img/hiw-step-1.png" alt="" class="img-responsive">
                </div>
                <div class="col-sm-4">
                  <img src="../../public/img/hiw-step-2.png" alt="" class="img-responsive">
                </div>
                <div class="col-sm-4">
                  <img src="../../public/img/hiw-step-3.png" alt="" class="img-responsive">
                </div>
              </div>
              <img src="../../public/img/hiw-blue-pattern.png" alt="" class="img-responsive hiw-hero__blue">
            </div>
          </div>
        </div>
      </div>
      <div class="hiw-partners text-center">
        <div class="container-fluid">
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
                  <img src="../../public/img/logo.svg" alt="" class="img-responsive">
                </div>
                <div class="col-md-4">
                  <img src="../../public/img/logo.svg" alt="" class="img-responsive">
                </div>
                <div class="col-md-4">
                  <img src="../../public/img/logo.svg" alt="" class="img-responsive">
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
                    title="Create Account"
                    description="Sign up for WhatsMy and create your free account."
                  />
                </div>
                <div class="col-sm-4">
                  <numberedStep
                    number="03"
                    title="Create Account"
                    description="Sign up for WhatsMy and create your free account."
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
              <img src="../../public/img/line-accent.png" alt="images" class="hiw-blurb__line-accent">
              <img src="../../public/img/sidekick-main.png" alt="images" class="hiw-blurb__main-img">
              <img src="../../public/img/sidekick-blur.png" alt="images" class="hiw-blurb__main-blur">
              <img src="../../public/img/large-dot-accent.png" alt="images" class="hiw-blurb__large-dots">
            </div>
            <div class="offset-md-1 col-md-3">
              <h3>WhatsMy: Your Handy Sidekick</h3>
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
  }
};
</script>

<style lang="scss" scoped>
  .divider {
    height: 5px;
    width: 50px;
    background: #E6E6E6;
    margin: 30px 0;
    @media screen and (max-width: 768px){
      display: block;
      margin: 30px auto;
    }
  }
</style>
