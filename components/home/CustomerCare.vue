<template>
  <div class="main">
    <div class="container px-xs-2 px-sm-4">
      <v-row>
        <v-col
          cols="12"
          md="3"
          sm="6"
          v-for="(item, index) in array"
          :key="index"
          class="item"
        >
          <div class="inner">
            <div class="img-title">
              <div class="image mb-5">
                <img class="d-flex" :src="item.img" alt="" />
              </div>
              <h3
                class="mb-2 text-justify"
                style="min-height: 56px"
                v-text="item.title"
              />
            </div>
            <div class="contentsv text-justify" v-text="item.description" />
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
          img: "img/customer_care/icon01.webp",
          title: "Cam kết chất lượng",
          description:
            "Chất lượng luôn được ưu tiên trong từng hạng mục, chi tiết nhỏ nhất mang đến sự yên tâm cho khách hàng.",
        },
        {
          img: "img/customer_care/icon02.webp",
          title: "Đảm bảo đúng thời gian",
          description:
            "Cam kết đúng thời gian, tiến độ đã trở thành truyền thống phong cách làm việc của QD Construction.",
        },
        {
          img: "img/customer_care/icon03.webp",
          title: "Tận tâm với khách hàng",
          description:
            "Phục vụ khách hàng chu đáo như “thượng đế” trở thành kim chỉ nam hàng đầu cho mọi hành động.",
        },
        {
          img: "img/customer_care/icon04.webp",
          title: "Bảo hành dài hạn",
          description:
            "Chính sách bảo hành dài hạn như để khẳng định giá trị cốt lõi, thương hiệu mà Roman luôn hướng tới.",
        },
      ],
    };
  },
  //
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
}
.container {
  max-width: 1140px;
  text-align: center;
}

.item .img-title .image img {
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
}
.item:hover .image img {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
.inner {
  background-color: #fff;
  border-top: 5px solid #ff5e14;
  box-shadow: 0px 6px 15px rgba(14, 18, 29, 0.06);
  border-radius: 10px;
  padding: 25px;
}
.v-row {
  margin: 0;
}
</style>