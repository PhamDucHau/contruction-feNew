<template>
  <div class="blog_wrapper blog-doingu">
    <div class="container">
      <v-row>
        <div class="right-content" cols="12">
          <h1 class="title-page d-none">Đội ngũ</h1>
          <div class="list-blogs">
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="3"
                v-for="(item, index) in array"
                :key="index"
                class="item"
              >
                <div class="inner">
                  <div class="thumb">
                    <a href="/"> <img :src="item.img" alt="" /></a>
                  </div>
                  <div class="info">
                    <a href="/" class="name">{{ item.title }}</a>
                    <div class="chucvu">{{ item.description }}</div>
                  </div>
                  <div class="social">
                    <ul>
                      <li>
                        <a href="#" class="social-button" title="">
                          <v-icon icon="mdi-facebook"></v-icon>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="social-button" title="">
                          <v-icon icon="mdi-google"></v-icon>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="social-button" title="">
                          <v-icon icon="mdi-instagram"></v-icon>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="social-button" title="">
                          <v-icon icon="mdi-youtube"></v-icon>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      array: [
        {
          img: "img/team_team/avt1.webp",
          title: "Lê Văn Chuông",
          description: "Tổng giám đốc",
        },
        {
          img: "img/team_team/avt2.webp",
          title: "Nguyễn Quang Anh",
          description: "Giám sát thi công",
        },
        {
          img: "img/team_team/avt3.webp",
          title: "Nguyễn Thị Thắm",
          description: "Trưởng phòng kế toán",
        },
        {
          img: "img/team_team/avt4.webp",
          title: "Nguyễn Thu Trang",
          description: "Giám đốc truyền thông tiếp thị",
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-row {
  margin: 0;
}
.container {
  max-width: 1140px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.blog-doingu .inner {
  text-align: center;
  position: relative;
}
.blog-doingu .thumb {
  margin-bottom: 15px;
  background-color: #fff;
  box-shadow: 0px 6px 15px rgba(14, 18, 29, 0.08);
  border-radius: 100%;
  padding: 20px;
  position: relative;
  z-index: 2;
}
.blog-doingu .thumb:before {
  content: "";
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border: 6px solid #ff5e14;
  border-radius: inherit;
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
  z-index: -1;
}
.blog-doingu .info .name {
  font-size: 22px;
  font-weight: 700;
}
.blog-doingu .info .chucvu {
  color: #ff5e14;
}
.blog-doingu .social {
  position: absolute;
  right: 15px;
  bottom: 55px;
}
.blog-doingu .social ul {
  position: absolute;
  right: 0;
  bottom: 55px;
  background-color: #fff;
  box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 10px 8px;
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
  z-index: -1;
  z-index: -1;
  transform: scaleY(0);
  -webkit-transform-origin: bottom;
  -moz-transform-origin: bottom;
  -ms-transform-origin: bottom;
  -o-transform-origin: bottom;
  transform-origin: bottom;
}
.blog-doingu .social ul li {
  margin-bottom: 5px;
}
.blog-doingu .thumb img {
  border-radius: inherit;
  width: 100%;
  aspect-ratio: 16 / 16;
  border-radius: 100%;
}
.blog-doingu .item {
  margin-bottom: 30px;
}
.title-page {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
}
a {
  color: #231f20;
  text-decoration: none;
  background-color: transparent;
}
.blog-doingu .info .name {
  font-size: 22px;
  font-weight: 700;
}
.blog-doingu .info .name a {
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  white-space: nowrap;
  display: block;
}
.blog-doingu .inner:hover .thumb:before {
  transform: translateY(0);
  width: 100%;
}
.blog-doingu .inner:hover .social ul {
  opacity: 1;
  visibility: visible;
  opacity: 1;
  z-index: 2;
  transform: scaleY(1);
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>