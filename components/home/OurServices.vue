<template>
  <div class="main">
    <div class="container">
      <div class="title">
        <p>Dịch vụ của chúng tôi</p>
        <h2>Dịch vụ tốt nhất cho bạn</h2>
      </div>
      <v-row class="content">
        <v-col
          v-for="(item, index) in array"
          :key="index"
          class="item"
          cols="12"
          sm="4"
        >
          <div class="inner">
            <div class="img-title">
              <div class="image">
                <img width="64" height="64" :src="item.img" alt="" />
              </div>
              <h4 v-text="item.title" />
            </div>
            <div class="contentsv">
              <p v-text="item.description" />
            </div>
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
          img: "img/our_services/img01.webp",
          title: "Thiết kế nội thất",
          description:
            "Thiết kế nội thất là sự kết hợp hoàn hảo giữa ánh sáng, màu sắc, cách bài trí bố cục trong một không gian sống. Điều này không chỉ giúp ngôi nhà tối ưu được diện tích, thể hiện cá tính, mắt nhìn của gia chủ.",
        },
        {
          img: "img/our_services/img02.webp",
          title: "Thi công nhà phố",
          description:
            "Thiết kế nhà phố đẹp có gara, tầng hầm, mái thái, có sân vườn với lối kiến trúc đẹp, thể hiện lối tư duy mới, tối ưu không gian hiệu quả, nét thẩm mỹ đáp ứng nhu cầu càng cao của khách hàng.",
        },
        {
          img: "img/our_services/img03.webp",
          title: "Thi công nhà hàng, cafe",
          description:
            "Các dịch vụ giải trí, thư giãn ngày càng cao vì thế thiết kế công trình nhà hàng, khách sạn, coffee, resort ra đời ngày càng nhiều để đáp ứng được nhu cầu của khách hàng cũng như nâng tầm cuộc sống thượng lưu.",
        },
        {
          img: "img/our_services/img04.webp",
          title: "Thi công căn hộ",
          description:
            "Căn hộ nội thất chung cư, bạn không chỉ phải bố trí, sắp xếp các vật dụng sao cho phù hợp với nhu cầu sinh hoạt của gia đình mà còn phải đảm bảo nhu cầu thẩm mỹ của căn nhà, mang phong cách riêng, nổi bật.",
        },
        {
          img: "img/our_services/img05.webp",
          title: "Thi công biệt thự",
          description:
            "Biệt thự là loại hình nhà ở được thiết kế và xây dựng trên một không gian tương đối hoàn thiện và biệt lập tương đối với không gian xây dựng chung. Việc thiết kế biệt thự đòi hỏi phải có nghệ thuật và thẩm mĩ cao.",
        },
        {
          img: "img/our_services/img06.webp",
          title: "Thi công văn phòng",
          description:
            "Một thiết kế văn phòng làm việc đẹp, tiện nghi sẽ giúp tạo ra một môi trường làm việc thoải mái, khơi gợi cảm xúc làm việc hiệu quả, năng suất tuyệt vời cho những nhân viên.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
  margin-top: 65px;
  background: #fcfcfc;
  background-image: url(public/img/our_services/bg-service.webp);
  background-position: bottom left;
  background-repeat: no-repeat;
}
.container {
  max-width: 1140px;
}
.section_service .title {
  text-align: center;
  margin-bottom: 45px;
}
.title {
  text-align: center;
  margin-bottom: 45px;
}
.title p {
  position: relative;
  display: inline-block;
  color: #ff5e14;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 5px;
}
.title h2 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 0;
}
.content {
  margin: 0;
}
.content .item .inner {
  padding: 30px;
  text-align: center;
}
.content .item:not(:nth-last-child(-n + 3)) {
  border-bottom: 1px solid #e4e4e4;
}
.content .item:not(:nth-child(3n)) {
  border-right: 1px solid #e4e4e4;
}
.content .item .inner .image {
  margin-bottom: 10px;
}
.content .item .inner .image img {
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
}
.content .item .inner:hover .image img {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
.content .item h4 {
  font-size: 24px;
}
.content .item .contentsv p {
  font-size: 14px;
  margin-bottom: 0;
  color: #4d5765;
}
</style>