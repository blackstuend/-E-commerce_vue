<template>
  <div>
    <carousel :per-page="1"  :autoplay="true" :loop="true"  :navigationEnabled="false">
      <slide data-index="0"
        ><div
          class="banner"
          style="
            background-image: url(https://media.u-mall.com.tw/BBCont/001988/1988121/a27ff778-48a2-4e22-9aea-5a16e5a96f50.jpg);
          "
        ></div
      ></slide>
      <slide data-index="1">
        <div
          class="banner"
          style="
            background-image: url(https://i0.wp.com/www.daisyyohoho.com/wp-content/uploads/2020/10/kinmen-22.jpg?fit=1000%2C664&ssl=1);
          "
        ></div>
      </slide>
    </carousel>
    <div class="container text-center intro">
      <img src="https://d.ecimg.tw/items/DEAGKZA900AQ7SH/i010007_1604044846.jpg" class="img-fluid" alt="" />
    </div>
    <div class="container text-center intro">
      <img src="https://b.ecimg.tw/items/DEAGKZA900AQ7SH/i010012_1604044846.jpg"  class="img-fluid" alt="" />
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
    };
  },
};
</script>

<style scoped lang="scss">
.banner {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>