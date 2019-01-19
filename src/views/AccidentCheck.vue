<template>
  <Page>

  <tools-hero
    imageSrc="accidentcheck-hero.png"
    imageAlt="AutoVerify Trade-in"
    toolSubtitle="AutoVerify"
    toolTitle="Accident Check"
    toolDescription="More leads. Better leads. Even on mobile."
    linkName="Watch Demo"
    class="tools-hero--maroon"
  />

  <introduction
    introductionText="Reduce your monthly spend by only running vehicle history reports on the vehicles that need it, not the ones that don’t. Only 30% of vehicles have accident history. Why buy costly history reports for 100% of your vehicles?"
    />

  <tool-benefits
    imageSrc="help-placeholder.png"
    imageAlt="Screens"
    benefitsTitle="AutoVerify Accident Check Helps You:"
    benefitsNumber1="01"
    benefitsTitle1="Slash Costs"
    benefitsText1="You spend a small fortune on history reports every month. Accident Check lets you stay transparent while avoiding the expense of running reports on clean vehicles. Run your VINs through our system to discover which vehicles have accident history."
    benefitsNumber2="02"
    benefitsTitle2="Meet Disclosure Requirements"
    benefitsText2="You need to disclose accident history to your buyers. 100%. Run your inventory through our Accident Check tool, find out which vehicles have accident history, and purchase history reports on them. "
    benefitsNumber3="03"
    benefitsTitle3="Save Time"
    benefitsText3="Simply upload a list of VINs and you’ll receive a yes/no on whether the vehicle has accident history. Pull out the clean VINs, and only purchase history reports for the ones with damage. It’s a no-brainer."
  />

  <tool-summary
    imageSrc="reports-placeholder.png"
    imageAlt="Screens"
    summaryTitle="It's true-- there's more to a history report than accident data. But..."
    summaryText="Why are you paying for information that's available for free?"
    bullet1="Recall status is available free online"
    bullet2="Odometer rollbacks can be detected by your service department"
    bullet3="Do buyers really care about registration history?"
  />

  <testimonials
    quote="“Mobials has been very prompt at getting things done and has been very helpful anytime I have had questions or need anything done at all.  Super easy to work with.”"
    author="Hutch Orr"
    authorJob="Auto Worx"
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
  name: "contact",
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
