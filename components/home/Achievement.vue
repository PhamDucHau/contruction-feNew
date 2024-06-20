<template>
  <div class="main">
    <div class="container">
      <v-row>
        <v-col cols="12" md="6" class="col-left">
          <div class="title">
            <p>Thành tựu!</p>
            <h2>Thành tựu của chúng tôi</h2>
          </div>
          <div class="des">
            Với +18 năm trong nghề, QD Contruction luôn tự hào là đơn vị thiết
            kế thi công chuyên nghiệp, luôn mang lại giá trị thiết thực nhất tới
            khách hàng.
          </div>
          <v-row class="block-content">
            <v-col
              cols="12"
              sm="6"
              v-for="(item, index) in array"
              :key="index"
              class="item"
            >
              <div class="inner">
                <div class="icon">
                  <img width="50" height="50" :src="item.img" alt="" />
                </div>
                <div class="content">
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6" class="col-right">
          <div class="relative">
            <img
              src="/img/achievement/imgright.webp"
              alt=""
              style="border-radius: 4px"
              class="img-content"
            />
          </div>
        </v-col>
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
          img: "img/achievement/img01.webp",
          title: "17000",
          description: "Khách hàng",
        },
        {
          img: "img/achievement/img02.webp",
          title: "38000",
          description: "Dự án",
        },
        {
          img: "img/achievement/img03.webp",
          title: "1000",
          description: "Nhân viên",
        },
        {
          img: "img/achievement/img04.webp",
          title: "16",
          description: "Văn phòng",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.img-content {
  width: 540px;
  height: 383px;
}
.main {
  padding: 60px 0 60px;
  position: relative;
}
.container {
  max-width: 1140px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.col-left .title p {
  position: relative;
  display: inline-block;
  color: #ff5e14;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 5px;
}
.col-left .title h2 {
  font-size: 40px;
  font-weight: 700;
}
.col-left .des {
  font-size: 16px;
  margin-bottom: 20px;
}
.block-content .item .inner {
  background: #fff;
  border-radius: 10px;
  display: flex;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.09);
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 10px;
  align-items: center;
}
.block-content .item .inner .icon {
  width: 70px;
  background: #ff5e14;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 10px 10px 25px;
}
.block-content .item .inner .content {
  width: calc(100% - 70px);
  padding-left: 20px;
  line-height: initial;
}
.block-content .item .inner .content h3 {
  font-size: 24px;
  color: #ff5e14;
  font-weight: bold;
  margin-bottom: 0;
}
.block-content .item .inner .content p {
  font-size: 16px;
  margin-bottom: 0;
}
.relative {
  position: relative;
}
@media (max-width: 1024px) {
  .col-right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 500px) {
  .img-content {
    width: 360px;
    height: 246px;
  }
}
</style>

