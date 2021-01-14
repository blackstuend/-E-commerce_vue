<template>
  <div>
    <carousel :per-page="1" :paginationEnabled="false" :autoplay="true" :loop="true">
      <slide data-index="0"
        ><div
          class="banner"
          style="
            background-image: url(https://scontent.ftpe3-2.fna.fbcdn.net/v/t1.0-9/21462767_875493039271273_8251910181874576601_n.jpg?_nc_cat=105&ccb=2&_nc_sid=8bfeb9&_nc_ohc=ENGUDdEHZhUAX8Y6DMB&_nc_ht=scontent.ftpe3-2.fna&oh=13566754a99aa014770ec5d8a67a4ef5&oe=6023BE43);
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
  height: 600px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>