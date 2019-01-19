<template>
  <Page>
    <customers-hero
      imageSrc="wheaton-hero.png"
      imageAlt="AutoVerify Insurance"
      customersSubtitle="Franchised Dealer"
      customersTitle="See how Wheaton Chevrolet uses AutoVerify to build a digital strategy that sells."
      customersDescription="Jonathan Michell, Digital Marketing Coordinator, Wheaton Chevrolet"
      class="customers-hero--blue"
    />

    <introduction
      introductionText="In June 2017 the team at Wheaton Chevrolet in Regina, Saskatchewan, under the direction of Luke McLellan, knew that it was time to bring more focus to their digital strategy. They wanted an easy-to-use tool that provided real, measurable ROI while offering valuable information to consumers. Plus, they wanted consumers to access this tool from landing pages strategically chosen by the dealership. When they heard about AutoVerify’s Trade-in tool (then called Tradesii), they decided to give it a shot."
    />

    <left-text-block class="top-block pb-200"
      inlineTestimonial1="“We’ve brought in an impressive amount of trade leads since we started using the Trade-in tool. Once we integrated the tool into our website and connected it to our AdWords and Facebook campaigns, lead numbers and conversion rates blew up!”"
      textBlock1="No argument there— since June 2017 Wheaton Chevrolet has averaged 58 Trade-in leads per month."
      inlineTestimonial2="“Our customers tell us that the tool is simple for them to use and it provides accurate estimates for their trade-in vehicles.”"
      imageSrc="case-studies/wheaton-1.png"
      imageAlt="Wheaton Chevrolet Trade In"
    />

    <right-text-block
      textBlock1="The tool integrated easily into the dealership’s CRM, making Jonathan’s life easier and simplifying the lead-nurturing process."
      inlineTestimonial2="“Leads are instantly delivered to our email in a format that’s easy to digest and allows our salespeople to reach out to the customer while the buying impulse is still fresh in their mind. This makes it a lot easier to get customers into the dealership, then down the road in a new ride. Trade-in leads have one of the best conversion ratios in our store! Sales people perk up when a Trade-in lead lands on their desk.”"
      imageSrc="case-studies/wheaton-3.png"
      imageAlt="Wheaton Sales People"
    />

    <left-text-block class="bottom-block pb-200"
      textBlock1="When Mobials launched its Credit tool, trying it out was a no-brainer. Credit leads tend to convert significantly higher into sales, so when the numbers started rolling in and they were averaging 21 Credit leads per month, it confirmed that their decision was a good one."
      inlineTestimonial2="“Credit leads are especially valuable because, when the tool is fully utilized by a customer, they’ve already made the conscious decision to buy. When one of those comes in, it’s usually just a matter of picking out the colour of their new vehicle! AutoVerify tools have been enormously successful for us as a whole, and we would now consider a website incomplete with them.”"
      imageSrc="case-studies/wheaton-2.png"
      imageAlt="Wheaton Chevrolet Trade In"
    />

    <statistics2
      statNumber1="21"
      statNumber2="58"
      statTitle1="Credit"
      statTitle2="Trade-in"
      statisticsSubtitle="So far, the results speak for themselves."
      statisticsTitle="In 6 months of use, That Car Place earned:"
    />

    <ctaBanner
      ctaText="Want to learn more about this story?"
      linkName="Contact Us"
      class="cta-banner__blue"
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
  name: "wheaton-chevrolet",
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
