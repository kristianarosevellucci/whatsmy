<template>
  <div id="app">
    <Page>
    <transition name="page-transition" mode="out-in" :duration="{ enter: 500, leave: 500 }">
        <router-view/>
    </transition>
    <Footer
      poweredBy="Powered by "
      footerCenterText="192 Dundas St Suite 300 | London, ON N6A 1G7 | Tel: 1.877.833.1423"
      copyRight="Copyright 2019. All rights reserved."
    />
    </Page>
  </div>
</template>

<script>

import AOS from "aos";
import "aos/dist/aos.css";

// @ is an alias to /src
import Page from './components/page';
import Footer from './components/footer';

export default {
  name: "app",
  components: {
    Footer,
    Page
  }
};

AOS.init();

</script>



<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import "../public/scss/application.scss";
@import url('https://fonts.googleapis.com/css?family=Archivo+Black|Archivo:400,700|Lora:400,700');
</style>
