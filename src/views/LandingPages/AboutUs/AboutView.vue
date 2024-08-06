<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
import AboutUsOption from "@/views/LandingPages/Components/AboutUsOption.vue";
//image
import bg0 from "@/assets/img/bg9.jpg";

//dep
import Typed from "typed.js";

//sections
import Divider from "./Sections/Divider.vue";
import Newsletter from "./Sections/AboutNewsletter.vue";

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
    :action="{
      route: 'javascript:;',
      label: 'Buy Now',
      color: 'btn-white',
    }"
    transparent
  />
  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-75"
      :style="{ backgroundImage: `url(${bg0})` }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
                Get to Know More about our Vision
               <span class="text-white"></span>
            </h1>
            <!-- <p class="lead mb-4 text-white opacity-8">
              We’re constantly trying to express ourselves and actualize our
              dreams. If you have the opportunity to play this game
            </p> -->
            <!-- <h6 class="text-white mb-2 mt-5">Find us on</h6>
            <div class="d-flex justify-content-center">
              <a href="javascript:;"
                ><i class="fab fa-facebook text-lg text-white me-4"></i
              ></a>
              <a href="javascript:;"
                ><i class="fab fa-instagram text-lg text-white me-4"></i
              ></a>
              <a href="javascript:;"
                ><i class="fab fa-twitter text-lg text-white me-4"></i
              ></a>
              <a href="javascript:;"
                ><i class="fab fa-google-plus text-lg text-white"></i
              ></a>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body mx-3 mx-md-4 mt-n6" :style="{ boxShadow: '0 20px 30px rgba(0, 0, 0, 0.25), 0 10px 20px rgba(0, 0, 0, 0.15)'}">
    <!-- shadow-xl -->
    <!-- <AboutTeam /> -->
    <!-- <Featuring /> -->
    <section class="py-9" style="padding-top: 100px !important;">
      <div class="container" style="padding-bottom:200px ;">
        <div class="row">
          <div class="col-lg-6 my-auto">
            <h3>Our Vision</h3>
            <p class="pe-5">
              Our proudly Canadian company is revolutionizing direct-to-consumer commerence with the use of generative AI Models. <br /> If you can design it, we can make it. 
            </p>
            <a href="javascript:;" class="text-success icon-move-right"
              >More about us
              <i class="fas fa-arrow-right text-sm ms-1"></i>
            </a>
          </div>
          <div class="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
            <AboutUsOption
              icon="mediation"
              content="Our state of the art facilities fabricates everything in-house. <br /> Our team of experts will make your design a reality"
            />
            <AboutUsOption
              icon="settings_overscan"
              content="We deliver to your front door"
            />
  
            <AboutUsOption
              icon="token"
              content="Our designer AI will guide you to your perfect fashion statment"
            />
          </div>
          <divider />
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 my-auto">
            <h3>Designer AI Model</h3>
            <p class="pe-5">
              Trained via 100 thousand images of haute designer peices from the hotest brands. Our generative AI is specaically tuned for vogue accessories. 
            </p>
            <a href="javascript:;" class="text-success icon-move-right"
              >More about our AI model
              <i class="fas fa-arrow-right text-sm ms-1"></i>
            </a>

          </div>
          <Divider />
        </div>
        
      </div>
    </section>
    
    <Newsletter />
  </div>
  <DefaultFooter />
</template>