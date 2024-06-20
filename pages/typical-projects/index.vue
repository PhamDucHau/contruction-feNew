<template>
  <Banner />
  <Content />
</template>

<script>
import Banner from "../components/typicalProjects/Banner.vue";
import Content from "../components/typicalProjects/Content.vue";

export default {
  components: {
    Banner,
    Content,
  },
  data() {
    return {
      arrayInput: {},
    };
  },
  methods: {},
};
</script>

<style>
</style>