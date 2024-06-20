<template>
  <footer class="footer">
    <div class="mid-footer">
      <div class="container">
        <v-row>
          <v-col class="col-left" cols="12" md="4">
            <div class="logo-footer">
              <a href="/" class="logo" title="Title">
                <img
                  width="188"
                  height="46"
                  src="public/img/logoHeader.png"
                  alt=""
                  style="border-radius: 8px"
                />
              </a>
            </div>
            <div class="des-footer">
              Với +18 năm trong nghề, QD Contruction tự hào là đơn vị thiết kế
              thi công chuyên nghiệp, luôn mang lại giá trị thiết thực nhất tới
              khách hàng.
            </div>
            <div class="social-footer">
              <a href="#" class="social-button" title="">
                <v-icon icon="mdi-facebook"></v-icon>
              </a>
              <a href="#" class="social-button" title="">
                <v-icon icon="mdi-youtube"></v-icon>
              </a>
              <a href="#" class="social-button" title="">
                <v-icon icon="mdi-twitter"></v-icon>
              </a>
              <a href="#" class="social-button" title="">
                <v-icon icon="mdi-instagram"></v-icon>
              </a>
              <a href="#" class="social-button" title="">
                <v-icon icon="mdi-google"></v-icon>
              </a>
            </div>
          </v-col>
          <v-col class="col-right" cols="12" md="8">
            <v-row class="d-none d-sm-flex">
              <v-col cols="4" class="link_list col-footer">
                <h4 class="title-menu">
                  Về chúng tôi <span class="Collapsible__Plus"></span>
                </h4>
                <div class="list-menu hidden-mobile">
                  <a href="/">Trang chủ</a>
                  <a href="/">Giới thiệu</a>
                  <a href="/">Dự án tiêu biểu</a>
                  <a href="/">Sản phẩm</a>
                  <a href="/">Đội ngũ</a>
                  <a href="/">Tin tức</a>
                  <a href="/">Liên hệ</a>
                </div>
              </v-col>
              <v-col cols="4">
                <h4 class="title-menu">
                  Dự án tiêu biểu <span class="Collapsible__Plus"></span>
                </h4>
                <div class="list-menu hidden-mobile">
                  <a href="/">Dự án chung cư</a>
                  <a href="/">Dự án biệt thự</a>
                  <a href="/">Dự án văn phòng</a>
                  <a href="/">Dự án nhà ống, nhà phố</a>
                  <a href="/">Dự án showroom, quán cafe, cửa hàng</a>
                </div>
              </v-col>
              <v-col cols="4">
                <h4 class="title-menu">
                  Tư vấn khách hàng <span class="Collapsible__Plus"></span>
                </h4>
                <div class="hidden-mobile">
                  <div class="contact-footer">
                    <div class="item">
                      <v-icon class="iconContact">mdi-map-marker</v-icon>
                      <a href="/"
                        >747 Quốc lộ 1A, Phường Bình Hưng Hòa, Quận Bình Tân,
                        Thành phố Hồ Chí Minh, Việt Nam</a
                      >
                    </div>
                    <div class="item">
                      <v-icon class="iconContact">mdi-email</v-icon>
                      <a href="/">supportss@QD.vn</a>
                    </div>
                    <div class="item">
                      <v-icon class="iconContact">mdi-phone-in-talk</v-icon>
                      <a href="/">0000000</a>
                    </div>
                    <div class="item">
                      <v-icon class="iconContact">mdi-facebook</v-icon>
                      <a href="/">Facebook</a>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-expansion-panels class="d-flex d-sm-none">
              <v-expansion-panel>
                <v-expansion-panel-title>Về chúng tôi</v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-list><a href="/">Trang chủ</a></v-list>
                  <v-list><a href="/">Giới thiệu</a></v-list>
                  <v-list><a href="/">Dự án tiêu biểu</a></v-list>
                  <v-list><a href="/">Sản phẩm</a></v-list>
                  <v-list><a href="/">Đội ngũ</a></v-list>
                  <v-list><a href="/">Tin tức</a></v-list>
                  <v-list><a href="/">Liên hệ</a> </v-list>
                </v-expansion-panel-text>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-title
                  >Dự án tiêu biểu</v-expansion-panel-title
                >
                <v-expansion-panel-text>
                  <v-list><a href="/">Dự án chung cư</a></v-list>
                  <v-list><a href="/">Dự án biệt thự</a></v-list>
                  <v-list><a href="/">Dự án văn phòng</a></v-list>
                  <v-list><a href="/">Dự án nhà ống, nhà phố</a></v-list>
                  <v-list
                    ><a href="/">Dự án showroom, quán cafe, cửa hàng</a></v-list
                  >
                </v-expansion-panel-text>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-title
                  >Tư vấn khách hàng</v-expansion-panel-title
                >
                <v-expansion-panel-text>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon style="color: #ff5e14" class="iconContact"
                        >mdi-map-marker</v-icon
                      >
                    </template>
                    <a href="/"
                      >747 Quốc lộ 1A, Phường Bình Hưng Hòa, Quận Bình Tân,
                      Thành phố Hồ Chí Minh, Việt Nam</a
                    >
                  </v-list-item>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon style="color: #ff5e14" class="iconContact"
                        >mdi-email</v-icon
                      >
                    </template>
                    <a href="/">supportss@QD.vn</a>
                  </v-list-item>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon style="color: #ff5e14" class="iconContact"
                        >mdi-phone-in-talk</v-icon
                      >
                    </template>
                    <a href="/">0000000</a>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon style="color: #ff5e14" class="iconContact"
                        >mdi-facebook</v-icon
                      >
                    </template>
                    <a href="/">Facebook</a>
                  </v-list-item>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer .mid-footer {
  background-color: #050f2d;
  padding: 60px 0 60px;
  background-size: cover;
  background-position: top 15px center;
  background-repeat: no-repeat;
  background-image: url(public/img/footer/background-footer.webp);
}
.container {
  max-width: 1140px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.footer .mid-footer .des-footer {
  color: #ffff;
  padding: 15px 0;
  font-size: 13px;
  text-align: justify;
}
.footer .mid-footer .social-footer {
  display: inline-block;
}
.footer .mid-footer .social-footer a {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: rgba(255, 255, 255, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.15);
  cursor: pointer;
  position: relative;
  border-radius: 100%;
}
.footer .mid-footer .title-menu {
  font-size: 16px;
  margin-bottom: 15px;
  position: relative;
  color: #fff;
}
.footer .mid-footer .list-menu a {
  font-size: 13px;
  display: block;
  color: #fff;
  padding: 5px 0;
}
.footer .mid-footer .contact-footer .item {
  color: #fff;
  font-size: 13px;
  margin-bottom: 12px;
  padding-left: 30px;
  position: relative;
}
.footer .mid-footer .contact-footer .item a {
  color: #fff;
}
a {
  text-decoration: none;
  background-color: transparent;
}
.footer .mid-footer .contact-footer .item .iconContact {
  position: absolute;
  left: 0;
  top: 1px;
  width: 17px;
  color: #ff5e14 !important;
}
</style>