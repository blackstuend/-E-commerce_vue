<template>
  <div>
    <div class="banner h1 text-center text-white mb-0">Productions</div>
    <div class="bg">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="selection mt-5 d-flex flex-column">
              <button
                type="button"
                class="btn btn-outline-secondary mb-3"
                :class="{'active':tempSelect=='All'}"
                @click="tempSelect='All'"
              >
                全部商品
              </button>
              <button
                type="button"
                v-for="(item, key) in categories"
                :key="key"
                class="btn btn btn-outline-secondary mb-3"
                :class="{'active':tempSelect==item}"
                @click="tempSelect=item"
              >
                {{ item }}
              </button>
            </div>
          </div>
          <div class="col-md-9 mt-5">
            <div class="row">
              <div class="col-md-4 mb-4" v-for="(item) in products" :key="item._id" v-show="tempSelect == item.categories || tempSelect == 'All'">
                <div class="box" @click="ToProduct_page(item)">
                  <div style="position:relative">
                    <div class="box-bg-hover text-center text-white h3"> 查看更多 </div>
                    <div
                      class="box-img bg-cover"
                      :style="{ backgroundImage: `url(${item.imageUrl})` }"
                    ></div>
                    <div class="box-content p-3">
                      <div class="h5">{{ item.name }}</div>
                      <div class="box-p">
                        {{ item.description}}
                      </div>
                    </div>
                  </div>
                  <div class="box-btn p-2">$ {{item.price}}</div>
                  <div @click.stop="AddCart(item)" class="box-btn-cart py-2 text-center">加入購物車</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="container">
      <div class="row">
        <div class="col-md-3 mt-3" v-for="item in products" :key="item._id">
          <div class="product">
            <div>
              <img
                :src="item.imageUrl"
                alt=""
                class="product-img"
                @click="ToProduct_page(item)"
              />
            </div>
            <div class="d-flex justify-content-between">
              <div>
                <div class="product-title" @click="ToProduct_page(item)">
                  {{ item.name }}
                </div>
                <div class="product-price">NT {{ item.price }}</div>
              </div>
              <a class="product_add mt-2" @click.prevent="AddCart(item)">+</a>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import $ from "jquery";
import { mapState } from "vuex";
export default {
  data() {
    return {
      tempSelect:"All",
    };
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapState(["products", "isLoading", "cart"]),
    categories() {
      let temp = new Set();
      this.products.forEach(function (item) {
        temp.add(item.categories);
      });
      return temp;
    },
  },
  created() {
    this.$store.dispatch("GetProduct");
  },
  methods: {
    ToProduct_page(item) {
      this.$router.push(`/product/${item._id}`);
    },
    AddCart(item) {
      let new_item = { ...item };
      new_item.qty = 1;
      this.$store.dispatch("addCart", new_item);
    },
  },
};
</script>


<style lang="scss" scoped>
.box-p{
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  /*! autoprefixer: off */
}
.box-btn-cart {
  display: none;
  color: #ddc4b0;
  background-color: rgb(64, 43, 28);
}

.box-btn {
  display: block;
  color: #ddc4b0;
  background-color: rgb(64, 43, 28);
}
.box-content {
  background-color: #ddc4b0;
}
.box {
  color: #4f4239;
  cursor: pointer;
  &:hover {
    .box-btn-cart {
      display: block;
    }
    .box-btn {
      display: none;
    }
    .box-bg-hover{
      display:block;
    }
  }
}
.box-bg-hover{
  display:none;
  background-color: rgba(255,255,255,0.3);
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin-bottom: 0;
  line-height: 150px;
}
.box-img {
  width: 100%;
  height: 150px;
}
.bg {
  background-color: #e5d1c2;
  width: 100%;
  height: fit-content;
}
.bg-cover {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.banner {
  line-height: 500px;
  width: 100%;
  height: 500px;
  background-position: center center;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1543504462-232132e2c6ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80");
}
@media (max-width: 767px) {
  .product-img {
    height: auto;
  }
}
</style>