<template>
  <div>
    <div class="layout-card mx-3 w-auto p-3 mt-4">
      <form @submit.prevent="AddProduct">
        <div class="form-group">
          <label for="name">名稱</label>
          <input
            type="text"
            class="form-control"
            id="name"
            v-model="product.name"
          />
        </div>
        <div class="form-group">
          <label for="categories">分類</label>
          <input
            type="text"
            class="form-control"
            id="categories"
            v-model="product.categories"
          />
        </div>
        <div class="form-group">
          <label for="qty">數量</label>
          <input
            type="number"
            class="form-control"
            id="qty"
            v-model="product.qty"
          />
        </div>
        <div class="form-group">
          <label for="price">價格</label>
          <input
            type="number"
            class="form-control"
            id="price"
            v-model="product.price"
          />
        </div>
        <div class="form-group">
          <label for="description">描述</label>
          <textarea
            class="form-control"
            id="description"
            rows="5"
            v-model="product.description"
          ></textarea>
        </div>
        <div class="form-group">
          <label for="image_url">照片網址</label>
          <input
            type="text"
            class="form-control"
            id="image_url"
            v-model="product.imageUrl"
          />
        </div>
        <div class="form-group">
          <label for="Photo">照片</label>
          <input
            type="file"
            class="form-control-file"
            id="Photo"
            @change="uploadImg"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: {
        name: "",
        price: "",
        categoroes: "",
        qty: 0,
        price: 0,
        description: "",
        imageUrl: "",
      },
    };
  },
  methods: {
    AddProduct() {
      let vm = this;
      let api = `${process.env.WEBSERVER}/admin/addProduct`;
      vm.$http.post(api, vm.product).then((res) => {
        if (res.data.success) {
            vm.$router.push('/dashboard');
        } else {
          console.log("err");
          this.$bus.$emit("alert:message", "上傳失敗");
        }
      });
    },
    uploadImg() {
      let vm = this;
      let formData = new FormData();
      let imagefile = document.querySelector("#Photo");
      let New_file_Name =
        Math.floor(Date.now()) + "." + imagefile.files[0].name.split(".")[1];
      console.log(New_file_Name);
      formData.append("file", imagefile.files[0], New_file_Name);
      let api = `${process.env.WEBSERVER}/admin/uploadImage`;
      this.$http
        .post(api, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.data.success) {
              console.log("change");
              vm.product.imageUrl = `${process.env.WEBSERVER}/images/${New_file_Name}`;
          }
        });
    },
  },
};
</script>