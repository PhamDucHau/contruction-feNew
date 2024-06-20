<template>
  <div class="blog_wrapper layout-blog">
    <div class="container">
      <v-row>
        <v-col cols="12" sm="9" class="right-content">
          <h1 class="title-page d-none">Dự án chung cư</h1>
          <div class="list-blogs">
            <v-row>
              <v-col
                v-for="(item, index) in array[valueData].child"
                :key="index"
                cols="12"
                sm="6"
              >
                <div class="item-blog">
                  <div class="block-thumb">
                    <a href="/" class="thumb">
                      <img :src="item.img" alt=""
                    /></a>
                  </div>
                  <div class="block-info">
                    <div class="post">
                      <div class="time-post f">{{ item.status }}</div>
                      -
                      <div class="time-post">
                        <span>{{ item.customer }}</span>
                      </div>
                    </div>
                    <h3>{{ item.title }}</h3>
                    <p class="justify">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="12" sm="3" class="blog_left_base">
          <div class="position-sticky">
            <div class="aside-content aside-content-blog">
              <div class="title-head">Dự án tiêu biểu</div>
              <nav class="nav-category">
                <ul class="nav navbar-pills">
                  <li
                    v-for="(item, index) in array"
                    :key="index"
                    :class="changeTab(index)"
                  >
                    <p
                      class="nav-link"
                      @click="valueData = index"
                      v-text="item.title"
                    ></p>
                  </li>
                </ul>
              </nav>
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
      valueData: 0,
      array: [
        {
          title: "Dự án chung cư",
          child: [
            {
              status: "Thứ Tư, 12/07/2023",
              customer: "Nguyễn Anh Dũng",
              title: "Chung cư 2 ngủ - 94m2",
              description:
                "Thiết kế nội thất phòng khách Phòng khách tinh gọn nhưng đầy ấn tượng với lối bố trí...",
              img: "img/typical_projects/chucu1.webp",
            },
            {
              status: "Thứ Tư, 12/07/2023",
              customer: "Nguyễn Anh Dũng",
              title: "Chung cư 86m2 – phong cách INDOCHINE",
              description:
                "Thiết kế nội thất phòng khách Phòng khách tinh gọn nhưng đầy ấn tượng với lối bố trí...",
              img: "img/typical_projects/chucu2.webp",
            },
            {
              status: "Thứ Tư, 12/07/2023",
              customer: "Nguyễn Anh Dũng",
              title: "Chung cư 107M2 – phong cách tân cổ điển",
              description:
                "Thiết kế nội thất phòng khách Phòng khách căn hộ được thiết kế với những gam màu tối...",
              img: "img/typical_projects/chucu3.webp",
            },
            {
              status: "Thứ Tư, 12/07/2023",
              customer: "Nguyễn Anh Dũng",
              title: "Căn hộ 2 phòng ngủ – phong cách hiện đại",
              description:
                "Thiết kế nội thất phòng khách Phòng khách căn hộ được thiết kế với những gam màu tối...",
              img: "img/typical_projects/chucu4.webp",
            },
          ],
        },
        {
          title: "Dự án biệt thự",
          child: [
            {
              status: "Thứ Tư, 12/07/2023",
              customer: "Nguyễn Anh Dũng",
              title: "Mẫu nội thất căn hộ Duplex - chung cư Metropolis",
              description:
                "Mẫu nội thất phòng khách căn hộ Duplex sang trọng Căn hộ cao cấp của gia đình chú...",
              img: "img/typical_projects/bietthu1.webp",
            },
            {
              status: "Thứ Tư, 12/07/2023",
              customer: "Nguyễn Anh Dũng",
              title: "Mẫu thiết kế Villa VINHOMES OCEAN PARK",
              description:
                "Thiết kế không gian phòng khách sang trọng, ấn tượng Không gian phòng khách căn Villa nhà cô...",
              img: "img/typical_projects/bietthu2.webp",
            },
            {
              status: "Thứ Tư, 12/07/2023",
              customer: "Nguyễn Anh Dũng",
              title:
                "Thiết kế biệt thự 350m2 tại Hải Phòng - Phong cách Luxury",
              description:
                "Thiết kế không gian phòng khách đẳng cấp Chủ nhân của căn hộ trên là một người rất...",
              img: "img/typical_projects/bietthu3.webp",
            },
          ],
        },
        {
          title: "Dự án văn phòng",
          child: [
            {
              status: "Thứ Tư, 12/07/2023",
              customer: "Nguyễn Anh Dũng",
              title: "Văn phòng tư vấn du học 70m2",
              description:
                "Tổng quan dự án thiết kế văn phòng du học 70m2 Thành Đô Một văn phòng tư vấn...",
              img: "img/typical_projects/vanphong1.webp",
            },
            {
              status: "Thứ Tư, 12/07/2023",
              customer: "Nguyễn Anh Dũng",
              title: "Thiết kế thi công văn phòng mới - 130m2",
              description:
                "Văn phòng mới của KFA được định hình bằng phong cách hiện đại, khoa học, vừa để...",
              img: "img/typical_projects/vanphong2.webp",
            },
          ],
        },
        {
          title: "Dự án nhà ống, nhà phố",
          child: [
            {
              status: "Thứ Tư, 12/07/2023",
              customer: "Nguyễn Anh Dũng",
              title: "Thiết kế nội thất nhà phố tân cổ điển - 95m2",
              description:
                "Thiết kế nội thất phòng khách lớn Về tổng thể, phòng khách lớn được thiết kế với những...",
              img: "img/typical_projects/nhapho1.webp",
            },
            {
              status: "Thứ Tư, 12/07/2023",
              customer: "Nguyễn Anh Dũng",
              title: "Nhà phố hiện đại - 85m2",
              description:
                "Thiết kế nội thất phòng khách Không gian phòng khách hiện đại, cao cấp được thiết kế theo...",
              img: "img/typical_projects/nhapho2.webp",
            },
          ],
        },
        {
          title: "Dự án showroom, quán cafe, cửa hàng",
          child: [
            {
              status: "Thứ Tư, 12/07/2023",
              customer: "Nguyễn Anh Dũng",
              title: "QUÁN CAFE 1978 PHONG CÁCH HIỆN ĐẠI",
              description:
                "Quán cafe 1978 ưu tiên sử dụng gỗ công nghiệp nhưng nhờ kết màu óc chó mà...",
              img: "img/typical_projects/cuahang1.webp",
            },
          ],
        },
      ],
    };
  },
  created() {
    console.log("array[valueData]", this.array[this.valueData]);
  },
  methods: {
    changeTab(index) {
      if (index === this.valueData) {
        return "nav-item active relative";
      } else {
        return "nav-item relative";
      }
    },
  },
};
</script>

<style scoped>
.layout-blog {
  padding-bottom: 30px;
}
.container {
  max-width: 1140px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.title-page {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
}
.list-blogs .item-blog {
  margin-bottom: 30px;
}
.list-blogs .item-blog .block-thumb .thumb {
  padding-bottom: 57%;
  display: block;
  height: 0;
  position: relative;
}
a {
  color: #231f20;
  text-decoration: none;
  background-color: transparent;
}
.list-blogs .item-blog .block-thumb .thumb img {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
  width: auto !important;
  height: auto !important;
  position: absolute;
}
.list-blogs .item-blog .block-info {
  margin-top: 10px;
}
.list-blogs .item-blog .block-info .post {
  color: #8e8b8b;
  margin-bottom: 10px;
}
.list-blogs .item-blog .block-info .post .time-post {
  display: inline-block;
  font-size: 13px;
}
.list-blogs .item-blog .block-info h3 {
  font-size: 16px;
  line-height: 22px;
}
.list-blogs .item-blog .block-info p.justify {
  color: #5a5959;
  font-size: 13px;
  text-align: justify;
  margin-bottom: 10px;
}
.position-sticky {
  position: sticky;
  top: 0;
}
.aside-content-blog {
  background: #050f2d;
  border-radius: 5px;
  padding: 15px 15px 7px;
}
.aside-content-blog .title-head {
  font-size: 16px;
  margin-bottom: 15px;
  border-bottom: 1px solid #d8d5d5;
  padding-bottom: 5px;
  position: relative;
  color: #fff;
}
.aside-content-blog .title-head:before {
  content: "";
  position: absolute;
  width: 65px;
  background: #ff5e14;
  height: 2px;
  bottom: -1px;
  left: 0;
}
.aside-content-blog .nav-category ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.aside-content-blog .nav-category ul .nav-item {
  margin-bottom: 10px;
}
.aside-content-blog .nav-category > ul > li {
  background-color: rgba(255, 255, 255, 0.1);
}
.aside-content-blog .nav-category > ul > li:hover {
  cursor: pointer;
}
.relative {
  position: relative;
}
.aside-content-blog .nav-category ul .nav-item.active > .nav-link {
  color: #ff5e14;
}
.aside-content-blog .nav-category ul .nav-item .nav-link {
  display: block;
  padding: 8px 10px;
  font-size: 14px;
  color: #fff;
}
@media (max-width: 500px) {
  .v-row {
    flex-direction: column-reverse;
  }
}
</style>