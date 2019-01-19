<template>
  <Page>
  <customers-hero
    imageSrc="goauto-hero.png"
    imageAlt="AutoVerify Insurance"
    customersSubtitle="Dealer Group"
    customersTitle="See how Go Auto Outlets uses AutoVerify to build a lead strategy that converts."
    customersDescription="Casey Pilip, Director, Business Development, Go Auto Outlets"
    class="customers-hero--pink"
  />

    <introduction
      introductionText="AutoVerify tools have become a cornerstone of Go Auto Outlet’s lead generation strategy because they don’t just generate leads — they generate leads that convert into appointments and sales. "
    />

    <left-text-block class="top-block"
      textBlock1="That’s why, when the Mobials team approached them to discuss their ground-breaking new digital retailing solutions, Casey Pilip, Director of Business Development for Go Auto Outlet’s three locations, was quick to give it a try. They integrated AutoVerify Trade-in and Credit widgets to generate highly-qualified leads and provide consumers with valuable information to help with their search. While all three tools were helpful, Go Auto was blown away by the near-instant success they saw with the Credit tool."
      imageSrc="case-studies/goauto-1.png"
      imageAlt="Go Auto Widgets"
    />

    <statistics
      statNumber1="32"
      statNumber2="14"
      statNumber3="9"
      statTitle1="Leads"
      statTitle2="Showroom Appointments"
      statTitle3="Cars Sold"
      statisticsSubtitle="After 30 Days of Using AutoVerify Credit,"
      statisticsTitle="Go Auto Outlets Recieved:"
    />

    <right-text-block class="pb-200 pt-200"
      textBlock1="Because of the success Go Auto Outlets have had with AutoVerify Trade-in and Credit tools, Pilip is looking forward to experimenting with more digital retailing value-for-value tools like AutoVerify Insurance and Reserve Now. “Mobials is always creating new tools and innovating on the existing ones, so I love being one of the first one to leverage them all”."
      imageSrc="case-studies/goauto-2.png"
      imageAlt="Screens"
    />

    <ctaBanner
      ctaText="Want to Learn More About This Story?"
      linkName="Contact Us"
      class="cta-banner__pink"
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
// @ is an alias to /src
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
  name: "go-auto-outlets",
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

<style>

</style>
