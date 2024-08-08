<script setup>
import { onMounted } from "vue";
import { RouterLink } from "vue-router";

// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>

<template>
  <DefaultNavbar />

  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
      </div>
    </div>
  </div>
  <section>
    <div class="page-header min-vh-100 bg-light-green">
      <div class="container">
        <div class="row flex-row">
          <div class="col-md-3 sidebar">
            <ul class="nav flex-column">
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'myaccount' }">My Account</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'myorder' }">My Orders</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'shoppingcart' }">Shopping Cart</router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-9">
            <div class="card card-body mx-3 mx-md-4" :style="{ boxShadow: '0 20px 30px rgba(0, 0, 0, 0.25), 0 10px 20px rgba(0, 0, 0, 0.15)' }">
              <h3>Account Settings</h3>
              <form>
                <div class="form-group mb-3">
                  <label for="username">Username</label>
                  <input type="text" class="form-control" id="username" placeholder="Enter your username" />
                </div>
                <div class="form-group mb-3">
                  <label for="email">Email address</label>
                  <input type="email" class="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div class="form-group mb-3">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" id="password" placeholder="Enter your password" />
                </div>
                <div class="form-group mb-3">
                  <label for="payment">Payment Method</label>
                  <input type="text" class="form-control" id="payment" placeholder="Enter your payment method" />
                </div>
                <button type="submit" class="btn btn-primary">Save Changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <DefaultFooter />
</template>

<style scoped>
.container {
  margin-top: 20px;
}

.bg-light-green {
  background-color: #20c997;
}

.sidebar {
  background-color: #344767;
  padding: 20px;
  border-radius: 8px;
}

.nav-link {
  color: #fff;
  padding: 10px 15px;
  border-radius: 4px;
  margin-bottom: 10px;
}

.nav-link.router-link-active,
.nav-link:hover {
  background-color: #f8f9fa;
  color: #007bff;
}

.card-body {
  border: 1px solid #ced4da;
  border-radius: 8px;
  padding: 20px;
}

.btn-primary {
  background-color: #007bff;
  border: none;
}

.flex-row {
  display: flex;
  align-items: stretch;
}
</style>
