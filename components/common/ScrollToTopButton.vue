<template>
  <div v-scroll="onScroll">
    <v-btn
      v-if="!isVisible"
      fab
      fixed
      bottom
      right
      color="amber-darken-4"
      @click="toBottom"
      icon="mdi-chevron-down"
    >
    </v-btn>
    <v-btn
      v-else
      fab
      fixed
      bottom
      right
      color="amber-darken-4"
      @click="toTop"
      icon="mdi-chevron-up"
    >
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    onScroll() {
      this.isVisible = window.scrollY > 50;
    },
    toTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    toBottom() {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
</style>