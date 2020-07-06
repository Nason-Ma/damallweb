<template>
  <div class="wrapper" style="position: relative">
    <parallax2 class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
                  class="md-layout-item md-size-60 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">
              Your customers are everywhere
              So do we.
            </h1>
            <h4>
              From origin to brand concept, it records the whole process from farmland to dining table. We are so dedicated and professional, just for a good durian.
            </h4>
            <br />
            <md-button
                    href="javascript:void(0)"
                    class="md-success md-lg"
                    @click="startNow"
            > Start now</md-button>
          </div>
        </div>
      </div>
    </parallax2>
    <parallax2 class="section page-header header-filter" :style="contentStyle">

    </parallax2>
    <parallax2 class="section page-header header-filter" :style="footerStyle">
      <div class="md-list-item-content" style="width: 60%">
        <ul class="footer-info">
          <h3 style="color: #222222;margin-bottom: 20px">Our mission</h3>
          <li v-for="(item,index) in footerInfo" :key="index">
            <p><img src="../assets/img/arrow-right.png" alt="">{{ item }}</p>
          </li>
        </ul>
        <div class="people-img">
          <img
                  :src="footerPeople"
                  alt="people"
          />
        </div>
      </div>
    </parallax2>
    <parallax2 class="section page-header header-filter" style="height: 60px;padding: 40px 0;background-color: #F1B016">
      <div class="copyright">
        Copyright &copy; {{ year }}, made in
        <a href="https://www.creative-tim.com/" target="_blank">Big Horse</a>
        for a better web.
      </div>
    </parallax2>
    <!--<div class="main main-raised">

    </div>-->
    <div class="main main-raised" style="background-color: transparent">
      <div class="section" style="padding-top: 20px">
        <div class="container">
          <div class="md-layout" style="background-color: #ffffff;border-radius: 6px;padding:10px 0 40px 0">
            <div
                    class="md-layout-item md-size-90 md-xsmall-size-100 mx-auto text-center"
            >
              <h4 class="title text-left" style="color: #BCBCBC">Who are we</h4>
              <h2 class="title text-left">
                We have advanced cat king planting technology and freezing technology to ensure that every high-quality nostalgia you shipped overseas
              </h2>
              <h3 class="description text-left">
                We operate a complete set of food manufacturing entities through our company
                to produce a series of high-quality durian and some durian derivatives.
                The king of Maoshan durian is well known in Southeast Asia and is known
                as the "king of fruits". Malaysian durian is unique for its unique aroma
                and strong fruit shell covered with brambles. Our products are even produced by
                the advanced Musang King durian, which attracts many durian lovers all over the world.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="section main-offer" style="padding-top: 10px">
        <div class="container">
          <h2 style="color: #ffffff;margin: 0">What can we offer</h2>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-size-30 md-small-size-100 md-xsmall-size-100 mx-auto text-center" v-for="(item,index) in offerInfo" :key="index">
                <div class="offer-info info">
                  <div class="icon icon-info">
                    <h3>{{ item.title }}</h3>
                  </div>
                  <div style="text-align: left">
                    <h4 class="info-title">{{ item.ctitle }}</h4>
                  </div>
                  <p>
                    {{ item.content }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    bodyClass: "landing-page",
    props: {
      header: {
        type: String,
        default: require("@/assets/img/home-bg1.jpg")
      },
      contentBg: {
        type: String,
        default: require("@/assets/img/home-bg2.jpg")
      },
      footerBg: {
        type: String,
        default: require("@/assets/img/home-footer.png")
      },
      footerPeople: {
        type: String,
        default: require("@/assets/img/home-footer-people.png")
      }
    },
    data() {
      return {
        name: null,
        email: null,
        message: null,
        year: new Date().getFullYear(),
        offerInfo:[
          {
            title: 'Leading exporter',
            ctitle: '领先的出口商',
            content: 'Big horse, founded in 1996, is\n' +
                    ' a leading exporter of quality\n' +
                    ' food and frozen durian\n' +
                    ' products in Malaysia. Over the\n' +
                    ' years, it has developed rapidly,\n' +
                    ' and its export business covers\n' +
                    ' Australia, New Zealand, China,\n' +
                    ' Hong Kong, France, the\n' +
                    ' Netherlands and the United\n' +
                    ' States.',
          },
          {
            title: 'High quality planting',
            ctitle: '高品质种植',
            content: 'Big horse in durian and tropical fruits We have a high reputation for our products and grow our own water\n' +
                    ' Fruit to ensure the best quality fruit. Our orchard\n' +
                    ' The quality is very different, because our orchard only grows the most\n' +
                    ' High grade durian and tropical fruit.',
          },
          {
            title: 'Cold chain operators',
            ctitle: '冷链运营商',
            content: 'Big horse also produces frozen Durian\n' +
                    ' Leading manufacturer and cold chain of products and durian desserts\n' +
                    ' Business. The company has excellent refrigeration capacity and can\n' +
                    ' To produce high quality products to meet the needs of customers.',
          }
        ],
        footerInfo: [
          'Be the best durian in the world.',
          'Let more people enjoy Musang King of Malaysia.',
          'Promote Malaysia to become an excellent durian Holy Land.',
          'Make the best cold chain transportation of fruits and vegetables.',
          'To be the industry leader of the highest quality durian fruit and food products.'
        ]
      };
    },
    computed: {
      headerStyle() {
        return {
          backgroundImage: `url(${this.header})`
        };
      },
      contentStyle() {
        return {
          backgroundImage: `url(${this.contentBg})`,
          minHeight: `1140px`
        };
      },
      footerStyle() {
        return {
          backgroundImage: `url(${this.footerBg})`,
          height: `440px`
        };
      }
    },
    methods: {
      startNow() {
        this.$Modal.success({
          okText:'OK',
          title: 'welcome',
          content: 'Welcome to this website'
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .md-card-actions.text-center {
    display: flex;
    justify-content: center !important;
  }
  .contact-form {
    margin-top: 30px;
  }

  .md-has-textarea + .md-layout {
    margin-top: 15px;
  }
  h1 {
    font-size: 3em;
  }
  h4, .h4 {
    font-size: 1.225rem;
    line-height: 1.8em;
  }
  .main-raised {
    /*margin: -1560px 280px 0px;*/
    position: absolute;
    top: 32%;
    left: 0;
    right: 0;
    margin: auto;
    box-shadow: none;
  }
  .main-offer .md-layout{
    margin-top: 2rem;
  }
  .main-offer .md-layout .md-layout-item{
    min-width: 31%;
    max-width: 31%;
    flex: 0 1 31%;
  }
  .main-offer .md-layout-item:first-of-type{
    margin-right: 0px;
  }
  .main-offer .md-layout-item:last-of-type{
    margin-left: 0px;
  }
  .offer-info{
    min-height: 90%;
    border: 2px #ffffff solid;
    padding: 30px;
  }
  .main-offer .offer-info h3 {
    color: #F1B016;font-weight: 500;text-align: left;margin-top: 0;
  }
  .main-offer .offer-info h4 {
    color: #ffffff;margin-top: 10px;border-bottom: 1px solid #F1B016;text-align: left;display: inline-block
  }
  .main-offer .offer-info p {
    text-align: left;font-size: 1.1rem;color: #ffffff;margin: 0;line-height: 1.6em;min-height: 253px;
  }
  .footer-info li {
    list-style: none;
    line-height: 2.5rem;
  }
  .footer-info li p {
    font-size: 14px;
    color: #222222;
  }
  .footer-info li p img {
    width: 28px;
    height: 28px;
    margin-right: 15px;
  }
  .people-img {
    float: right;
  }
  .people-img img {
    width: 340px;
    height: 300px;
  }
  .copyright{
    color: #ffffff;
  }
</style>
