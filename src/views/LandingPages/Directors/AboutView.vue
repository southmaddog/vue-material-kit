<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";

//contact form
import Contact from "./Sections/AuthorContact.vue";
//image header
import ye from "@/assets/img/ye.jpg";

//dep
import Typed from "typed.js";

//sections
import AboutTeam from "./Sections/AboutTeam.vue";
// import Newsletter from "./Sections/AboutNewsletter.vue";

const body = document.getElementsByTagName("body")[0];
//hooks
onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");

  if (document.getElementById("typed")) {
    // eslint-disable-next-line no-unused-vars
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });
  }
});

onUnmounted(() => {
  body.classList.remove("about-us");
  body.classList.remove("bg-gray-200");
});
</script>
<template>
 <DefaultNavbar
    
    transparent
  />
  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-75"
      :style="{ backgroundImage: `url(${ye})` }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
              Work with amazing <span class="text-white" id="typed"></span>
            </h1>
            <div id="typed-strings">
              <h1>dogs</h1>
              <h1>bums</h1>
              <h1>tools</h1>
            </div>
            <p class="lead mb-4 text-white opacity-8">
              Bringing the future of direct-to-consumer AI cutom accessories commerce
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6 bg-gradient-dark">
    <AboutTeam />
    <Featuring />
  </div>
  <Contact />
  <DefaultFooter />
</template>
