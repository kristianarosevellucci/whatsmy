<template>
    <Page>
      <div class="about-container">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <h1 class="about-title">Fuelled <br> by passion <br> &amp; curiosity</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="about-text">
                <div class="row">
                  <div class="col-md-12 col-lg-6">
                    <h2 class="about-subtitle">The Philosophy</h2>
                    <p>AutoVerify is powered by Mobials — a customer-obsessed company with a mission to take the stress out of buying and owning homes and vehicles. We develop, market and sell digital retailing solutions for the automotive and real estate industries.</p>
                  </div>
                  <div class="col-md-12 col-lg-6">
                    <h2 class="about-subtitle">Who We Are</h2>
                    <p>Mobials is made up of seasoned professionals from the tech and auto industries and takes great pride in its culture based on hard work, passion, fun, and shared success.</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-11">
                  <leadership
                    personName="Brad Hanebury"
                    personTitle="Founder, CTO"
                    imageAlt="cta-banner__maroon"
                    imageSrc="brad.png"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-11">
                  <leadership
                    personName="David Brebner"
                    personTitle="Founder, CFO"
                    imageAlt="cta-banner__maroon"
                    imageSrc="dave.png"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="offset-md-1 col-md-11">
                  <leadership
                    personName="James Hayes"
                    personTitle="Founder, CEO"
                    imageAlt="cta-banner__maroon"
                    imageSrc="james.png"
                  />
                </div>
              </div>
              <div class="row">
                <div class="offset-md-1 col-md-11">
                  <leadership
                    personName="Marty Meadows"
                    personTitle="Founder, President of Automotive"
                    imageAlt="cta-banner__maroon"
                    imageSrc="marty.png"
                  />
                </div>
              </div>
              <div class="about-testimonial">
                <div class="row">
                  <div class="offset-md-1 col-md-11">
                    <p class="testimonial">“Our greatest desire is to build tools that bring real benefits to the user.”</p>
                    <div class="divider"></div>
                    <p class="testimonial-author">James Hayes</p>
                    <p class="testimonial-position">Founder &amp; CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
</template>

<script>
// @ is an alias to /src
import Page from './../components/page';
import Leadership from './../components/leadership';
import ToolsCtaBanner from './../components/tools/tools-cta-banner';

export default {
  name: "about",
  components: {
    Page,
    ToolsCtaBanner,
    Leadership
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
