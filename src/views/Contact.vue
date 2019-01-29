<template>
  <Page>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-5">
            <GmapMap
              :center="{lat:10, lng:10}"
              :zoom="7"
              map-type-id="terrain"
              style="width: 100%; height: 70vh; top: 7vh;"
            >
              <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
              />
            </GmapMap>
          </div>
          <div class="offset-md-1 col-md-5 contact-form">
            <h2>Got a message to deliver?</h2>
            <h3 class="form-info-group">Let Us Know Who You Are:</h3>
            <label class="form-label">Full Name</label>
            <input type="text" class="form-input" placeholder="Full Name">
            <label class="form-label">Email Address</label>
            <input type="text" class="form-input" placeholder="Full Name">
            <h3 class="form-message-group">Let Us Know Your Thoughts:</h3>
            <label class="form-label">Message</label>
            <textarea class="form-message"></textarea>
            <a href="#" class="btn-primary contact-btn">Get Free Monthly Reports</a>
          </div>
        </div>


      </div>
  </Page>
</template>

<script>
// @ is an alias to /src
import Page from './../components/page';
import Leadership from './../components/leadership';

export default {
  name: "contact",
  components: {
    Page,
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
