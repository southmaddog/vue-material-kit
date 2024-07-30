<!-- MainComponent.vue -->
<script setup>
// example components
import ProductBlogCard from "../../../../examples/cards/blogCards/ProductBlogCard.vue";
// import BackgroundBlogCard from "../../../../examples/cards/blogCards/BackgroundBlogCard.vue";

// Vue Material Kit 2 components
import post1 from "@/assets/img/examples/testimonial-6-2.jpg";
import post2 from "@/assets/img/examples/testimonial-6-3.jpg";
import post3 from "@/assets/img/examples/blog-9-4.jpg";
import post4 from "@/assets/img/examples/blog2.jpg";
</script>

<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mb-5">Our Products</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6">
          <ProductBlogCard
            :image="post1"
            name="Product 1"
            price="$65.00"
            :action="{ route: '#', color: 'success', label: 'Buy now' }"
          />
        </div>
        <div class="col-lg-4 col-sm-6">
          <ProductBlogCard
            :image="post2"
            name="Product 2"
            price="$75.00"
            :action="{ route: '#', color: 'success', label: 'Buy now' }"
          />
        </div>
        <div class="col-lg-4 col-sm-6">
          <ProductBlogCard
            :image="post3"
            name="Product 3"
            price="$85.00"
            :action="{ route: '#', color: 'success', label: 'Buy now' }"
          />
        </div>
        <!-- <div class="col-lg-3 col-md-12 col-12">
          <BackgroundBlogCard
            :image="post4"
            title="Flexible work hours"
            description="Rather than worrying about switching offices every couple years, you stay in the same place."
          />
        </div> -->
      </div>
    </div>
  </section>
</template>
