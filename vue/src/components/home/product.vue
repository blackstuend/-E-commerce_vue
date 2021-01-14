<template>
  <div>
    <div class="container">
      <div class="banner d-flex align-items-center justify-content-center">
        <div class="text-center topcis text-white">產品</div>
      </div>
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
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapState(["products", "isLoading", "cart"]),
  },
  created() {
    this.$store.dispatch("GetProduct");
  },
  methods: {
    ToProduct_page(item) {
      this.$router.push(`/product/${item._id}`);
    },
    AddCart(item) {
      let new_item = {...item};
      new_item.qty = 1;
      this.$store.dispatch("addCart", new_item);
    },
  },
};
</script>


<style lang="scss" scoped>
.topcis {
  background-color: rgba(0, 0, 0, 0.5);
}
.banner {
  background-image: url(https://diz36nn4q02zr.cloudfront.net/webapi/images/r/SalePageDesc/5918835/image0.jpg?ts=164200);
  background-size: contain;
  background-position: center center;
  width: 100%;
  background-repeat: no-repeat;
  height: 560px;
  font-size: 50px;
}
.product-title {
  color: rgb(0, 98, 132);
  cursor: pointer;
}
.product-price {
  font-weight: 900;
  font-size: 12px;
}
.product-img {
  height: 168px;
  width: 100%;
  cursor: pointer;
}
.product_add {
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  color: #ccc;
  text-align: center;
  background-color: #fff;
  line-height: 28px;
  &:hover {
    background-color: #31bcab;
    text-decoration: none;
  }
}
@media (max-width: 767px) {
  .product-img {
    height: auto;
  }
}
</style>