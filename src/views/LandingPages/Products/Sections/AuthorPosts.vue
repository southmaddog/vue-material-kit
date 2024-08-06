<script setup>
import bg0 from "@/assets/img/bg9.jpg";
</script>

<template>
  <section class="py-3">
    <div class="container">
      <div class="row mb-5">
        <h1 class="col-lg-12">Our Products</h1>
      </div>
      <div class="row">
        <!-- Filter-->
        <div class="col-lg-3 filter-container">
          <div class="filter-content">
            <h5 class="filter-title">Filter</h5>
            <!-- Filter by text-->
            <form>
              <div class="form-group">
                <h6 class="filter-subtitle">Sort by Text</h6>
                <input type="text" v-model='filtereddata.title' class="form-control input-group-outline form-label" id="exampleFormControlInput1" placeholder="ex: product 1">
              </div>
            </form>
            
            <!-- Filter Sort by Price -->
            <form>
              <div class="form-group">
                <h6 class="filter-subtitle">Sort by Price</h6>
                <div class="filter-options">
                  <label class="filter-option">
                    <input type="radio" v-model="sort" value="pricelow" />
                    <span class="checkmark"></span>
                    Price (Low to High)
                  </label>
                  <label class="filter-option">
                    <input type="radio" v-model="sort" value="pricehigh" />
                    <span class="checkmark"></span>
                    Price (High to Low)
                  </label>
                </div>
              </div>
            </form>
            <!-- Filter Sort by Category -->
            <form>
              <div class="form-group">
                <h6 class="filter-subtitle">Sort by Category</h6>
                <div class="filter-options">
                  <label class="filter-option">
                    <input type="radio" v-model="categoryFilter" value="all" />
                    <span class="checkmark"></span>
                    All
                  </label>
                  <label class="filter-option">
                    <input type="radio" v-model="categoryFilter" value="cat1" />
                    <span class="checkmark"></span>
                    Cat1
                  </label>
                  <label class="filter-option">
                    <input type="radio" v-model="categoryFilter" value="cat2" />
                    <span class="checkmark"></span>
                    Cat2
                  </label>
                  <label class="filter-option">
                    <input type="radio" v-model="categoryFilter" value="cat3" />
                    <span class="checkmark"></span>
                    Cat3
                  </label>
                  <label class="filter-option">
                    <input type="radio" v-model="categoryFilter" value="cat4" />
                    <span class="checkmark"></span>
                    Cat4
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!-- Products Container -->
        <div class="col-lg-9">
          <div class="row justify-content-start"> <!-- Align product cards to the left -->
            <div
              v-for="(product, idx) in filteredProducts"
              :key="idx"
              :class="['col-lg-4 col-sm-6 mb-4']"
            >
              <ProductBlogCard
                :image="getThumbnailUrl(product)"
                :name="product.attributes.title"
                :subtitle="product.attributes.category"
                :price="`$${product.attributes.price}`"
                :inStock="product.attributes.in_stock"
                :action="{ route: `${frontendUrl}pages/landing-pages/products/${product.attributes.slug}`, color: 'success', label: 'Buy now' }"
              />
            </div>
          </div>
          <button @click='showmore' v-if='totalblog > showing'>Show More</button>
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
      products: [],
      sort: 'pricelow',
      categoryFilter: 'all',
      filtereddata: {
        title: '',
      },
      frontendUrl: __FRONTEND_URL__,
      backendUrl: __BACKEND_URL__,
      showing: 6,
      totalblog: ''
    };
  },
  async created() {
    try {
      const response = await axios.get(`${this.backendUrl}api/products?populate=*`);
      this.products = response.data.data;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },
  methods: {
    showmore() {
      this.showing += 6;
    },
    getThumbnailUrl(product) {
    const data = product.attributes.thumbnail?.data;
    if (Array.isArray(data) && data.length > 0) {
      const formats = data[0]?.attributes?.formats;
      if (formats) {
        const url = formats.medium?.url || formats.large?.url || formats.thumbnail?.url;
        return `${this.backendUrl.replace(/\/$/, '')}${url}`;
      }
    }
    return bg0; // Ensure this path is correct
  }
  },
  computed: {
    filteredProducts() {
      let temp = this.products;

      if (this.filtereddata.title) {
        temp = temp.filter(product => 
          product.attributes.title.toLowerCase().includes(this.filtereddata.title.toLowerCase())
        );
      }

      if (this.categoryFilter !== 'all') {
        temp = temp.filter(product => 
          product.attributes.category === this.categoryFilter
        );
      }

      this.totalblog = temp.length;

      if (this.sort === 'pricelow') {
        temp.sort((a, b) => a.attributes.price - b.attributes.price);
      } else if (this.sort === 'pricehigh') {
        temp.sort((a, b) => b.attributes.price - a.attributes.price);
      }

      return temp.slice(0, this.showing);
    }
  }
};
</script>

<style>
/* Enhanced Filter Content Styling */
.filter-content {
  font-family: 'Arial', sans-serif;
}

.filter-title {
  font-size: 1.75rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
}

.filter-subtitle {
  font-size: 1.25rem;
  font-weight: semi-bold;
  color: #333;
  margin-bottom: 0.5rem;
}

.filter-options {
  display: flex;
  flex-direction: column;
}

.filter-option {
  position: relative;
  padding-left: 2rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  color: #333;
}

.filter-option input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.filter-option .checkmark {
  position: absolute;
  left: 0;
  top: 0;
  height: 1rem;
  width: 1rem;
  background-color: #eee;
  border-radius: 50%;
  border: 2px solid #333;
}

.filter-option input:checked ~ .checkmark {
  background-color: #333;
}

.filter-option .checkmark::after {
  content: "";
  position: absolute;
  display: none;
}

.filter-option input:checked ~ .checkmark::after {
  display: block;
  left: 0.375rem;
  top: 0.375rem;
  width: 0.5rem;
  height: 0.5rem;
  background: white;
  border-radius: 50%;
}

.filter-content .form-control {
  border: 1px solid #333;
  border-radius: 4px;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  width: 200px;
}

.filter-content .form-control:focus {
  border-color: #000;
  box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.1);
}
</style>
