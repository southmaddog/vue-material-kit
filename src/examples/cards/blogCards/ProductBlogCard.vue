<!-- ProductBlogCard.vue -->
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

<template>
  <div class="card card-plain border border-gray-300 rounded-lg overflow-hidden">
    <div class="p-0 position-relative">
      <a class="d-block">
        <img
          :src="image"
          :alt="name"
          class="img-fluid w-full h-48 object-cover"
          loading="lazy"
        />
      </a>
    </div>
    <div class="card-body p-4">
      <h5 class="font-bold">
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
        class="text-sm icon-move-right inline-flex items-center mt-2"
        :class="`text-${action.color}`"
      >
        {{ action.label }}
        <i class="fas fa-arrow-right text-xs ms-1 ml-1"></i>
      </a>
    </div>
  </div>
</template>
