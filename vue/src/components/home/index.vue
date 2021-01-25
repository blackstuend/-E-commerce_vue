<template>
  <div>
    <div class="banner">
      <carousel
        :per-page="1"
        :autoplay="true"
        :loop="true"
        :navigationEnabled="false"
        :paginationEnabled="false"
      >
        <slide data-index="0"
          ><div
            class="banner-img d-flex align-items-center"
            style="
              background-image: url(https://images.unsplash.com/photo-1544965838-54ef8406f868?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
            "
          >
            <div class="container-fluid ml-2">
              <div class="jumbotron jumbotron-bg"></div>
            </div>
          </div>
        </slide>
        <slide data-index="1">
          <div
            class="banner-img"
            style="
              background-image: url(https://images.unsplash.com/photo-1588597575483-f4e43e191c94?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1404&q=80);
            "
          >
            <div class="jumbotron jumbotron-bg"></div>
          </div>
        </slide>
      </carousel>
      <i
        class="fas fa-angle-double-down fa-2x d-block text-center dobule-angle"
      ></i>
    </div>
    <div class="about d-flex align-items-center">
      <div class="container text-white">
        <h2>品牌故事</h2>
        民國四十一年（一九五二）先嚴創立「金永利製刀廠」於金門金城鎮後埔街（即今古蹟邱良功貞節牌坊側），廣搜廢棄彈殼，專攻刀具焠煉鍛燒工夫，民國六十年後隨國軍與戰鬥營人員的口耳相傳，刀廠名氣漸出，民國六十三年經漫畫家牛哥、梁秀中等藝文人士二度專訪並為文讚譽本刀廠之刀具為「刀王之王」，再經國內外傳媒的採訪報導，更使「刀王之王」的砲彈鋼刀聲名大噪，與金門高梁酒並駕齊驅，享譽中外。
        　
        現今兩岸和平，開放觀光，客源不斷增加，為增加產量，民國八十三年在金門伯玉路擴大廠房以應需求，又於九十五年全面ＣＩＳ整體設計並推出合金鋼刀等新產品，增加全省據點，開拓海外市場，期望再創事業高峰。「誠信」是本廠經營產業的基石；「熱忱」是服務顧客的理念，期望舊雨新知能繼續愛護與支持。
      </div>
    </div>
    <div class="sale">
      <div class="container">
        <div class="row py-3">
          <div class="col-md-4 mb-3">
            <div class="parent">
              <div
                class="bg-cover d-flex align-items-center scale"
                style="
                  background-image: url('https://images.unsplash.com/photo-1610344249394-f06a84847f82?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
                "
              >
                <div class="h2 text-white text-center mx-auto">最新上架</div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="parent">
              <div
                class="bg-cover d-flex align-items-center scale"
                style="
                  background-image: url('https://images.unsplash.com/photo-1592066020961-bc1d53ac6cf8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
                "
              >
                <div class="h2 text-white text-center mx-auto">人氣商品</div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="parent">
              <div
                class="bg-cover d-flex align-items-center scale"
                style="
                  background-image: url('https://images.unsplash.com/photo-1589891948959-533f1626f1b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
                "
              >
                <div class="h2 text-white text-center mx-auto">近期限定</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="introduction bg-cover">
      <div class="container py-5">
        <div class="row">
          <div class="col-md-6">
            <img
              class="rounded"
              src="https://images.unsplash.com/photo-1566321653178-150b0cb0cf13?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
          </div>
          <div class="col-md-6">
            <div class="px-5 text-center py-4">
              <h4>用心做好每把刀</h4>
              <p class="h5 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                molestiae magni error ex? Eum reiciendis atque illo ullam ex
                accusamus itaque magni, voluptas, maxime quisquam deserunt
                voluptate eveniet nulla sed?
              </p>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-6 order-2 order-md-1">
            <div class="px-5 text-center py-4">
              <h4>只專注在做對的事</h4>
              <p class="h5 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                molestiae magni error ex? Eum reiciendis atque illo ullam ex
                accusamus itaque magni, voluptas, maxime quisquam deserunt
                voluptate eveniet nulla sed?
              </p>
            </div>
          </div>
          <div class="col-md-6 order-1 order-md-2">
            <img
              class="rounded"
              src="https://images.unsplash.com/photo-1573450490722-3b09f360490d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {};
  },
  mounted() {
    $(".dobule-angle").click(function () {
      let about_pos = $(".about").offset().top;
      console.log(about_pos);
      $("html, body").animate({ scrollTop: about_pos }, 700);
    });
  },
};
</script>

<style scoped lang="scss">
.h5 {
  line-height: 45px;
}

img {
  width: 100%;
  height: 360px;
}

.introduction {
  // background-image: url("https://images.unsplash.com/photo-1539850310365-b99c16f4b992?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
  height: fit-content;
  width: 100%;
  background-color: #d5d1c2;
  background-attachment: fixed;
  color: #4f4239;
}

.sale {
  background-color: #421d03;
}

.parent {
  cursor: pointer;
  height: 250px;
  overflow: hidden;
  border: 1px solid black;
}

.scale {
  transform: scale(1, 1);
  transition: all 1s ease-out;
  height: 100%;
  width: 100%;
  &:hover {
    transform: scale(1.2, 1.2);
  }
}

.bg-cover {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.about {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  font-size: 18px;
  height: 100vh;
  background-attachment: fixed;
  background-image: url("https://images.unsplash.com/photo-1583130879749-216d48fddafc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80");
}
.banner {
  width: 100%;
  height: 100vh;
}
.banner-img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
  position: relative;
}
.dobule-angle {
  transform: translateY(-80px);
  color: #fff;
  animation: bounce 1.6s linear infinite;
  cursor: pointer;
}
@keyframes bounce {
  25% {
    -webkit-transform: translateY(-70px);
  }
  50%,
  100% {
    -webkit-transform: translateY(-80px);
  }
  75% {
    -webkit-transform: translateY(-90px);
  }
}
.jumbotron {
  padding: 10px;
  background-color: rgba(5, 5, 5, 0.4);
  color: white;
  width: fit-content;
  font-size: 25px;
}
</style>