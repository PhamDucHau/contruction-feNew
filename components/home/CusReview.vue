<template>
  <div class="main">
    <div class="container">
      <div class="block-title">
        <h2>Nhận xét của khách hàng</h2>
        <p>
          Hãy cùng lắng nghe khách hàng đánh giá như thế nào khi sử dụng dịch vụ
          của chúng tôi!
        </p>
      </div>
      <div class="block-content">
        <div
          class="swiper-container swiper-cus-review swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
          style="cursor: grab"
        >
          <div
            class="swiper-wrapper"
            style="transform: translate3d(0px, 0px, 0px)"
          >
            <div
              class="swiper-slide swiper-slide-active"
              v-for="(item, index) in array"
              :key="index"
            >
              <div class="des" v-text="item.description" />
              <div class="flex">
                <div class="thumb">
                  <img width="60" height="60" :src="item.img" alt="" />
                </div>
                <div class="name-job">
                  <span class="name">{{ item.name }}</span>
                  <span class="job">{{ item.job }}</span>
                </div>
                <div class="icon-quote"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      array: [
        {
          img: "img/cus_review/img01.webp",
          description:
            "Đã xử dụng được 1 năm đến giờ sơn vẫn rất mới, ngôi nhà cũng không có hư hỏng gì. Sử dụng dịch vụ xây nhà trọn gói của QD Contruction giúp vợ chồng mình tiết kiệm được rất nhiều thời gian, công sức. Nếu bạn bè, người thân mình có nhu cầu xây nhà, chắc chắn mình sẽ giới thiệu dịch vụ của bên mình.",
          name: "Thu Trang",
          job: "Thiết kế",
        },
        {
          img: "img/cus_review/img02.webp",
          description:
            "Sau khi cải tạo xong, mình cũng không thể tin ngôi nhà cũ kĩ của gia đình có thể thay đổi được như vậy. Các kỹ sư của Công trình ND Contruction tư vấn rất cẩn thận, thi công nhanh chóng, chi phí cũng rất hợp lý. Giờ ngôi nhà mình rộng rãi và khang trang hơn rất nhiều. Cảm ơn QD Contruction rất nhiều.",
          name: "Nguyễn Anh Dũng",
          job: "Lập trình viên",
        },
      ],
    };
  },
};
</script>

<style scoped>
.main {
  margin-bottom: 50px;
  padding-top: 50px;
  padding-bottom: 50px;
  position: relative;
}
.main:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url(public/img/cus_review/background-review.webp);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.container {
  max-width: 1140px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.main:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}
.block-title {
  text-align: center;
  margin-bottom: 30px;
  position: relative;
  z-index: 9;
}
.block-title h2 {
  font-size: 40px;
  font-weight: 700;
  color: #fff;
}
.block-title p {
  font-size: 16px;
  color: #fff;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
  gap: 30px;
}
.block-content .swiper-cus-review .swiper-slide {
  border-radius: 15px;
  background: #fff;
  overflow: hidden;
  width: 540px;
}
.swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
}
.block-content .swiper-cus-review .swiper-slide .des {
  text-align: justify;
  font-size: 14px;
  padding: 20px;
}
.block-content .swiper-cus-review .swiper-slide .flex {
  display: flex;
  align-items: center;
  padding: 15px;
  background: #ff5e14;
  position: relative;
}
.block-content .swiper-cus-review .swiper-slide .flex .thumb {
  width: 67px;
  height: 67px;
  border-radius: 100%;
  overflow: hidden;
  border: 3px solid #fff;
}
.block-content .swiper-cus-review .swiper-slide .flex .name-job {
  color: #fff;
  width: calc(100% - 65px);
  padding-left: 14px;
}
.block-content .swiper-cus-review .swiper-slide .flex .name-job span.name {
  font-size: 20px;
}
.block-content .swiper-cus-review .swiper-slide .flex .name-job span {
  display: block;
}
.block-content .swiper-cus-review .swiper-slide .flex .icon-quote {
  background-image: url(public/img/cus_review/quote.webp);
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  width: 50px;
  height: 32px;
  right: 15px;
  opacity: 0.5;
}
@media (max-width: 1024px) {
  .block-content .swiper-cus-review .swiper-slide {
    width: 330px;
  }
  .block-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media (max-width: 500px) {
  .swiper-wrapper {
    flex-direction: column;
  }
}
</style>
