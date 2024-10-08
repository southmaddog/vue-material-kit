<script setup>
import { RouterLink } from "vue-router";
import { ref, watch, computed } from "vue";
import { useWindowsWidth } from "../../assets/js/useWindowsWidth";
import { useAppStore } from '@/stores/index.js'; // Adjust the path as necessary

// images
import ArrDark from "@/assets/img/down-arrow-dark.svg";
import downArrow from "@/assets/img/down-arrow.svg";
import DownArrWhite from "@/assets/img/down-arrow-white.svg";

// Define props using `defineProps`
const props = defineProps({
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      // route: { name: 'signin-basic' },
      // color: "bg-gradient-success",
      // label: "My account"
    })
  },
  transparent: {
    type: Boolean,
    default: false
  },
  light: {
    type: Boolean,
    default: false
  },
  dark: {
    type: Boolean,
    default: false
  },
  sticky: {
    type: Boolean,
    default: false
  },
  darkText: {
    type: Boolean,
    default: false
  }
});

// Initialize the store and access the getter
const appStore = useAppStore(); // Initialize the store
const userjwt = computed(() => appStore.userjwt);

const logout = () => {
  appStore.logout(); // Call the logout action from the store
};

// set arrow color
function getArrowColor() {
  if (props.transparent && textDark.value) {
    return ArrDark;
  } else if (props.transparent) {
    return DownArrWhite;
  } else {
    return ArrDark;
  }
}

// set text color
const getTextColor = () => {
  let color;
  if (props.transparent && textDark.value) {
    color = "text-dark";
  } else if (props.transparent) {
    color = "text-white";
  } else {
    color = "text-dark";
  }

  return color;
};

// set nav color on mobile && desktop

let textDark = ref(props.darkText);
const { type } = useWindowsWidth();

if (type.value === "mobile") {
  textDark.value = true;
} else if (type.value === "desktop" && textDark.value == false) {
  textDark.value = false;
}

watch(
  () => type.value,
  (newValue) => {
    if (newValue === "mobile") {
      textDark.value = true;
    } else {
      textDark.value = false;
    }
  }
);
</script>
<template>
  <nav
    class="navbar navbar-expand-lg top-0"
    :class="{
      'z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3':
        props.transparent,
      'my-3 blur border-radius-lg z-index-3 py-2 shadow py-2 start-0 end-0 mx-4 position-absolute mt-4':
        props.sticky,
      'navbar-light bg-white py-3': props.light,
      ' navbar-dark bg-gradient-dark z-index-3 py-3': props.dark
    }"
  >
    <div
      :class="
        props.transparent || props.light || props.dark
          ? 'container'
          : 'container-fluid px-0'
      "
    >
      <RouterLink
        class="navbar-brand d-none d-md-block"
        :class="[
          (props.transparent && textDark.value) || !props.transparent
            ? 'text-dark font-weight-bolder ms-sm-3'
            : 'text-white font-weight-bolder ms-sm-3'
        ]"
        :to="{ name: 'presentation' }"
        rel="tooltip"
        title="Designed and Coded by Creative Tim"
        data-placement="bottom"
      >
        NHF Eternity
      </RouterLink>
      <RouterLink
        class="navbar-brand d-block d-md-none"
        :class="
          props.transparent || props.dark
            ? 'text-white'
            : 'font-weight-bolder ms-sm-3'
        "
        to="/"
        rel="tooltip"
        title="Designed and Coded by Creative Tim"
        data-placement="bottom"
      >
        Material Design
      </RouterLink>
    
      <button
        class="navbar-toggler shadow-none ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
          <span class="navbar-toggler-bar bar4"></span>
        </span>
      </button>
      <div
        class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0"
        id="navigation"
      >
        <ul class="navbar-nav navbar-nav-hover ms-auto">
          <!-- first nav bar -->
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="dropdownMenuPages"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
            <i
                class="material-icons opacity-6 me-2 text-md"
                :class="getTextColor()"
                >group</i
              >
              About Us
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-2 d-lg-block d-none"
              />
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-1 d-lg-none d-block ms-auto"
              />
            </a>
            <div
              class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3"
              aria-labelledby="dropdownMenuPages"
            >
              <div class="row d-none d-lg-block">
                <div class="col-12 px-4 py-2">
                  <div class="row">
                    <div class="position-relative">
                      <div
                        class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1"
                      >
                        Landing Pages
                      </div>
                      <RouterLink
                        :to="{ name: 'about' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>What we do</span>
                      </RouterLink>
                      <RouterLink
                        :to="{ name: 'directors' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Directors</span>
                      </RouterLink>
                      <RouterLink
                        :to="{ name: 'cominfo' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Company Information</span>
                      </RouterLink>
                      <RouterLink
                        :to="{ name: 'commitment' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Commitment to Sustainability</span>
                      </RouterLink>
                      <RouterLink
                        :to="{ name: 'contactus' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Contact us</span>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-lg-none">
                <div
                  class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0"
                >
                  Landing Pages
                </div>
                <RouterLink
                  :to="{ name: 'about' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>About Us</span>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'contactus' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>Contact Us</span>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'author' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>Author</span>
                </RouterLink>
                <div
                  class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0 mt-3"
                >
                  Account
                </div>
                <RouterLink
                  :to="{ name: 'signin-basic' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>Sign In</span>
                </RouterLink>
              </div>
            </div>
          </li>
          <!-- second nav bar -->
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="dropdownMenuPages"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                class="material-icons opacity-6 me-2 text-md"
                :class="getTextColor()"
                >dashboard</i
              >
              Our Product
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-2 d-lg-block d-none"
              />
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-1 d-lg-none d-block ms-auto"
              />
            </a>
            <div
              class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3"
              aria-labelledby="dropdownMenuPages"
            >
              <div class="row d-none d-lg-block">
                <div class="col-12 px-4 py-2">
                  <div class="row">
                    <div class="position-relative">
                      <div
                        class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1"
                      >
                        Landing Pages
                      </div>
                          <RouterLink
                            :to="{ name: 'products' }"
                            class="dropdown-item border-radius-md"
                          >
                            <span>Products and Services</span>
                          </RouterLink>

                    </div>
                  </div>
                </div>
              </div>
              <div class="d-lg-none">
                <div
                  class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0"
                >
                  Landing Pages
                </div>
                <RouterLink
                  :to="{ name: 'about' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>About Us</span>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'contactus' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>Contact Us</span>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'author' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>Author</span>
                </RouterLink>
                <div
                  class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0 mt-3"
                >
                  Account
                </div>
                <RouterLink
                  :to="{ name: 'signin-basic' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>Sign In</span>
                </RouterLink>
              </div>
            </div>
          </li>


          <!-- fourth navbar -->
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="dropdownMenuDocs"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                class="material-icons opacity-6 me-2 text-md"
                :class="getTextColor()"
                >article</i
              >
              Future Service/Direction
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-2 d-lg-block d-none"
              />
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-1 d-lg-none d-block ms-auto"
              />
            </a>
            <div
              class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3"
              aria-labelledby="dropdownMenuPages"
            >
              <div class="row d-none d-lg-block">
                <div class="col-12 px-4 py-2">
                  <div class="row">
                    <div class="position-relative">
                      <div
                        class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1"
                      >
                        Landing Pages
                      </div>
                      <RouterLink
                        :to="{ name: 'plan' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Our Plan</span>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </li>
          <!-- My account nav -->
          <li class="nav-item dropdown dropdown-hover mx-2">
              <a
                role="button"
                class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                :class="getTextColor()"
                id="dropdownMenuAccount"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i
                  class="material-icons opacity-6 me-2 text-md"
                  :class="getTextColor()"
                  >account_circle</i
                >
                My Account 
              
                <img
                  :src="getArrowColor()"
                  alt="down-arrow"
                  class="arrow ms-2 d-lg-block d-none"
                />
                <img
                  :src="getArrowColor()"
                  alt="down-arrow"
                  class="arrow ms-1 d-lg-none d-block ms-auto"
                />
              </a>
              <div 
                class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3"
                aria-labelledby="dropdownMenuAccount"

              ><div class="row d-none d-lg-block">
                  <div class="col-12 px-4 py-2">
                    <div class="row">
                      <div class="position-relative">
                        <div v-if ='userjwt == null'
                          class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1"
                        >
                          Account Options
                        </div>
                        <RouterLink
                          :to="{ name: 'signin-basic' }"
                          class="dropdown-item border-radius-md"
                        >
                          <span>sign in</span>
                        </RouterLink>
                        <RouterLink
                          :to="{ name: 'register' }"
                          class="dropdown-item border-radius-md"
                        >
                          <span>register</span>
                        </RouterLink>
                      </div>
                    </div>
                  </div>
                  </div>
            </div>
              <div v-if ='userjwt != null'
                class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3"
                aria-labelledby="dropdownMenuAccount"
              >
                <div class="row d-none d-lg-block">
                  <div class="col-12 px-4 py-2">
                    <div class="row">
                      <div class="position-relative">
                        <div
                          class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1"
                        >
                          Account Options
                        </div>
                        <RouterLink
                          :to="{ name: 'myaccount' }"
                          class="dropdown-item border-radius-md"
                        >
                          <span>Account Settings</span>
                        </RouterLink>
                        <RouterLink
                          :to="{ name: 'presentation' }"
                          class="dropdown-item border-radius-md"
                          @click.prevent="logout"  
                        >
                          <span>Logout</span>
                        </RouterLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

          
        </ul>
        <ul class="navbar-nav d-lg-block d-none">
          <li class="nav-item">
            <a
              :href="action.route"
              class="btn btn-sm mb-0"
              :class="action.color"
              onclick="smoothToPricing('pricing-soft-ui')"
              >{{ action.label }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>



