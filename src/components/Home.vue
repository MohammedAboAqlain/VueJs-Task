<template>
  <div>
    <div id="logo" class="mx-auto">
      <img
        src="../assets/images/logo.png"
        alt="image not loaded"
        class="img-fluid"
        width="50"
        height="50"
      />
    </div>

    <div id="nav">
      <b-navbar toggleable="xs" type="dark" variant="info">

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <div class="row no-gutters position-absolute" style="right: 7%">
            <b-nav-item class="nav-link col-4">
                <a href="#" class="text-white">الرئيسية</a>
                </b-nav-item>
            <b-nav-item href="#" class="nav-link col-8">
                <a href="#about-us" class="text-white">عن الشركة</a>
            </b-nav-item>
        </div>

        <b-navbar-brand href="#">
            <button class="btn btn-danger" @click="changeLanguage">
              En/Ar
            </button>
        </b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">الرئيسية</b-nav-item>
            <b-nav-item href="#">عن الشركة</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <div id="slider">
      <app-slider></app-slider>
    </div>

    <div id="firebase-content" class="container my-5">
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <h3>عنوان نص</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            eligendi, nulla aliquam earum reprehenderit veniam id asperiores
            accusantium sit natus suscipit nostrum veritatis? Voluptatem
            adipisci aspernatur tempora tempore accusantium similique.
          </p>
        </div>
        <div class="col-md-6 col-lg-8">
          <div class="row">
            <div v-for="img in images" :key="img" class="col-md-6">
              <img
                :src="require('../assets/images/' + img.imgSrc)"
                alt="image not loaded"
                class="w-100"
              />
              <h6 class="caption">{{ img.caption }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <AboutUs id="about-us" />
  </div>
</template>

<script>
import Slider from './Slider.vue';
import AboutUs from './AboutUs.vue';

export default {
  data() {
    return {
      images: [],
    };
  },
  methods: {
    fetchImages() {
      this.$http
        .get('blogs.json')
        .then((res) => res.json())
        .then((data) => {
          console.log('fetching data...');
          const resultArray = [];
          for (const key in data) {
            resultArray.push(data[key]);
          }
          this.images = resultArray;
        });
    },
    changeLanguage() {
      this.$emit('languageChanged', 'app-home-en');
    },
  },
  components: {
    appSlider: Slider,
    AboutUs,
  },
  created() {
    this.fetchImages();
  },
};
</script>
