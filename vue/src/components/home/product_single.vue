<template>
  <div>
    <div class="banner h1 text-center text-white mb-0">
        {{product.categories }}
    </div>
    <div class="bg">
    <div class="container py-5">
      <div class="row">
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
      <div >
        {{ product.description }}
      </div>
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

<style scoped lang="scss">
.banner{
  line-height: 500px;
  width: 100%;
  height:500px;
  background-position: center center;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1591809704796-0c6cb2eb0474?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80");
}
.bg{
  background-color:#e5d1c2;
}
</style>