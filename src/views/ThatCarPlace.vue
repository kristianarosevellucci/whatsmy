<template>
  <Page>
    <customers-hero
      imageSrc="thatcarplace-hero.png"
      imageAlt="AutoVerify Insurance"
      customersSubtitle="Independant Dealer"
      customersTitle="See how AutoVerify helps That Car Place be there for their customers 24/7."
      customersDescription="Kal Idriss, Sales Manager, That Car Place"
      class="customers-hero--yellow"
    />

    <introduction
      introductionText="Kal looked to Mobials’ suite of tools to help him achieve his dream of ‘an Amazon-like experience’, where consumers could do all their pre-purchase research online, from reviews to values to credit approval, and eventually even complete the sale."
    />

    <left-text-block class="top-block"
      inlineTestimonial1="“First we got the Trade-in tool to give us trade values, and then we got the Credit tool that tells consumers which interest rate to expect, so it’s just a matter of putting everything together. These tools have really helped consumers answer all their questions before talking to us.”"
      textBlock1=" Idriss enjoyed the transparency these tools provided — unbiased, third-party validation that the information That Car Place was providing was accurate and trustworthy."
      inlineTestimonial2=""
      textBlock2=""
      linkName=""
      imageSrc="case-studies/that-car-place-1.png"
      imageAlt="That Car Place Home"
    />

    <right-text-block class="bottom-block"
      inlineTestimonial1=""
      textBlock1="He also valued how the tools allowed his team to engage with customers outside of dealership hours."
      inlineTestimonial2="“We’re all lazy now, we don’t have time to talk to dealers, visit them — you want to sit at home at 8 pm — believe it or not, most of our inquiries come in between 6 and 12 o’clock at night, emailing us asking about pricing or credit, and we’ve been able to answer their questions by giving them the tools they need on our website, and so they come in here KNOWING what to expect.”"
      textBlock2="That Car Place has taken their use of Mobials tools one step further and tailored specific social media campaigns using the tools as bait to generate leads. Their most recent campaign, focused on the Credit tool, generated 57 leads in 6 weeks."
      linkName=""
      imageSrc="case-studies/that-car-place-2.png"
      imageAlt="That Car Place Widgets"
    />

    <statistics
      statNumber1="134"
      statNumber2="69"
      statNumber3="378"
      statTitle1="Credit Leads"
      statTitle2="Insurance Leads"
      statTitle3="Trade-in Leads"
      statisticsSubtitle="So far, the results speak for themselves."
      statisticsTitle="In 6 months of use, That Car Place earned:"
    />

    <ctaBanner
      ctaText="Want to learn more about this story?"
      linkName="Contact Us"
      class="cta-banner__yellow"
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
  name: "that-car-place",
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
