<template>
  <Page>

  <tools-hero
    imageSrc="insurance-hero.png"
    imageAlt="AutoVerify Insurance"
    toolSubtitle="AutoVerify"
    toolTitle="Insurance"
    toolDescription="Generate quality leads and eliminate 'be-backs' by supporting your customer's research."
    linkName="Watch Demo"
    class="tools-hero--yellow"
  />

  <introduction
    introductionText="Insurance costs differ for every vehicle. Consumers need to know their insurance costs — let them find it from you. We work with the industry's most trusted insurance providers to give consumers multiple quotes so they can confidently select their preferred vendor."
  />

  <tool-benefits
    imageSrc="how-av-helps--insurance.png"
    imageAlt="Screens"
    benefitsTitle="AutoVerify Insurance Helps You:"
    benefitsNumber1="01"
    benefitsTitle1="Generate Leads"
    benefitsText1="Generate new leads by helping consumers compare rates to find the lowest ones from our list of national insurers, without leaving your site. Plus, 9% of Insurance leads convert to sales."
    benefitsNumber2="02"
    benefitsTitle2="Build Trust"
    benefitsText2="Car-buyers need to know the total cost of ownership to understand how much they can afford to spend.  By being there with the info they need throughout the buying process, you can build trust so they think of you when it’s time to buy."
    benefitsNumber3="03"
    benefitsTitle3="Be Visible Online"
    benefitsText3="Put yourself where your customers are. Make your website provide the info they need, on the device they choose, to make educated decisions at every stage of the buying process."
    benefitsNumber4="04"
    benefitsTitle4="Save Time"
    benefitsText4="Some customers leave your store to find an insurance rate before buying. Give it to them before they leave, so they can buy that day."
  />

  <tool-summary
    imageSrc="reports-insurance.png"
    imageAlt="Screens"
    summaryTitle="It's true-- there's more to a history report than accident data. But..."
    summaryText=" "
    bullet1="Instantly provide multiple quotes from trusted brands"
    bullet2="Turn 'I'll be back' into 'that makes sense'"
    bullet3=" "
  />

  <testimonials
    quote="“Great team!! Easy to work with and works hard at integrating their products on our sites! So far great turn out with their products! Worth giving it a try!”"
    author="Amine Hanna"
    authorJob="PBuckingham Toyota"
  />

  <cta-banner
    ctaText="Want to see it in action?"
    linkName="Watch Demo"
    class="cta-banner__yellow"
  />

  </Page>
</template>

<script>
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
  name: "Insurance",
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
