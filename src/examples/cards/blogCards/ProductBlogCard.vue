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
  <div class="card card-plain">
    <div class="card-header p-0 position-relative">
      <a class="d-block blur-shadow-image">
        <img
          :src="image"
          :alt="name"
          class="img-fluid shadow border-radius-lg"
          loading="lazy"
        />
      </a>
    </div>
    <div class="card-body px-0">
      <h5>
        <a :href="action.route" class="text-dark font-weight-bold">{{
          name
        }}</a>
      </h5>
      <p class="text-lg text-gray-700 font-semibold">
        {{ price }}
      </p>
      <a
        :href="action.route"
        class="text-sm icon-move-right"
        :class="`text-${action.color}`"
      >
        {{ action.label }}
        <i class="fas fa-arrow-right text-xs ms-1"></i>
      </a>
    </div>
  </div>
</template>
