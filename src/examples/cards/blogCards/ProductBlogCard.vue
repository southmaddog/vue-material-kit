<template>
  <div class="card border border-gray-300 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-gray-400">
    <div class="relative flex justify-center items-center bg-gray-100">
      <a class="d-block">
        <img
          :src="image"
          :alt="name"
          class="w-full h-48 object-contain"
          loading="lazy"
        />
      </a>
    </div>
    <div class="p-4 bg-white">
      <h5 class="font-bold mb-2">
        <a :href="action.route" class="text-dark">{{
          name
        }}</a>
      </h5>
      <h6 class="text-gray-600 mb-2">
        {{ subtitle }}
      </h6>
      <p class="text-lg text-gray-700 font-semibold mb-2">
        {{ price }}
      </p>
      <p class="text-sm mb-4" :class="inStock ? 'text-green-500' : 'text-red-500'">
        {{ inStock ? 'In Stock' : 'Out of Stock' }}
      </p>
      <a
        :href="action.route"
        class="text-sm inline-flex items-center mt-2 text-blue-500"
      >
        {{ action.label }}
        <i class="fas fa-arrow-right text-xs ml-1"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      route: "javascript:;",
      color: "success",
      label: "Buy now",
    }),
  },
});
</script>

<style>
/* Custom styles if needed */
</style>
