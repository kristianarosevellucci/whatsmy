<template>
    <Page>
      <div class="about-hero">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4 about-hero__text">
              <h1>About WhatsMy</h1>
              <p class="hero-lead">WhatsMy empowers home and vehicle owners to make smarter decisions.</p>
              <router-link class="btn-primary" to=“/”>Sign Up For Free</router-link>
            </div>
            <div class="col-md-7">
              <img src="../../public/img/about-screen.png" alt="WhatsMy Inbox" class="about-hero__screen">
              <img src="../../public/img/homepage-header.png" alt="Blue Bar" class="blue-banner">
            </div>
          </div>
        </div>
      </div>
      <div class="about-story">
        <div class="container-fluid">
          <div class="row text-center">
            <div class="col-md-4">
              <iconBlock
                valueTitle="Origin"
                valueText="WhatsMy was created by <a href='#'> Mobials Inc.</a> after a number of customers asked for home and vehicle values while they weren’t actively shopping for a home or vehicle."
                imageAlt="Storybook"
                imageSrc="origin.png"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>
            <div class="col-md-4">
              <iconBlock
                valueTitle="Team"
                valueText="We operate on one guiding principal – We believe consumers should have free, transparent access to valuation data for their home and/or vehicle."
                imageAlt="People"
                imageSrc="team.png"
                data-aos="fade-up"
                data-aos-duration="2000"
              />
            </div>
            <div class="col-md-4">
              <iconBlock
                valueTitle="Philosophy"
                valueText="Our mission is to make home and vehicle ownership and shopping stress free.'"
                imageAlt="Lightbulb"
                imageSrc="philosophy.png"
                data-aos="fade-up"
                data-aos-duration="3000"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="about-container">
        <div class="container-fluid about-content">
          <div class="row">
            <div class="offset-md-1 col-md-5">
              <div class="about-text">
                <div class="row">
                  <div class="col-md-12">
                    <h2>Get to know the people behind WhatsMy</h2>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-11">
                  <leadership
                    personName="Brad Hanebury"
                    personTitle="Founder, CTO"
                    personDescription="Brad provides the architecture and direction for all of Mobials’ products. His focus is on scaling applications across multiple verticals and locales, while keeping in mind that the ultimate goal of application development is to enable a positive user experience."
                    imageAlt="brad Hanebury"
                    imageSrc="brad.png"
                    class="brad desktop-only"
                  />
                  <leadership
                    personName="James Hayes"
                    personTitle="Founder, CEO"
                    personDescription="Focused, driven, imaginative. James is responsible for providing the vision, thought leadership, and business strategy. It is James's ability to focus on the big picture while maintaining quality on the finest details that facilitates Mobials success."
                    imageAlt="James Hayes"
                    imageSrc="james.png"
                    class="mobile-only"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-11">
                  <leadership
                    personName="David Brebner"
                    personTitle="Founder, CFO"
                    personDescription="Dave's breadth of historical clients in various industries and his own entrepreneurial activities provide a foundation of knowledge and experiences to support his financial, accounting, governance and structural guidance."
                    imageAlt="David Brebner"
                    imageSrc="dave.png"
                    class="dave desktop-only"
                  />
                  <leadership
                    personName="Brad Hanebury"
                    personTitle="Founder, CTO"
                    personDescription="Brad provides the architecture and direction for all of Mobials’ products. His focus is on scaling applications across multiple verticals and locales, while keeping in mind that the ultimate goal of application development is to enable a positive user experience."
                    imageAlt="brad Hanebury"
                    imageSrc="brad.png"
                    class="brad mobile-only"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <div class="row">
                <div class="offset-md-1 col-md-11">
                  <leadership
                    personName="James Hayes"
                    personTitle="Founder, CEO"
                    personDescription="Focused, driven, imaginative. James is responsible for providing the vision, thought leadership, and business strategy. It is James's ability to focus on the big picture while maintaining quality on the finest details that facilitates Mobials success."
                    imageAlt="James Hayes"
                    imageSrc="james.png"
                    class="desktop-only"
                  />
                  <leadership
                    personName="Marty Meadows"
                    personTitle="Founder, VP Automotive"
                    personDescription="Marty has a unique combination of business strategy, operational acumen and sales expertise. While designing Mobials' business strategy and facilitating contract management, Marty works with partners on strategic development."
                    imageAlt="Marty Meadows"
                    imageSrc="marty.png"
                    class="marty mobile-only"
                  />
                </div>
              </div>
              <div class="row">
                <div class="offset-md-1 col-md-11">
                  <leadership
                    personName="Marty Meadows"
                    personTitle="Founder, VP Automotive"
                    personDescription="Marty has a unique combination of business strategy, operational acumen and sales expertise. While designing Mobials' business strategy and facilitating contract management, Marty works with partners on strategic development."
                    imageAlt="Marty Meadows"
                    imageSrc="marty.png"
                    class="marty desktop-only"
                  />
                  <leadership
                    personName="David Brebner"
                    personTitle="Founder, CFO"
                    personDescription="Dave's breadth of historical clients in various industries and his own entrepreneurial activities provide a foundation of knowledge and experiences to support his financial, accounting, governance and structural guidance."
                    imageAlt="David Brebner"
                    imageSrc="dave.png"
                    class="dave mobile-only"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="about-summary">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 text-center">
              <h2>To Summarize</h2>
            </div>
          </div>
          <div class="row">
            <div class="offset-md-1 col-md-10">
              <p class="about-summary__text">If you own a home and/or vehicle, you should know what they are worth. With decades of experience in the home and auto buying spaces, our team recognized that there is currently no centralized place where you can find out how much your assets have increased/decreased in value over time. With WhatsMy, our goal is to take the work off your plate by delivering the information you need — automatically, monthly, and free of charge. When you’re out living your life, we’re here in the background, making sure you have the information needed to make smarter decisions.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-center">
              <router-link class="btn-primary header-btn" to=“/”>Sign Up For Free</router-link>
            </div>
          </div>
        </div>
      </div>

    </Page>
</template>

<script>

import Rellax from "rellax";
let rellax;

// @ is an alias to /src
import Page from './../components/page';
import iconBlock from './../components/icon-block';
import Leadership from './../components/leadership';
import CtaBanner from './../components/cta-banner';

export default {
  name: "about",
  components: {
    Page,
    CtaBanner,
    Leadership,
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
