<template>
    <div class="dropdown" @click="toggleDropdown">
      <button class="dropdown-button">{{ selected }}</button>
      <div v-if="isOpen" class="dropdown-content">
        <a v-for="(item, index) in items" :key="index" @click="selectItem(item)">{{ item }}</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
        selected: 'Select an option',
        items: ['Option 1', 'Option 2', 'Option 3']
      };
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
      selectItem(item) {
        this.selected = item;
        this.isOpen = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropdown-button {
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  .dropdown-content a:hover {
    background-color: #f1f1f1;
  }
  </style>