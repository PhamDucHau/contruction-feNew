<template>
  <div class="main">
    <v-carousel :height="700" class="d-none d-md-block">
      <v-carousel-item
        src="public/img/banner/banner01.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="public/img/banner/banner02.jpg"
        cover
      ></v-carousel-item>
    </v-carousel>

    <v-carousel class="d-none d-sm-block d-md-none" :height="550">
      <v-carousel-item
        src="public/img/banner/banner01.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="public/img/banner/banner02.jpg"
        cover
      ></v-carousel-item>
    </v-carousel>

    <v-carousel class="d-block d-sm-none" :height="400">
      <v-carousel-item
        src="public/img/banner/banner01.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="public/img/banner/banner02.jpg"
        cover
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  margin-bottom: 70px;
}
</style>