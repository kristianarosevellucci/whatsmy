<template>
  <Page>

  <tools-hero
    imageSrc="reviews-hero.png"
    imageAlt="AutoVerify Reviews"
    toolSubtitle="AutoVerify"
    toolTitle="Reviews"
    toolDescription="Manage your online reputation, reduce costs and be chosen."
    linkName="Watch Demo"
    class="tools-hero--pink"
  />

  <introduction
    introductionText="84% of consumers trust online reviews as much as a personal recommendation. Integrate your reviews right into your website, so they can see you’re a trustworthy dealer without leaving your page.

Car shoppers are 90% more likely to visit your website and 5.3 times more likely to visit your dealership if you have positive reviews online."
  />

  <tool-benefits
    imageSrc="how-av-helps--reviews.png"
    imageAlt="Screens"
    benefitsTitle="AutoVerify Reviews Helps You:"
    benefitsNumber1="01"
    benefitsTitle1="Stop Digital Walk-offs"
    benefitsText1="Sending customers to Google to see your reviews means they’ll see competitor’s reviews too. Keep them focused on you by using a Review tool that integrates right into your website and VDPs."
    benefitsNumber2="02"
    benefitsTitle2="Make It Simple"
    benefitsText2="Use a single tool that automatically requests reviews from your customers via text or email, and connects them with your Google, Facebook and Reviews content."
    benefitsNumber3="03"
    benefitsTitle3="Drive More Traffic"
    benefitsText3="Online reviews are the 5th highest determiner of where a business ranks online. Use Reviews to increase your web presence, so you show up first when buyers search for a dealership."
    benefitsNumber4="04"
    benefitsTitle4="Give Yourself a Safety Net"
    benefitsText4="Some of your customers don’t have a Facebook or Google account. Make sure they can still leave a review by using a tool that is simple, quick and requires no account registration. "
  />

  <tool-summary
    imageSrc="reports-reviews.png"
    imageAlt="Screens"
    summaryTitle="It's true-- there's more to a history report than accident data. But..."
    summaryText=" "
    bullet1="Option to get reviews on Google and Facebook"
    bullet2="Simple DMS and CRM integrations"
    bullet3="Automatic review requests via text or email"
    bullet4="Notifications you can customize"
    bullet5="Reduction in cost-per-review— save staffing costs"
  />

  <testimonials
    quote="“So far, so good! We're getting more reviews through Mobials than we were getting with our previous provider. They are always around to answer any questions I have about set up, etc.”"
    author="Erica Sandy"
    authorJob="Tom Smith Chevrolet Buick GMC"
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
  name: "Reviews",
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
