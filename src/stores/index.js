// store/index.js
import { defineStore } from 'pinia';
import Cookies from 'js-cookie';
import bootstrap from 'bootstrap/dist/js/bootstrap.min.js';

export const useAppStore = defineStore('storeId', {
  state: () => ({
    bootstrap,
    userjwt: null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.userjwt,
    getuserjwt: (state) => 'Bearer ' + state.userjwt,
  },

  actions: {
    initAuth() {
      const userjwt = Cookies.get('userjwt');
      if (userjwt) {
        this.setUser(userjwt);  // Directly using the action in Pinia
      } else {
        this.clearUser();  // Clear the user if no JWT is found
      }
    },
    setUser(payload) {
      this.userjwt = payload;
      Cookies.set('userjwt', payload);
    },
    clearUser() {
      this.userjwt = null;
      Cookies.remove('userjwt');
    }
  },
});
