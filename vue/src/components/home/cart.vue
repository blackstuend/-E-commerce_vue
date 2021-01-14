<template>
  <div>
    <div v-if="cart.length == 0">
      <div class="container mt-5">
        <div class="alert alert-danger">購物車是空的唷~</div>
      </div>
    </div>
    <div class="container" v-else>
      <table class="table">
        <thead>
          <tr>
            <th>商品</th>
            <th width="80px">價格</th>
            <th class="text-right" width="80">數量</th>
            <th class="text-right" width="58">操作</th>  
            <th class="text-right" scope="col">小計</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,key) in cart" :key="item._id">
            <th scope="row">{{ item.name }}</th>
            <td>{{ item.price }}</td>
            <td class="text-right d-flex">
              <number-input
                v-model="item.qty"
                :min="1"
                :max="999"
                inline
                controls
                @change="updateCart(key,item.qty)"
              ></number-input>
            </td>
            <td class="px-0"><button class='btn btn-danger' @click="delcart(key)">刪除</button></td>
            <td class="text-right">{{ item.price * item.qty }}</td>
          </tr>
          <tr>
            <th colspan="4">總計:</th>
            <td class="text-right">{{ total }}</td>
          </tr>
        </tbody>
      </table>
      <form class="mb-4" @submit.prevent="postOrder">
        <div class="form-group">
          <label for="Email">電子信箱</label>
          <input
            type="email"
            class="form-control"
            id="Email"
            v-model="order.email"
            required
          />
        </div>
        <div class="form-group">
          <label for="Name">姓名</label>
          <input
            type="text"
            class="form-control"
            id="Name"
            v-model="order.name"
            required
          />
        </div>
        <div class="form-group">
          <label for="address">地址</label>
          <input
            type="text"
            class="form-control"
            id="address"
            v-model="order.address"
            required
          />
        </div>
        <div class="form-group">
          <label for="phone">電話</label>
          <input
            type="text"
            class="form-control"
            id="phone"
            v-model="order.phone"
            required
          />
        </div>
        <button class="btn-outline-success btn" type="submit">購買</button>
      </form>
      <div class="alert alert-success" v-if="success">購買成功</div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { mapState } from "vuex";
export default {
  data() {
    return {
      order: {
        name: "",
        phone: "",
        address: "",
        phone: "",
        products: [],
        total: "",
      },
      success: false,
    };
  },
  computed: {
    ...mapState(["cart"]),
    total() {
      let sum = 0;
      var cart = this.cart;
      for (let i = 0; i < cart.length; i++) {
        sum += cart[i].qty * cart[i].price;
      }
      return sum;
    },
  },
  methods: {
    postOrder() {
      let vm = this;
      this.order.products = [...this.cart];
      this.order.total = this.total;
      let api = `${process.env.WEBSERVER}/admin/addOrder`;
      vm.$http.post(api, vm.order).then((res) => {
        console.log("res", res);
        if (res.data.success) {
          vm.$store.dispatch("ClearCart");
          vm.success = true;
        }
      });
    },
    delcart(key){
      let data = JSON.parse(localStorage.getItem("product"));
      data.splice(key,1);
      localStorage.setItem("product",JSON.stringify(data));
      this.$store.dispatch("getCart");
    },
    updateCart(key,qty){
      let data = JSON.parse(localStorage.getItem("product"));
      data[key].qty = qty;
      localStorage.setItem("product",JSON.stringify(data));
      this.$store.dispatch("getCart");
    }
  },
  created() {
    this.$store.dispatch("getCart");
  },
};
</script>

<style lang='scss' scoped>
</style>