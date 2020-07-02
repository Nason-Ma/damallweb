<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <a href="/">
          <img
             :src="headLogo"
             alt="Da Mall"
             class=""
          />
        </a>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <template v-for="(item,index) in menuData">
                <md-list-item
                        :key="index"
                        :href=item.href
                        v-if="showDownload"
                        :class="{active:item.routeName==activeRoute}"
                        @click="scrollToElement($event,item.routeName)"
                        @mouseover="mouseOver($event)"
                        @mouseleave="mouseLeave($event,item.routeName)"
                >
                  <p :class="{white:item.routeName==activeRoute}">{{ item.text }}</p>
                </md-list-item>
              </template>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>
<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    },
    headLogo: {
      type: String,
      default: require("@/assets/img/head-logo2.png")
    }
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false,
      activeRoute:'',
      menuData: [
        {
          routeName: 'index',
          href: '/',
          text: 'Home'
        },
        {
          routeName: 'product',
          href: '#/product',
          text: 'Product'
        },
        {
          routeName: 'contact',
          href: '#/contact',
          text: 'Contact'
        }
      ]
    };
  },
  computed: {
    showDownload() {
      return true;
      const excludedRoutes = ["login", "landing", "profile"];
      return excludedRoutes.every(r => r !== this.$route.name);
    }
  },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement(e,routeName) {
      this.activeRoute = routeName;
      let itemEles = document.getElementsByClassName('md-list-item');
      for(var i=0;i<itemEles.length;i++){
        itemEles[i].style.borderColor='transparent';
      }
      e.currentTarget.style.borderBottom = '2px #ffffff solid';
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    },
    // 移入
    mouseOver(e) {
      e.currentTarget.style.borderBottom = '2px #ffffff solid';
    },
    // 移出
    mouseLeave(e,routeName) {
      if(this.activeRoute != routeName){
        e.currentTarget.style.borderBottom="2px transparent solid";
      }
    }
  },
  mounted() {
    this.activeRoute = this.$route.name;
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>
<style lang="scss" scoped>
  .md-list-item a .md-ripple p {
    font-weight: 400;
    font-size: 24px;
  }
  .md-toolbar.md-white {
    background-color: #F1B016 !important;
  }
  .active{
    border-bottom: 2px #ffffff solid;
  }
  .bottom-line{
    border-bottom: 2px transparent solid;
  }
  .white{
    color: #ffffff;
  }
  .md-list-item {
    margin-left: 1.5rem;
  }
</style>
