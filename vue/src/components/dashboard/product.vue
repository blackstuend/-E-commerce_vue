<template>
  <div class="product">
    <loading :active.sync="isLoading"></loading>
    <div
      class="modal fade"
      id="delmodal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <table class="table">
      <thead class="thead-dark">
        <tr class="text-center">
          <th scope="col">圖片</th>
          <th scope="col">品名</th>
          <th scope="col">分類</th>
          <th scope="col">價格</th>
          <th width="200">操作</th>
        </tr>
      </thead>
      <tbody class="bg-white text-center">
        <tr v-for="item in products" :key="item._id">
          <td>
            <a :href="item.imageUrl" target="_blank">
              <img :src="item.imageUrl" alt="" width="50px" />
            </a>
          </td>
          <td>{{ item.name }}</td>
          <td>{{ item.categories }}</td>
          <td>{{ item.price }}</td>
          <td class="d-flex justify-content-center">
            <button class="btn btn-success mr-2" @click="ToupdatePage(item)">更新</button>
            <button class="btn btn-danger" @click="openDelModal(item)">
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import $ from "jquery";
import { mapState } from "vuex";
export default {
  data() {
    return {
    };
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapState([
      "products",
      "isLoading",
      // ...
    ]),
  },
  methods: {
    // getProduct() {
    //   let vm = this;
    //   let api = `${process.env.WEBSERVER}/admin/getProduct`;
    //   vm.isLoading = true;
    //   vm.$http.get(api).then((res) => {
    //     vm.products = res.data;
    //     vm.isLoading = false;
    //   });
    // },
    // delProduct(item) {
    //   let api = `${process.env.WEBSERVER}/admin/delProduct/${item._id}`;
    //   let vm = this;
    //   vm.$http.delete(api).then((res) => {
    //     if (res.data.success) {
    //       vm.getProduct();
    //     } else this.$bus.$emit("alert:message", "刪除失敗");
    //   });
    // },
    openDelModal(item){
      $("#delmodal").modal("show");
      this.$store.dispatch('uploadDelProduct',item);
    },
    ToupdatePage(item){
      this.$router.push(`/dashboard/update_product/${item._id}`)
    }
  },
  created() {
    this.$store.dispatch('GetProduct')
  },
  mounted() {},
};
</script>


<style lang="scss" scoped>
.product {
  padding: 30px;
}
td {
  line-height: 50px;
}
</style>