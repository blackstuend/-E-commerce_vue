<template>
  <div>
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-5">
          <div class="product_img">
            <img :src="product.imageUrl" alt="" width="300" height="200px" />
          </div>
        </div>
        <div class="col-md-7">
          <div class="h3">{{ product.name }}</div>
          <div class="price text-danger">NT {{ product.price }}</div>
          <hr />
          <div v-if="product.qty > 0">供貨狀況:尚有庫存</div>
          <div v-else>供貨狀況:缺貨</div>
          <div class="d-flex align-items-center mt-2">
            <div class="mr-5">數量:</div>
            <number-input v-model="count" :min="1" :max="10" inline controls ></number-input>
          </div>
          <div class="d-flex mt-3">
            <button class="btn btn-primary w-25 mr-5" @click="AddCart();GoTocart()">立刻購買</button>
            <button class="btn btn-outline-primary w-25" @click="AddCart">加入購物車</button>
          </div>
          <hr />
        </div>
      </div>
      <div class="font-weight-bold h4">產品介紹:</div>
      <div>
        {{ product.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      count:1
    };
  },
  methods: {
    getProduct() {
      let vm = this;
      let id = this.$route.params.id;
      let api = `${process.env.WEBSERVER}/admin/getOneProduct/${id}`;
      vm.$http.get(api).then((res) => {
        vm.product = res.data.data;
      });
    },
    AddCart(item) {
      let new_item = { ...this.product };
      new_item.qty = this.count;
      this.$store.dispatch("addCart", new_item);
    },
    GoTocart(){
      this.$router.push("/cart");
    }
  },
  created() {
    this.getProduct();
  },
};
</script>