<script setup>
// example component
import HorizontalTeamCard from "@/examples/cards/teamCards/HorizontalTeamCard.vue";

// images
import yao from "@/assets/img/bruce-mars.jpg";
import li from "@/assets/img/bruce-mars.jpg";
import ye from "@/assets/img/bruce-mars.jpg";
// import marquez from "@/assets/img/ivana-square.jpg";
</script>

<template>
  <section class="pb-5 position-relative bg-gradient-dark mx-n3">
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-start mb-5 mt-5">
          <h3 class="text-white z-index-1 position-relative">
            Our Directors
          </h3>
          <!-- <p class="text-white opacity-8 mb-0">
             Meet our team
          </p> -->  
        </div>
      </div>
      <!-- image size for profile need to be the same  -->
      <!-- <div class="row"> -->
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10 col-12">
              <HorizontalTeamCard
                class="mt-4"
                :image="yao"
                :profile="{ name: 'Tommy Yao', link: 'javascript:;' }"
                :position="{ label: 'CEO', color: 'success' }"
                description="professional dog."
              />
            </div>
          </div>
          <!-- </div> -->
        <div class="row justify-content-center">
          <div class="col-lg-10 col-12">
            <HorizontalTeamCard
              class="mt-lg-4 mt-5 center"
              :image="li"
              :profile="{ name: 'Feng li', link: 'javascript:;' }"
              :position="{ label: 'Project manager', color: 'success' }"
              description="walks dogs."
            />
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-10 col-12">
            <HorizontalTeamCard
              class="mt-lg-4 mt-5 center"
              :image="ye"
              :profile="{ name: 'William Ye', link: 'javascript:;' }"
              :position="{ label: 'Front-end specialist', color: 'success' }"
              description="coding dog."
            />
          </div>
        </div>
   
      </div>
    </div>
  </section>
</template>
