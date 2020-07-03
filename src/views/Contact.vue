<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="main main-raised">
        <div class="section section-contacts">
          <div class="container">
            <div class="md-layout">
              <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
                <h1 class="text-center title">Find us</h1>
                <h4 class="text-center description">
                  Let's contact you for more information about durian products.
                </h4>
                <form class="contact-form">
                  <div class="md-layout">
                    <div class="md-layout-item md-size-50">
                      <md-field>
                        <label>Your Name</label>
                        <md-input v-model="name" type="text"></md-input>
                      </md-field>
                    </div>
                    <div class="md-layout-item md-size-50">
                      <md-field>
                        <label>Your Telephone</label>
                        <md-input v-model="phone" type="text"></md-input>
                      </md-field>
                    </div>
                  </div>
                  <md-field maxlength="5">
                    <label>Your Message</label>
                    <md-textarea v-model="message"></md-textarea>
                  </md-field>
                  <div class="md-layout">
                    <div class="md-layout-item md-size-33 mx-auto text-center">
                      <md-button class="md-success" @click="submitNow">Start Cooperation</md-button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </parallax>
  </div>
</template>

<script>
  export default {
    bodyClass: "landing-page",
    props: {
      header: {
        type: String,
        default: require("@/assets/img/contact-backImg.png")
      },
    },
    data() {
      return {
        name: null,
        phone: null,
        message: null
      };
    },
    computed: {
      headerStyle() {
        return {
          backgroundImage: `url(${this.header})`
        };
      }
    },
    methods: {
      errorTips(info='',title='warning') {
        this.$Notice.warning({
          title: title,
          desc: info,
          duration: 3
        });
      },
      successTips(info='',title='success') {
        this.$Notice.success({
          title: title,
          desc: info,
          duration: 3
        });
      },
      submitNow() {
        if (!this.name) {
          this.errorTips('Please enter your name');
          return false;
        }
        if (!this.phone) {
          this.errorTips('Please enter your telephone');
          return false;
        }
        this.successTips('We will contact you as soon as possible,Thank you!');
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
  .main {
    background: transparent;
  }
  h1, .h1 {
    font-size: 5.3125rem;
  }
  .description, .card-description, .footer-big p {
    color: #fff;
  }
  .main-raised{
    width: 60rem;
    box-shadow: none;
  }
  .md-field .md-input, .md-field .md-textarea {
    -webkit-text-fill-color: #fff !important;
  }
</style>
