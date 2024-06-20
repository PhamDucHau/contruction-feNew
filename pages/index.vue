<template>
  <Banner />
  <CustomerCare />
  <AboutMe />
  <OurServices />
  <OurProject />
  <Achievement />
  <CusReview />
  <PriceTable />
</template>

<script>
import Banner from "../components/home/Banner.vue";
import CustomerCare from "~/components/home/CustomerCare.vue";
import AboutMe from "../components/home/AboutMe.vue";
import OurServices from "../components/home/OurServices.vue";
import OurProject from "../components/home/OurProject.vue";
import Achievement from "../components/home/Achievement.vue";
import CusReview from "../components/home/CusReview.vue";
import PriceTable from "../components/home/PriceTable.vue";

export default {
  components: {
    Banner,
    CustomerCare,
    AboutMe,
    OurServices,
    OurProject,
    Achievement,
    CusReview,
    PriceTable,
  },
};
</script>

<style>
</style>