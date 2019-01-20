<template>
    <header>
      <div class="header-container container-fluid">
        <div class="content-container">
          <div class="header-cta-container">
            <router-link to="/">
              <img
                :src="require(`@/../public/img/whatsmy-logo.svg`)"
                :alt="imageAlt"
                class="header-logo"
              />
            </router-link>
            <router-link class="btn-primary header-btn" to=“/”>Sign In</router-link>
            <router-link class="btn-primary header-btn" to=“/”>Get Free Monthly Reports</router-link>
            <button class="menuToggle" @click="$emit('toggleNavigation')">
              <span class="menuIcon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="navigation">
        <div class="container-fluid">
          <div class="navigation-content">
            <div class="row">
              <div class="offset-md-6 col-md-4">
                <ul class="navigation__link-group top-group">

                  <div class="link1">
                    <div class="link__bg">
                       <router-link exact to="/tools/credit" @click.native="$emit('closeNavigation')" class="navigation__item">Hello</router-link>
                      <div class="red-block"></div>
                    </div>
                  </div>

                  <div class="link2">
                    <div class="link__bg">
                       <router-link exact to="/tools/credit" @click.native="$emit('closeNavigation')" class="navigation__item">How It Works</router-link>
                      <div class="red-block"></div>
                    </div>
                  </div>

                  <div class="link3">
                    <div class="link__bg">
                       <router-link exact to="/tools/credit" @click.native="$emit('closeNavigation')" class="navigation__item">Our Story</router-link>
                      <div class="red-block"></div>
                    </div>
                  </div>

                  <div class="link4">
                    <div class="link__bg">
                       <router-link exact to="/tools/credit" @click.native="$emit('closeNavigation')" class="navigation__item">Get In Touch</router-link>
                      <div class="red-block"></div>
                    </div>
                  </div>

                </ul>
                <ul class="navigation__link-group navigation__sublinks">
                  <li><router-link exact to="/tools/credit" @click.native="$emit('closeNavigation')">Terms &amp; Conditions</router-link></li>
                  <li><router-link exact to="/tools/credit" @click.native="$emit('closeNavigation')">Privacy Policy</router-link></li>
                </ul>
                <p class="navigation__copyright">Copyright © 2019, Mobials Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>

<script>

export default {
  name: "Header",
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
  .btn-primary {
    margin-right: 20px;
  }
</style>
