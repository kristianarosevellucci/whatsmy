<template>
    <Page>

    <tools-hero
      imageSrc="credit-hero.png"
      imageAlt="AutoVerify Credit"
      toolSubtitle="AutoVerify"
      toolTitle="Credit"
      toolDescription="Dealerships asked us to help them reduce costs. We listened."
      linkName="Watch Demo"
      class="tools-hero--maroon"
    />

    <introduction
      introductionText="Reduce your monthly spend by only running vehicle history reports on the vehicles that need it, not the ones that don’t. Only 30% of vehicles have accident history. Why buy costly history reports for 100% of your vehicles?"
    />

    <tool-benefits
      imageSrc="how-av-helps--credit.png"
      imageAlt="Screens"
      benefitsTitle="AutoVerify Credit Helps You:"
      benefitsNumber1="01"
      benefitsTitle1="Simplify the Process"
      benefitsText1="AutoVerify Credit tool provides a free TransUnion credit profile, doesn’t affect credit ratings, calculates monthly payments and lets people apply online easily — without any long, complicated forms."
      benefitsNumber2="02"
      benefitsTitle2="Valuable Qualified Leads"
      benefitsText2="Dealers love AutoVerify Credit because it delivers high-converting, qualified leads. On average, 30% of Credit leads convert to sales."
      benefitsNumber3="03"
      benefitsTitle3="Optimize for Mobile"
      benefitsText3="Easily integrated with your website, Credit is optimized for mobile so it delivers consumers the information they’re looking for, in whichever format they want it."
      benefitsNumber4="04"
      benefitsTitle4="Save Time"
      benefitsText4="Credit helps you qualify leads and eliminate wasted staff time by setting up test drives on the vehicles the customer can afford, not the ones they can't."
    />

    <tool-summary
      imageSrc="reports-credit.png"
      imageAlt="Screens"
      summaryTitle="Get valuable, qualified leads."
      summaryText="Why are you paying for information that's available for free?"
      bullet1="Recall status is available free online"
      bullet2="Odometer rollbacks can be detected by your service department"
      bullet3="Do buyers really care about registration history?"
    />

    <testimonials
      quote="“Our dealership got Mobials a few months ago, and we already have over 400 reviews! We just recently turned on the new Google feature and were able to move our Google ranking in a positive direction. I love the new feature that allows me to manage everything through one platform.”"
      author="Susan Gubasta"
      authorJob="President, TADA, Dealer Principal, Mississauga Toyota"
    />

    <cta-banner
      ctaText="Want to see it in action?"
      linkName="Watch Demo"
      class="cta-banner__maroon"
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
  name: "Credit",
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

<style lang="scss">
  .divider {
    height: 5px;
    width: 50px;
    background: #E6E6E6;
    display: block;
    margin: 30px auto;
  }
</style>
