<template>
    <div class="page-container" :class="{navigationOpen}">
        <Header
            :class="{headerFixed}"
            @toggleNavigation="toggleNavigation"
            @closeNavigation="closeNavigation"
        />
        <main>
            <slot></slot>
        </main>
        <Footer/>
        <div class="line-transition">
            <div class="yellow-gradient line"/>
            <div class="pink-gradient line"/>
            <div class="blue-gradient line"/>
        </div>
    </div>
</template>

<script>
import Header from './../components/header';
import Footer from './../components/footer';
export default {
  name: "Page",
  components: {
    Header,
  },
  data() {
    return {
      navigationOpen: false,
      headerFixed: false
    };
  },
  methods: {
    toggleNavigation: function() {
      this.navigationOpen = !this.navigationOpen;
      document.body.classList.toggle("no-scroll");
    },
    closeNavigation: function() {
      this.navigationOpen = false;
      document.body.classList.remove("no-scroll");
    },
    headerTransition: function() {
      if (window.scrollY > 10 && !this.headerFixed) {
        this.headerFixed = true;
      } else if (window.scrollY <= 10 && this.headerFixed) {
        this.headerFixed = false;
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.headerTransition);
  },
  destroyed() {
    window.removeEventListener("scroll", this.headerTransition);
  }
};
</script>
