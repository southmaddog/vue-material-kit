<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mb-5">Our Products {{ products }}</h3>
        </div>
      </div>
      <div class="row">
        <div v-for="(product, idx) in products" :key="idx" class="col-lg-4 col-sm-6 mb-4">
          <ProductBlogCard
            :image="product.attributes.thumbnail ? 'http://172.105.23.214:1337' + product.attributes.thumbnail.data.attributes.formats.medium.url : 'default-image.png'"
            :name="product.attributes.title"
            :subtitle="product.attributes.category"
            :price="`$${product.attributes.price}`"
            :inStock="product.attributes.in_stock"
            :action="{ route: `#/product/${product.attributes.slug}`, color: 'success', label: 'Buy now' }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import ProductBlogCard from "../../../../examples/cards/blogCards/ProductBlogCard.vue";

export default {
  components: {
    ProductBlogCard,
  },
  data() {
    return {
      products: [], // Initialize products as an empty array
      backendUrl: __BACKEND_URL__, // Use the global variable defined in vite.config.js
    };
  },
  async created() {
    try {
      const response = await axios.get('http://172.105.23.214:1337/api/products?populate=*');
      this.products = response.data.data; // Access the 'data' array inside the response
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },
};
</script>

<style>
/* Additional styling if needed */
</style>
