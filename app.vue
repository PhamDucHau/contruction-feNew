<template>
  <Header />
  <v-divider :thickness="2" color="success"></v-divider>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Footer />
  <!-- <ListSharing /> -->
</template>

<script>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import ListSharing from "./components/common/ListSharing.vue";

export default {
  components: { Header, Footer, ListSharing },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
