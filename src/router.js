import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Contact from "./views/Contact.vue";
import About from "./views/About.vue";
import HIW from "./views/How-It-Works.vue";
import Privacy from "./views/Privacy.vue";


Vue.use(Router);

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/how-it-works",
      name: "hiw",
      component: HIW
    },
    {
      path: "/privacy-policy",
      name: "privacy",
      component: Privacy
    },
  ]
});
