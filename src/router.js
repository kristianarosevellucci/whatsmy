import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Contact from "./views/Contact.vue";
import AccidentCheck from "./views/AccidentCheck.vue";
import TradeIn from "./views/TradeIn.vue";
import Insurance from "./views/Insurance.vue";
import Credit from "./views/Credit.vue";
import ReserveNow from "./views/ReserveNow.vue";
import Reviews from "./views/Reviews.vue";
import TotalLoss from "./views/TotalLoss.vue";
import ThatCarPlace from "./views/ThatCarPlace.vue";
import WheatonChevrolet from "./views/WheatonChevrolet.vue";
import GoAutoOutlets from "./views/GoAutoOutlets.vue";
import PalladinoHonda from "./views/PalladinoHonda.vue";
import About from "./views/About.vue";
import Privacy from "./views/Privacy.vue";


Vue.use(Router);

export default new Router({
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
      path: "/tools/accident-check",
      name: "accident-check",
      component: AccidentCheck
    },
    {
      path: "/tools/trade-in",
      name: "trade-in",
      component: TradeIn
    },
    {
      path: "/tools/insurance",
      name: "insurance",
      component: Insurance
    },
    {
      path: "/tools/credit",
      name: "credit",
      component: Credit
    },
    {
      path: "/tools/reserve-now",
      name: "reserve-now",
      component: ReserveNow
    },
    {
      path: "/tools/reviews",
      name: "reviews",
      component: Reviews
    },
    {
      path: "/tools/total-loss",
      name: "total-loss",
      component: TotalLoss
    },
    {
      path: "/customers/that-car-place",
      name: "that-car-place",
      component: ThatCarPlace
    },
    {
      path: "/customers/wheaton-chevrolet",
      name: "wheaton-chevrolet",
      component: WheatonChevrolet
    },
    {
      path: "/customers/go-auto-outlets",
      name: "go-auto-outlets",
      component: GoAutoOutlets
    },
    {
      path: "/customers/palladino-honda",
      name: "palladino-honda",
      component: PalladinoHonda
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/privacy-policy",
      name: "privacy",
      component: Privacy
    },
  ]
});
