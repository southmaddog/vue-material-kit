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
            <img :src="fullImageUrl" alt="Product Image" class="img-fluid rounded shadow-lg" />
          </div>
          <div class="col-lg-6 my-auto">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <h1 class="text-4xl font-bold mb-4">{{ products.title }}</h1>
                  <span v-if="!products.status" class="badge bg-danger mb-3">Not in stock</span>
                  <span v-if="products.status" class="badge bg-success mb-3">In stock</span>
                  <h5 class="text-2xl font-semibold mb-4">Price: {{ products.price }}$</h5>
                  <p class="mb-4">
                    Category: {{ products.category }}<br />
                    刊登日期: {{ products.createdAt }}
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
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import Header from "../../../examples/Header.vue";
import Footer from "./Sections/AuthorFooter.vue";
import image from "@/assets/img/city-profile.jpg";
</script>

<script>
import axios from "axios";

export default {
  data() {
    return {
      frontendUrl: __FRONTEND_URL__, // Assuming this is defined globally in your environment
      backendUrl: __BACKEND_URL__, // Assuming this is defined globally in your environment
      products: {}, // Initialize products as an empty object
    };
  },
  computed: {
    fullImageUrl() {
      return this.products.thumbnail && this.products.thumbnail.data
        ? this.backendUrl.replace(/\/$/, "") + this.products.thumbnail.data.attributes.url
        : "";
    },
  },
  async created() {
    try {
      const slug = this.$route.params.slug;
      const response = await axios.get(
        `${this.backendUrl}api/products?filters[slug][$eq]=${slug}&populate=*`
      );
      this.products = response.data.data[0].attributes; // Access the 'data' array inside the response
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
</style>
