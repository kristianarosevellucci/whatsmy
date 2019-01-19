<template>
    <Page>

    <customers-hero
      imageSrc="palladino-hero.png"
      imageAlt="AutoVerify Insurance"
      customersSubtitle="Franchised Dealer"
      customersTitle="See how Palladino Honda uses AutoVerify to generate reviews and convert web traffic into sales."
      customersDescription="Courtney Bourque, Director of Marketing, Palladino Honda"
      class="customers-hero--maroon"
    />

    <introduction
      introductionText="The team at Palladino Honda has always tried to stay ahead of the curve when it comes to industry trends and sales processes, so when they learned about the tools now included in the AutoVerify Suite, they were all-in."
    />

    <left-text-block class="top-block"
      textBlock1="Palladino Honda is having great success using AutoVerify tools. They now boast a whopping 3430 online reviews — 554 in Google, 174 in Facebook, and 2712 in the Reviewsii platform."
      inlineTestimonial2="“We’re so happy with the number of reviews we’ve gotten, and we love displaying them right on our website — why would you give a potential customer a reason to leave your site? Another great thing about AutoVerify Reviews is that everyone can use it, even our elderly customers that don’t have a Google or Facebook account,” explains Bourque. “Before AutoVerify Reviews, we’d miss out on reviews from customers like this because, let’s face it, no one is going to sign up for Google or Facebook just to leave an online review for a car dealer. But with this system, they can leave us feedback without having to go to any added trouble. This has helped spike the number of reviews we’re getting.”"
      textBlock2="They’ve also enjoyed the simplicity of the system as it frees up staff-time that used to be spent calling customers and hunting down reviews. Now it all happens automatically."
      imageSrc="case-studies/palladino-1.png"
      imageAlt="Screens"
    />

    <right-text-block class="bottom-block"
      textBlock1="While the dealership has also seen good results from the Credit  and Insurance  tools, the real winner for Palladino Honda has been AutoVerify Trade-in."
      inlineTestimonial2="“It’s been amazing,” says Bourque. “We’ve sold 62 cars that came in from Trade-in leads this year alone — and it’s only autumn!”."
      imageSrc="case-studies/palladino-2.png"
      imageAlt="Screens"
    />

    <statistics
      statNumber1="30"
      statNumber2="5"
      statNumber3="189"
      statTitle1="Credit Leads"
      statTitle2="Insurance Leads"
      statTitle3="Trade-in Leads"
      statisticsTitle="Monthly Average Lead Generation"
    />

    <ctaBanner
      ctaText="Want to learn more about this story?"
      linkName="Contact Us"
      class="cta-banner__maroon"
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
    </Page>
</template>

<script>
import Page from './../components/page';
import Introduction from './../components/introduction';
import CustomersHero from './../components/customers-hero';
import LeftTextBlock from './../components/left-text-block';
import RightTextBlock from './../components/right-text-block';
import Statistics from './../components/statistics';
import CtaBanner from './../components/cta-banner';
import MoreCaseStudies from './../components/more-case-studies';
import Footer from './../components/footer';

export default {
  name: "palladino-honda",
  components: {
    Footer,
    Introduction,
    CustomersHero,
    LeftTextBlock,
    RightTextBlock,
    Statistics,
    CtaBanner,
    MoreCaseStudies,
    Page
  }
};
</script>

<style></style>
