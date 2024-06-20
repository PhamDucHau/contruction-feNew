<template>
  <div class="main">
    <div class="container">
      <div class="block-title">
        <h2>Báo giá thi công</h2>
        <p>
          Các gói thi công được chúng tôi phân tích theo từng hạng mục riêng,
          phù hợp với nhu cầu ngân sách của mỗi gia đình.
          <br class="d-lg-block d-none" />
          Để tối ưu, tiết kiệm ngân sách cho mỗi công trình, dự án.
        </p>
      </div>
      <div class="block-content">
        <v-row>
          <v-col
            v-for="(item, index) in array"
            :key="index"
            md="4"
            sm="6"
            cols="12"
            class="item"
          >
            <div class="child-table elevation-4">
              <span class="title-table">{{ item.status }}</span>
              <div class="price-style">
                <span class="price-table">{{ item.title }}</span>
                {{ item.description }}
              </div>
              <div class="text">
                <span
                  class="ct ct_text"
                  v-for="(child, index) in item.child"
                  :key="index"
                  >{{ child.title }}</span
                >
              </div>
              <span class="mt-4">
                <v-btn class="ct ct_dangky" size="large">Đăng ký ngay</v-btn>
              </span>
            </div>
          </v-col>
        </v-row>
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
          status: "GÓI CƠ BẢN",
          title: "280.000đ/m2",
          description: "Kinh phí dự kiến",
          child: [
            {
              title: "Nhà phố hiện đại, nhà cấp 4",
            },
            {
              title: "Thời gian thiết kế: 30 ngày",
            },
            {
              title: "Tư vấn phong thủy",
            },
            {
              title: "Bản vẽ xin phép xây dựng",
            },
            {
              title: "Bản vẽ phối cảnh mặt tiền",
            },
            {
              title: "Bản vẽ chi tiết kiến trúc",
            },
            {
              title: "Bản vẽ chi tiết kết cấu",
            },
            {
              title: "Bản vẽ điện, cấp thoát nước",
            },
            {
              title: "Tư vấn bố trí vật dụng nội thất",
            },
            {
              title: "Bản vẽ 3d sân vườn",
            },
          ],
        },
        {
          status: "GÓI NÂNG CAO",
          title: "350.000đ/m2",
          description: "Kinh phí dự kiến",
          child: [
            {
              title: "Biệt thự hiện đại, nhà phố tân cổ",
            },
            {
              title: "Thời gian thiết kế: 45 ngày",
            },
            {
              title: "Tư vấn phong thủy",
            },
            {
              title: "Bản vẽ xin phép xây dựng",
            },
            {
              title: "Bản vẽ phối cảnh 3d mặt tiền",
            },
            {
              title: "Bản vẽ chi tiết kiến trúc",
            },
            {
              title: "Bản vẽ chi tiết kết cấu",
            },
            {
              title: "Bản vẽ cấp thoát nước",
            },
            {
              title: "Tư vấn bố trí vật dụng nội thất",
            },
          ],
        },
        {
          status: "GÓI CAO CẤP",
          title: "500.000đ/m2",
          description: "Kinh phí dự kiến",
          child: [
            {
              title: "Biệt thự tân cổ điển",
            },
            {
              title: "Thời gian thiết kế: 60 ngày",
            },
            {
              title: "Tư vấn phong thủy",
            },
            {
              title: "Bản vẽ xin phép xây dựng",
            },
            {
              title: "Bản vẽ phối cảnh 3d mặt tiền",
            },
            {
              title: "Bản vẽ chi tiết kiến trúc",
            },
            {
              title: "Bản vẽ chi tiết kết cấu",
            },
            {
              title: "Bản vẽ cấp thoát nước",
            },
            {
              title: "Bản vẽ thiết kế 3d nội thất",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.main {
  margin-bottom: 50px;
}
.container {
  max-width: 1140px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.block-title {
  text-align: center;
  margin-bottom: 30px;
}
.block-title h2 {
  font-size: 40px;
  font-weight: 700;
}
.block-content {
  position: relative;
}
.block-content .child-table {
  background: #fff;
  color: #333;
  padding: 0 28px 28px 28px;
  border-radius: 5px;
  border: 1px solid transparent;
  position: relative;
  box-shadow: 0px 6px 30px rgba(0, 15, 87, 0.08);
  text-align: center;
}
.block-content .child-table .title-table {
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
  border-top: none;
  font-size: 24px;
  width: 230px;
  text-align: center;
  margin: 0 auto 27px auto;
  background-color: #050f2d;
  color: #fff;
  padding: 20px 20px 36px 20px;
  border-radius: 0 0 100% 100% / 0 0 100% 100%;
}
.block-content .child-table .price-style {
  width: 100%;
  color: #4d5765;
  font-size: 18px;
  font-weight: 500;
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #e4e4e4;
  display: block;
  margin-top: 3px;
  text-align: center;
}
.block-content .child-table .price-style span {
  color: #ff5e14;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 0;
  text-align: center;
}
.block-content .child-table .text {
  min-height: 360px;
}
.block-content .child-table span.ct_text {
  padding-left: 20px;
}
.block-content .child-table span {
  text-align: left;
  display: block;
  line-height: initial;
  position: relative;
  margin-bottom: 10px;
}
.block-content .child-table span.ct_text:before {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1.5px solid #ff5e14;
  position: absolute;
  left: 0;
  top: 4px;
  content: "";
}
.block-content .child-table .ct:hover {
  color: white;
  background: #ff5e14;
}
.block-content .item:nth-child(2) .child-table .title-table {
  background: #ff5e14;
}
.block-content .child-table span:hover {
  cursor: pointer;
}
.block-content .child-table .ct_dangky {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  background: #050f2d;
  color: white;
}
</style>