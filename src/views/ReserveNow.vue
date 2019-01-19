<template>
  <Page>

  <tools-hero
    imageSrc="reservenow-hero.png"
    imageAlt="AutoVerify Reserve Now"
    toolSubtitle="AutoVerify"
    toolTitle="Reserve Now"
    toolDescription="Customer reserves the vehicle they want, you get the lead and the deposit."
    linkName="Watch Demo"
    class="tools-hero--pink"
  />

  <introduction
    introductionText="The average car buyer does 18+ hours of online research. When they know what they want, make sure they can get it, by allowing them to reserve the vehicle right on your site."
  />

  <tool-benefits
    imageSrc="how-av-helps--reserve.png"
    imageAlt="Screens"
    benefitsTitle="AutoVerify Reserve Now Helps You:"
    benefitsNumber1="01"
    benefitsTitle1="Transform the Transaction"
    benefitsText1="Consumers are researching online, but only 11% are ready to purchase there. 89% still want to finalize their purchase in your dealership. Let them reserve online, even if they're not ready to buy there."
    benefitsNumber2="02"
    benefitsTitle2="Generate Leads"
    benefitsText2="They found the vehicle they want on your site, so contact them ASAP for an appointment. Someone willing to put down a deposit on a vehicle is the highest-converting lead you can get. Don’t stand in their way."
    benefitsNumber3="03"
    benefitsTitle3="Give Them Comfort"
    benefitsText3="Ease uncertainty with a tool that makes it clear its deposits are refundable at any point. Our tool makes the customer more likely to reserve because they feel comfortable knowing their money is safe and easily refunded."
    benefitsNumber4="04"
    benefitsTitle4="Make It Easy"
    benefitsText4="They want to secure a vehicle on your lot, so let them. Accept reservations with all major credit cards, then schedule an appointment for them to view the car and close the deal."
  />

  <tool-summary
    imageSrc="reports-reservenow.png"
    imageAlt="Screens"
    summaryTitle="It's true-- there's more to a history report than accident data. But..."
    summaryText=" "
    bullet1="Allows customer to reserve vehicle"
    bullet2="Instantly process deposits into your account"
    bullet3="Create queue on reserved vehicles"
  />

  <testimonials
    quote="“Great team!! Easy to work with and works hard at integrating their products on our sites! So far great turn out with their products! Worth giving it a try!”"
    author="Amine Hanna"
    authorJob="PBuckingham Toyota"
  />

  <cta-banner
    ctaText="Want to see it in action?"
    linkName="Watch Demo"
    class="cta-banner__pink"
  />

  </Page>
</template>

<script>
// @ is an alias to /src
import Page from './../components/page';
import Introduction from './../components/introduction';
import LeftTextBlock from './../components/left-text-block';
import RightTextBlock from './../components/right-text-block';
import Statistics from './../components/statistics';
import CtaBanner from './../components/cta-banner';
import MoreCaseStudies from './../components/more-case-studies';
import ToolSummary from './../components/tool-summary';
import ToolBenefits from './../components/tool-benefits';
import ToolsHero from './../components/tools-hero';
import Testimonials from './../components/tools/testimonials';

export default {
  name: "ReserveNow",
  components: {
    Introduction,
    CtaBanner,
    Page,
    Testimonials,
    ToolSummary,
    ToolBenefits,
    ToolsHero
  }
};
</script>

<style>
  .divider {
    height: 5px;
    width: 50px;
    background: #E6E6E6;
    display: block;
    margin: 30px auto;
  }
</style>
