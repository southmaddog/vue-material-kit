<template>
    <div>
      <section id='intro'>
        <div v-if='products.image' class="jumbotron jumbotron2" :style="'background-image: url(' + backendUrl + products.image.url + ') '">
          <div class='container'>
            <div class='row'>
              <div class='col-md-12'>
                <!-- Optionally add content here if needed -->
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id='singlecontent'>
        <div class="container">
          <div class='row'>
            <div class='col-md-8'>
              <h1>{{ products.title }}<br>
                <span v-if='!products.status' class='thetag'>not in stock</span>
                <span v-if='products.status' class='thetag'>in stocke</span>
              </h1>
              <h5>Price:{{ products.price }}$</h5>
              <p>
                Description： {{ products.address }}<br>
                category： {{ products.category }}<br>

                <img :src="fullImageUrl" alt="Product Image" /><br>
                廳 ： {{ products.livingroom }}<br>
                刊登日期： {{ products.date }}
              </p>
              <h4>Description：</h4>
              <div v-if='products.content' v-html="products.content">
              </div>
            </div>
            <div class='col-md-4'>
              <div class='apply'>
                <h5><i class="far fa-calendar-check"></i> 業主聯絡方法</h5>
                <hr>
                <p>You must log in to purchase</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        frontendUrl: __FRONTEND_URL__, // Assuming this is defined globally in your environment
        backendUrl: __BACKEND_URL__, // Assuming this is defined globally in your environment
        products: [], // Initialize products as an empty array
      };
    },
    computed: {
    fullImageUrl() {
      // Construct the full image URL
      return this.products.thumbnail && this.products.thumbnail.data 
        ? this.backendUrl.replace(/\/$/, '') + this.products.thumbnail.data.attributes.url 
        : '';
    }
  },
    async created() {
      try {
        const slug = this.$route.params.slug;
        const response = await axios.get(`${this.backendUrl}api/products?filters[slug][$eq]=${slug}&populate=*`);
        this.products = response.data.data[0].attributes; // Access the 'data' array inside the response
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  };
  </script>
  