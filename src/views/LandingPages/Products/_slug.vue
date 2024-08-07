<template>
  <DefaultNavbar transparent />
  <Header>
    <div
      class="page-header min-height-200"
      :style="{ backgroundImage: `url(${image})` }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-8"></span>
    </div>
  </Header>
  <div class="card card-body mx-3 mx-md-4 mt-n6" :style="{ boxShadow: '0 20px 30px rgba(0, 0, 0, 0.25), 0 10px 20px rgba(0, 0, 0, 0.15)' }">
    <section class="py-9" style="padding-top: 100px !important;">
      <div class="container" style="padding-bottom:200px;">
        <div class="row">
          <div class="col-lg-6">
            <div v-if="imageUrls.length > 1">
              <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                  <button type="button" v-for="(imgUrl, index) in imageUrls" :key="'button' + index" :data-bs-target="'#carouselExampleIndicators'" :data-bs-slide-to="index" :class="{ active: index === 0 }" aria-current="index === 0" aria-label="'Slide ' + (index + 1)"></button>
                </div>
                <div class="carousel-inner">
                  <div v-for="(imgUrl, index) in imageUrls" :key="'slide' + index" :class="['carousel-item', { active: index === 0 }]">
                    <img :src="imgUrl" class="d-block w-100 carousel-image" alt="Product Image">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <!-- Thumbnails -->
              <div class="mt-4 d-flex justify-content-center">
                <div v-for="(imgUrl, index) in imageUrls" :key="'thumbnail' + index" class="thumbnail-container">
                  <img :src="imgUrl" class="img-thumbnail" @click="goToSlide(index)" alt="Thumbnail Image">
                </div>
              </div>
            </div>
            <div v-else-if="imageUrls.length === 1">
              <img :src="imageUrls[0]" class="img-fluid rounded shadow-lg" alt="Product Image">
            </div>
            <div v-else>
              <img src="/src/assets/img/bg9.jpg" alt="Default Image" class="img-fluid rounded shadow-lg" />
            </div>
          </div>
          <div class="col-lg-6 my-auto">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <h1 class="text-4xl font-bold mb-4">{{ products.title }}</h1>
                  <span v-if="!products.in_stock" class="badge bg-danger mb-3">Not in stock</span>
                  <span v-if="products.in_stock" class="badge bg-success mb-3">In stock</span>
                  <h5 class="text-2xl font-semibold mb-4">Price: {{ products.price }}$</h5>
                  <p class="mb-4">
                    Category: {{ products.category }}<br />
                    刊登日期: {{ new Date(products.createdAt).toLocaleDateString() }}
                  </p>
                  <h4 class="text-xl font-bold mb-2">Description:</h4>
                  <div v-if="products.description" v-html="products.description"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <Footer />
</template>

<script setup>
import { ref } from 'vue';
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import Header from "../../../examples/Header.vue";
import Footer from "./Sections/AuthorFooter.vue";
import image from "@/assets/img/city-profile.jpg";

// Import Bootstrap locally
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import * as bootstrap from 'bootstrap';  // Import bootstrap JS to ensure it is defined

const products = ref({});
const imageUrls = ref([]);

function goToSlide(index) {
  const carousel = document.getElementById('carouselExampleIndicators');
  const carouselInstance = new bootstrap.Carousel(carousel);
  carouselInstance.to(index);
}
</script>

<script>
import axios from "axios";

export default {
  data() {
    return {
      frontendUrl: __FRONTEND_URL__, // Assuming this is defined globally in your environment
      backendUrl: __BACKEND_URL__, // Assuming this is defined globally in your environment
      products: {}, // Initialize products as an empty object
      imageUrls: [], // Initialize imageUrls as an empty array
    };
  },
  computed: {
    fullImageUrl() {
      if (this.products.thumbnail && this.products.thumbnail.data) {
        if (Array.isArray(this.products.thumbnail.data)) {
          return this.products.thumbnail.data.map(img => this.backendUrl.replace(/\/$/, "") + img.attributes.url);
        } else {
          return [this.backendUrl.replace(/\/$/, "") + this.products.thumbnail.data.attributes.url];
        }
      }
      return [];
    },
  },
  async created() {
    try {
      const slug = this.$route.params.slug;
      const response = await axios.get(
        `${this.backendUrl}api/products?filters[slug][$eq]=${slug}&populate=*`
      );
      if (response.data && response.data.data && response.data.data.length > 0) {
        this.products = response.data.data[0].attributes; // Access the 'data' array inside the response
        this.imageUrls = this.fullImageUrl;
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
};
</script>

<style scoped>
.page-header {
  background-size: cover;
  background-position: center center;
}
.card {
  margin-top: -6rem !important;
}
.carousel-inner {
  max-height: 500px; /* Set a fixed height for the carousel */
}
.carousel-image {
  height: 100%;
  object-fit: cover; /* Ensure images cover the carousel area without distortion */
}
.thumbnail-container {
  cursor: pointer;
  margin: 0 5px;
}
.thumbnail-container img {
  width: 100px;
  height: 70px;
  object-fit: cover;
}
</style>
