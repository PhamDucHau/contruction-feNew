<template>
  <div class="bread-crumb">
    <div class="container">
      <ul class="breadcrumb">
        <li class="home">
          <a href="/"> <span>Trang chủ</span></a>
          <span class="mr_lr">&nbsp;/&nbsp;</span>
        </li>
        <li><span>Giới thiệu</span></li>
      </ul>
      <div class="title_full">Giới thiệu</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bread-crumb {
  margin-bottom: 50px;
  position: relative;
  display: block;
  padding: 100px 0;
  z-index: 1;
  background: url(public/img/introduce_banner/background.webp);
  background-size: cover;
  background-repeat: no-repeat;
}
.bread-crumb:before {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: "";
  background-color: #3c3531;
  opacity: 0.6;
}
.container {
  max-width: 1140px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.bread-crumb .breadcrumb {
  text-align: center;
  position: relative;
  color: #fff;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.bread-crumb .breadcrumb li {
  display: inline;
}
.bread-crumb .title_full {
  margin-top: 10px;
  text-align: center;
  font-size: 40px;
  color: #fff;
  position: relative;
  font-weight: bold;
}
a {
  color: white;
}
</style>