<template>
  <Page>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-5 col-lg-4 contact-form">
            <h2>Get In Touch</h2>
            <p class="contact-lead">Have questions? We're here to help. Fill out the form below and we'll get back to you shortly.</p>
            <div class="form-container">
              <div class="form-item">
                <label for="" class="form-label">First & Last Name:</label>
                <input type="text" name="" value="" class="form-field" placeholder="First Last">
              </div>
              <div class="form-item">
                <label for="" class="form-label">Email Address:</label>
                <input type="text" name="" value="" class="form-field" placeholder="email@email.com">
              </div>
              <div class="form-item">
                <label for="" class="form-label">Details About Your Reqeust:</label>
                <textarea name="name"class="form-field form-field--message" placeholder="email@email.com"></textarea>
              </div>
            </div>
            <a href="#" class="btn-primary contact-btn">Submit</a>
          </div>
          <div class="col-md-7 offset-lg-1 col-lg-7">
            <div class="row">
              <div class="offset-md-1 col-md-11">
                <p>google map here</p>
              </div>
            </div>

          </div>
        </div>
      </div>
  </Page>
</template>

<script>
// @ is an alias to /src
import Page from './../components/page';
import Leadership from './../components/leadership';
import ToolsCtaBanner from './../components/tools/tools-cta-banner';

export default {
  name: "contact",
  components: {
    Page,
    ToolsCtaBanner,
    Leadership
  }
};
</script>

<style>
  .divider {
    height: 5px;
    width: 50px;
    background: #E6E6E6;
    margin: 30px 0;
    @media screen and (max-width: 768px){
      display: block;
      margin: 30px auto;
    }
  }
</style>
