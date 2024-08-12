// store/index.js
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import Cookies from 'js-cookie';
import bootstrap from 'bootstrap/dist/js/bootstrap.min.js';

export const useAppStore = defineStore('storeId', {
  state: () => ({
    bootstrap,
    userjwt: null,
  }),

  getters: {
    getuserjwt: (state) => 'Bearer ' + state.userjwt,
  },

  actions: {
    initAuth() {
      const userjwt = Cookies.get('userjwt');
      if (userjwt) {
        this.setUser(userjwt);
      } else {
        this.logout(); // Use the logout action instead of clearUser
      }
    },
    setUser(payload) {
      this.userjwt = payload;
      Cookies.set('userjwt', payload);
    },
    logout() {
      this.userjwt = null;
      Cookies.remove('userjwt');
    }
  },
});
