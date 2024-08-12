import { createApp } from "vue";
import { createPinia } from "pinia";  // Import Pinia
import App from "./App.vue";
import router from "./router";
import { useAppStore } from '@/stores/index.js'

// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";

import materialKit from "./material-kit";
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);

// Initialize auth
const store = useAppStore();
store.initAuth();

// Initialize Pinia
app.use(pinia);  // Register Pinia with the Vue app
app.use(router);  // Register the router
app.use(materialKit);  // Register Material Kit
app.mount("#app");  // Mount the Vue application
