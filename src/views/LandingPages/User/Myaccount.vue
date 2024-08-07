<script setup>
import { onMounted } from "vue";

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
        <div class="row">
          <div class="col-md-3">
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-action bg-dark text-light">My Account</a>
              <a href="#" class="list-group-item list-group-item-action bg-dark text-light">My Orders</a>
              <a href="#" class="list-group-item list-group-item-action bg-dark text-light">Shopping Cart</a>
            </div>
          </div>
          <div class="col-md-9 card card-body mx-3 mx-md-4 mt-n6" :style="{ boxShadow: '0 20px 30px rgba(0, 0, 0, 0.25), 0 10px 20px rgba(0, 0, 0, 0.15)' }">
            <div class="card card-body bg-white shadow">
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

.list-group-item {
  cursor: pointer;
}

.card-body {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
}

.btn-primary {
  background-color: #007bff;
  border: none;
}
</style>
