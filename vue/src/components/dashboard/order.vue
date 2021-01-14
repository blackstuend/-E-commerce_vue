<template>
  <div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">訂單人姓名</th>
          <th scope="col">總金額</th>
          <th scope="col" class="text-center">選項</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item._id">
          <th scope="row">{{ item.name }}</th>
          <td>{{ item.total | currency }}</td>
          <td class="text-center">
            <button class="btn btn-success" @click="lookmore(item)">
              查看更多
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="detail" v-if="open">
      <div class="layout-card w-75 mx-auto p-3">
        <div class="cancel" @click="open = !open;CaheOrder={}">&times</div>
        <div>購買者:{{ CaheOrder.name }}</div>
        <div>信箱:{{ CaheOrder.email }}</div>
        <div>電話:{{ CaheOrder.phone }}</div>
        <div>地址:{{ CaheOrder.address }}</div>
        <table class="table mt-3">
          <thead>
            <tr>
              <th scope="col">商品</th>
              <th scope="col">價格</th>
              <th scope="col">數量</th>
              <th scope="col">小計</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in CaheOrder.products" :key="item._id">
              <th scope="row">{{ item.name }}</th>
              <td>{{ item.price }}</td>
              <td>{{ item.qty }}</td>
              <td>{{ item.price * item.qty }}</td>
            </tr>
            <tr>
              <th colspan="3">總計:</th>
              <td>{{ CaheOrder.total }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
      CaheOrder: {},
      open: false,
    };
  },
  methods: {
    getOrders() {
      let vm = this;
      let api = `${process.env.WEBSERVER}/admin/getOrders`;
      vm.$http.get(api).then((res) => {
        vm.orders = res.data;
      });
      console.log(this.orders);
    },
    lookmore(item) {
      this.CaheOrder = item;
      this.open = true;
    },
  },
  created() {
    this.getOrders();
  },
  filters: {
    currency(price) {
      let val = (price / 1).toFixed(2).replace(".", ",");
      return `$${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.detail {
  position: fixed;
  top: 20%;
  left: 15%;
  width: 75%;
  z-index: 100;
}
.layout-card {
  background-color: #fff;
}
.cancel {
  font-size: 25px;
  right: 20px;
  position: absolute;
  cursor: pointer;
}
.layout-card{
    position: relative;
}
</style>