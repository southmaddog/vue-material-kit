<template>
  <div :class="className"></div>
</template>

<script>
export default {
  name: "GreenDivider",
  props: {
    vertical: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return this.vertical ? "divider-vertical" : "divider-horizontal";
    }
  }
};
</script>

<style scoped>
.divider-horizontal {
  border-top: 2px solid green;
  margin: 1rem 0;
  width: 100%;
}

.divider-vertical {
  border-left: 2px solid green;
  height: 100%;
  margin: 0 1rem;
}
</style>
