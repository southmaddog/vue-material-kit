<script setup>
// example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import Header from "../../../examples/Header.vue";

// sections
import Footer from "./Sections/AuthorFooter.vue";
import Profile from "./Sections/AuthorProfile.vue";
import Posts from "./Sections/AuthorPosts.vue";
import Contact from "./Sections/AuthorContact.vue";

// image
import image from "@/assets/img/city-profile.jpg";
</script>
<template>
  <DefaultNavbar transparent />
  <Header>
    <div
      class="page-header min-height-400"
      :style="{ backgroundImage: `url(${image})` }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-8"></span>
    </div>
  </Header>
  <div class="card card-body blur mx-3 mx-md-4 mt-n6 mb-4" :style="{ boxShadow: '0 20px 30px rgba(0, 0, 0, 0.25), 0 10px 20px rgba(0, 0, 0, 0.15)' }">
    <!-- shadow-blur -->
    
    <Posts />
    <Contact />
  </div>
  
  <Footer />
</template>
