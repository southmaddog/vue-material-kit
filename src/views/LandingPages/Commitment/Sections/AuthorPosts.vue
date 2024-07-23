<script setup>
// example components
import TransparentBlogCard from "../../../../examples/cards/blogCards/TransparentBlogCard.vue";
import BackgroundBlogCard from "../../../../examples/cards/blogCards/BackgroundBlogCard.vue";

//Vue Material Kit 2 components
import post1 from "@/assets/img/commitment/1_processo (1).jpg";
import post2 from "@/assets/img/commitment/invest-in-new-technology-regardless-of-size-cost-1635773656.jpg";
import post3 from "@/assets/img/commitment/image-13.jpeg";
import post4 from "@/assets/img/commitment/99547315_waterltfinal_dark.jpg";
</script>
<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mb-5">NHF Externity: Our Commitment to Sustainability</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard
            :image="post1"
            title="Sustainable Materials"
            description="We use eco-friendly materials, from biodegradable packaging to recycled fabrics, ensuring minimal environmental impact without compromising on quality."
          />
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard
            :image="post2"
            title="Advanced Technology"
            description="Our AI technology allows for personalized designs, reducing waste by manufacturing only what's needed, ensuring efficiency and sustainability."
          />
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard
            :image="post3"
            title="Expert Craftsmanship"
            description="Our skilled artisans and advanced machinery combine global design trends with local expertise, creating high-quality, environmentally friendly products."
          />
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard
            :image="post4"
            title="Global Trends and Local Production"
            description="We stay ahead of international trends while leveraging local production in China, reducing transportation emissions and delivering high-quality products worldwide."
          />
        </div>
      </div>
    </div>
  </section>
</template>
