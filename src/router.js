import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Contact from "./views/Contact.vue";
import Product from "./views/Product.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: '' },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "#F1B016" }
      }
    },
    {
      path: "/product",
      name: "product",
      components: { default: Product, header: MainNavbar, footer: '' },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/contact",
      name: "contact",
      components: { default: Contact, header: MainNavbar, footer: '' },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "*",
      component: () => import('./views/404')
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
