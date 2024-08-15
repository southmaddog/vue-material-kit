<script setup>
import { onMounted } from "vue";
// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/examples/Header.vue";

//Vue Material Kit 2 components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>

<template>
  <DefaultNavbar transparent />
  <Header>
    <div
      class="page-header align-items-start min-vh-100"
      :style="{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80)'
      }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                  <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">
                    Sign in
                  </h4>
                  <div class="row mt-3">
                    <div class="col-2 text-center ms-auto">
                      <a class="btn btn-link px-3" href="#" @click.prevent="loginWithFacebook">
                        <i class="fa fa-facebook text-white text-lg"></i>
                      </a>
                    </div>
                    <div class="col-2 text-center px-1">
                      <a class="btn btn-link px-3" href="#" @click.prevent="loginWithGithub">
                        <i class="fa fa-github text-white text-lg"></i>
                      </a>
                    </div>
                    <div class="col-2 text-center me-auto">
                      <a class="btn btn-link px-3" href="#" @click.prevent="loginWithGoogle">
                        <i class="fa fa-google text-white text-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <!-- Form with @submit.prevent to stop the default submit behavior -->
                <form role="form" class="text-start" @submit.prevent="login">
                  <MaterialInput
                    id="username"
                    v-model="username"
                    class="input-group-outline my-3"
                    :label="{ text: 'Username', class: 'form-label' }"
                    type="text"
                  />
                  <MaterialInput
                    id="password"
                    v-model="password"
                    class="input-group-outline mb-3"
                    :label="{ text: 'Password', class: 'form-label' }"
                    type="password"
                  />
                  <MaterialSwitch
                    class="d-flex align-items-center mb-3"
                    id="rememberMe"
                    labelClass="mb-0 ms-3"
                    checked
                  >
                    Remember me 
                  </MaterialSwitch>

                  <div class="text-center">
                    <!-- Make sure this button has type="submit" -->
                    <MaterialButton
                      type="submit"
                      class="my-4 mb-2"
                      variant="gradient"
                      color="success"
                      fullWidth
                    >
                      Sign in
                    </MaterialButton>
                  </div>
                </form>
                <p class="mt-4 text-sm text-center">
                  <router-link
                    :to="{ name: 'forgetpassword' }"
                    class="text-success text-gradient font-weight-bold"
                  >
                    Forget Password
                  </router-link>
                </p>
                <p class="mt-4 text-sm text-center">
                  <router-link
                    :to="{ name: 'register' }"
                    class="text-success text-gradient font-weight-bold"
                  >
                    Sign Up
                  </router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer position-absolute bottom-2 py-2 w-100">
        <div class="container">
          <div class="row align-items-center justify-content-lg-between">
            <div class="col-12 col-md-6 my-auto">
              <div class="copyright text-center text-sm text-white text-lg-start">
                © {{ new Date().getFullYear() }}, made with
                <i class="fa fa-heart" aria-hidden="true"></i> by
                <a
                  href="https://www.creative-tim.com"
                  class="font-weight-bold text-white"
                  target="_blank"
                >
                  Creative Tim
                </a>
                for a better web.
              </div>
            </div>
            <div class="col-12 col-md-6">
              <ul class="nav nav-footer justify-content-center justify-content-lg-end">
                <li class="nav-item">
                  <a
                    href="https://www.creative-tim.com"
                    class="nav-link text-white"
                    target="_blank"
                  >
                    Creative Tim
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="https://www.creative-tim.com/presentation"
                    class="nav-link text-white"
                    target="_blank"
                  >
                    About Us
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="https://www.creative-tim.com/blog"
                    class="nav-link text-white"
                    target="_blank"
                  >
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="https://www.creative-tim.com/license"
                    class="nav-link pe-0 text-white"
                    target="_blank"
                  >
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </Header>
</template>

<script>
import axios from 'axios';
import { useAppStore } from '@/stores/index.js'; // Adjust the path as necessary
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      frontendUrl: __FRONTEND_URL__,
      backendUrl: __BACKEND_URL__,
    };
  },
  setup() {
    const appStore = useAppStore(); // Initialize the store

    return {
      appStore,
    };
  },
  methods: {
    async login(event) {
      event.preventDefault(); // Ensure no default behavior
      console.log("button click");
      console.log('Login attempt with:', this.username, this.password);
      try {
        const response = await axios.post(`${this.backendUrl}api/auth/local`, {
          identifier: this.username,
          password: this.password,
        });

        // Store the JWT in Pinia store
        useAppStore().setUser(response.data.jwt);

        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log(useAppStore().getuserjwt);
        // window.location = this.frontendUrl;
        this.$router.replace({ name: 'presentation' });
      } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
          this.errorMessage = error.response.data.error.message;
        } else {
          this.errorMessage = "An unknown error occurred.";
        }
        console.error('An error occurred:', this.errorMessage);
        alert(this.errorMessage);  // Display the error message
      }
    },
  },
};
</script>
