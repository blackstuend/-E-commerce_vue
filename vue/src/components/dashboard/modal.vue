<template>
  <div>
    <div class="modal fade" tabindex="-1" role="dialog" id="delmodal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">刪除提示框</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>確定要刪除這筆名稱為 {{ Product.name }} 嗎?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" @click="delProduct">
              確定刪除
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              關閉
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
    
  computed: {
    Product() {
      return this.$store.state.delProduct;
    },
  },
  methods: {
    delProduct() {
      let api = `${process.env.WEBSERVER}/admin/delProduct/${this.Product._id}`;
      let vm = this;
      vm.$http.delete(api).then((res) => {
        if (res.data.success) {
          this.$store.dispatch("GetProduct");
          $("#delmodal").modal("hide");
        } else this.$bus.$emit("alert:message", "刪除失敗");
      });
    },
  },
};
</script>