<template>
  <Page>
  <section class="home-hero">
    <div class="container-fluid">
      <div class="row">
        <div class="yellow-block">

        </div>
        <div class="offset-md-1 col-sm-6 home-hero__text-container">
          <h1>Reduce Costs. <br> Increase Sales. <br> Satisfy Customers.</h1>
          <p class="lead home-hero__lead">Dealers asked us to help them save money and generate higher converting leads. We listened.</p>
          <a href="#" class="btn-primary">Watch Demo</a>
        </div>
        <div class="col-sm-5">
          <img src="../../public/img/home/homepage-hero.png" alt="imageAlt" class="img-responsive home-hero__img"/>
        </div>
      </div>
    </div>
  </section>

  <logoCarousel
    introductionText="AutoVerify gives you tools that provide valuable information to consumers at every step of their purchase process. Earn valuable leads and be there for them from the beginning, so they choose you in the end."
  />

  <MoreCaseStudies
  sectionTitle="Read More Case Studies"
  imageSrc1="related-cases-wheaton.png"
  imageAlt1="Screens"
  imageSrc2="related-cases-palladino.png"
  imageAlt2="Screens"
  imageSrc3="related-cases-goauto.png"
  imageAlt3="Screens"
  imageSrc4="related-cases-carplace.png"
  imageAlt4="Screens"
  wheatonChevrolet="Wheaton Chevrolet"
  thatCarPlace="That Car Place"
  palladinoHonda="Palladino Honda"
  goAuto="Go Auto Outlets"
  viewCaseStudy="View Case Study"
  />

  <introduction
    introductionText="AutoVerify gives you tools that provide valuable information to consumers at every step of their purchase process. Earn valuable leads and be there for them from the beginning, so they choose you in the end."
  />

  <section class="product-wheel">
    <div class="container">
      <div class="row">
        <div class="col-sm-4 product-wheel__text">
          <p>
            <span class="full-width product-wheel__text--white-block">The AutoVerify suite provides valuable information to consumers at every step of their purchase process. 
Earn valuable leads and be there for them from the beginning, so they choose you in the end.</span>
          </p>
        </div>
        <div class="offset-sm-1  col-sm-7">
          <img src="../../public/img/home/product-wheel.png" alt="imageAlt" class="img-responsive"/>
        </div>
      </div>
    </div>
  </section>

  <section class="why-autoverify">
    <div class="container-fluid">

      <div class="row text-center">
        <div class="col-sm-12">
          <h2 class="why-autoverify__title">Why AutoVerify?</h2>
        </div>
      </div>

      <why-av-right class="bottom-block"
        title="Get leads that sell"
        textBlock="You don’t just want leads — you want leads that sell. AutoVerify helps you generate 8X more leads from your existing web traffic to deliver real, measurable ROI at every stage of the purchase process."
        imageSrc="home/why-av-1.png"
        imageAlt="Screens"
      />

      <why-av-left class="bottom-block"
      title="Reduce costs"
      textBlock="No one likes to pay a different vendor for each tool they use. Write a single check to a single vendor for a suite of tools that deliver real, measurable ROI."
      imageSrc="home/why-av-2.png"
      imageAlt="Screens"
      />

      <why-av-right class="bottom-block"
      title="Satisfy the customer"
      textBlock="AutoVerify helps you answer consumer’s questions early in the research process, showcasing your business as the expert to help them through their purchase journey. "
      imageSrc="home/why-av-3.png"
      imageAlt="Screens"
      />

      <why-av-left class="bottom-block"
      title="Be the expert"
      textBlock="“It’s been amazing,” says Bourque. “We’ve sold 62 cars that came in from Trade-in leads this year alone — and it’s only autumn!”."
      imageSrc="home/why-av-4.png"
      imageAlt="Screens"
      />

      <why-av-right class="bottom-block"
      title="You're not alone!"
      textBlock="Our Customer Success team is here to help integrate AutoVerify with your site, make sure you’re comfortable using it and hold your hand through any challenges. We offer training and support to all of our customers. If you need us, we’re here."
      imageSrc="home/homepage-placeholder.png"
      imageAlt="Screens"
      />

      <section class="support-testimonials">
        <div class="container">
          <div class="row">
              <support-testimonial
                quote="Exceptional service! You always go out of your way for us, reply to all emails and follow-up on all inquiries."
                author="Karina Brooks"
                position="Laplante Chevrolet Buick GMC"
              />
              <support-testimonial
                quote="“Great team!! Easy to work with and works hard at integrating their products on our sites! Worth giving it a try! Mobials has been great to deal with and offer great customer service! Thank you for all your help!!”"
                author="Amine Hanna"
                position="Buckingham Toyota"
              />
              <support-testimonial
                quote="“The staff is always quick at helping you out and they want your business to succeed just as much as you do.”"
                author="Peter Scammel"
                position="Scammel Auto Limited"
              />
          </div>
        </div>
      </section>

    </div>
  </section>

  <ctaBanner
    ctaText="Calculate the ROI You Can Expect"
    linkName="Get Started"
    class="cta-banner__yellow"
  />
  </Page>
</template>

<script>
// @ is an alias to /src
import CtaBanner from './../components/cta-banner';
import Introduction from './../components/introduction';
import LogoCarousel from './../components/logo-carousel';
import LeftTextBlock from './../components/left-text-block';
import RightTextBlock from './../components/right-text-block';
import WhyAvLeft from './../components/why-av-left';
import WhyAvRight from './../components/why-av-right';
import MoreCaseStudies from './../components/more-case-studies';
import SupportTestimonial from './../components/support-testimonials';

export default {
  name: "home",
  components: {
    CtaBanner,
    Introduction,
    LeftTextBlock,
    RightTextBlock,
    LogoCarousel,
    MoreCaseStudies,
    SupportTestimonial,
    WhyAvLeft,
    WhyAvRight
  }
};
</script>

<style scoped lang="scss">
.intro-text {
  border: none;
  padding: 0 0 215px;
}
</style>
