<template>
  <header class="header d-sm-flex d-none">
    <v-row no-gutters>
      <v-col cols="4" md="5" class="col-main">
        <NuxtLink to="/" class="d-flex"
          ><img
            class="logoHeader"
            style="border-radius: 8px"
            src="public/img/logoHeader.png"
            alt="Discover Nuxt 3"
        /></NuxtLink>
      </v-col>
      <v-col cols="8" md="5" class="col-main">
        <ul class="d-flex">
          <li><NuxtLink to="/">TRANG CHỦ</NuxtLink></li>
          <li><NuxtLink to="/introduce">GIỚI THIỆU</NuxtLink></li>
          <li><NuxtLink to="/typical-projects">DỰ ÁN TIÊU BIỂU</NuxtLink></li>
          <li><NuxtLink to="/team">ĐỘI NGŨ</NuxtLink></li>
        </ul>
      </v-col>
    </v-row>
  </header>

  <v-layout class="d-flex d-sm-none">
    <v-app-bar prominent style="background-color: #050f2d">
      <v-row>
        <v-col cols="2">
          <v-app-bar-nav-icon
            style="color: white"
            variant="text"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </v-col>
        <v-col cols="9" class="d-flex justify-center">
          <NuxtLink to="/" class="d-flex"
            ><img
              class="logoHeader"
              style="border-radius: 8px; height: 3rem"
              src="public/img/logoHeader.png"
              alt="Discover Nuxt 3"
          /></NuxtLink>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :location="$vuetify.display.mobile ? 'left' : undefined"
      temporary
      class="pt-2"
    >
      <v-list class="ml-2"><NuxtLink to="/">TRANG CHỦ</NuxtLink></v-list>
      <v-list class="ml-2"
        ><NuxtLink to="/introduce">GIỚI THIỆU</NuxtLink></v-list
      >
      <v-list class="ml-2"
        ><NuxtLink to="/typical-projects">DỰ ÁN TIÊU BIỂU</NuxtLink></v-list
      >
      <v-list class="ml-2"><NuxtLink to="/team">ĐỘI NGŨ</NuxtLink></v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
.header {
  background-color: #050f2d;
  height: 100px;
  display: flex;
  text-align: center;
  align-items: center;
}

.col-main {
  display: flex;
  justify-content: center;
  color: white;
}
ul {
  justify-content: space-between;
  list-style: none;
  width: 100%;
  align-items: center;
  gap: 0;
}
.logoHeader {
  height: 5rem;
}
a {
  color: white;
}
a:hover {
  color: #ff5e14;
}
.router-link-active {
  color: #ff5e14;
}

@media (max-width: 1024px) {
  a {
    font-size: 16px;
  }
  .logoHeader {
    height: 4rem;
  }
  ul {
    justify-content: center;
    gap: 2rem;
    list-style: none;
    width: 100%;
    align-items: center;
  }
}
@media (max-width: 500px) {
  a {
    font-size: 14px;
    color: #050f2d;
  }
}
</style>


