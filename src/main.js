import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import "./../node_modules/jquery/dist/jquery.min.js";
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js";

import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");




Vue.use(VueGoogleMaps, {
  load: {
    key: 'YOUR_API_TOKEN',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
})
