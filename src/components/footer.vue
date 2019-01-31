<template>
    <footer>
      <div class="row">
        <div class="col-sm-8 footer-subscribe">
          <p class="footer-subscribe__text">Wondering what your home or vehicle is worth?</p>
          <input type="text" placeholder="Enter your email address" class="footer-subscribe__input">
          <a href="#" class="footer-subscribe__btn">Sign Up</a>
          <p class="footer-copyright">Powered by <a href="http://www.mobials.com" target="new">Mobials</a>. All rights reserved 2018.</p>
        </div>
        <div class="col-sm-4 footer-links">
          <ul>
            <li>
              <router-link exact to="/">
                Hello
              </router-link>
            </li>
            <li>
              <router-link exact to="/how-it-works">
                How It Works
              </router-link>
            </li>
            <li>
              <router-link exact to="/about">
                Our Story
              </router-link>
            </li>
            <li>
              <router-link exact to="/contact">
                Get In Touch
              </router-link>
            </li>
          </ul>
          <img src="../../public/img/whatsmy-logo-icon-light.svg" alt="WhatsMy Icon" class="footer__icon">
        </div>
      </div>
    </footer>
</template>

<script>
  export default {
    name: "Footer",
  }
</script>

<style lang="scss" scoped>
  @import "../../public/scss/application.scss";
</style>
