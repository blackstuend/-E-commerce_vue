<template>
  <div>
    <div class="sidebar open">
      <router-link class="sidebar-brand text-white" to="/dashboard/">
        <img src="https://picsum.photos/seed/picsum/200/300" alt="" />Blackfloat
      </router-link>
      <div class="sidebar-main">
        <div class="sidebar-group">
          <div class="sidebar-item" id="product_btn">
            <span class="sidebar-item-icon"
              ><i class="fab fa-font-awesome-alt fa-2x"></i
            ></span>
            <span class="sidebar-item-text">Product</span>
            <span class="sidebar-item-icon ml-auto"
              ><i class="fa fa-arrow-down-icon" aria-hidden="true" id="product_icon"></i
            ></span>
          </div>
          <div class="sidebar-child-group" id="product_item">
            <router-link class="sidebar-item-child" to="/dashboard/new_product">
              <i class="fas fa-plus"></i>Add Product
            </router-link>
            <router-link class="sidebar-item-child" to="/dashboard">
              <i class="fas fa-plus"></i>List Product
            </router-link>
          </div>
        </div>
        <div class="sidebar-group">
          <div class="sidebar-item" id="order_btn">
            <span class="sidebar-item-icon"
              ><i class="fab fa-font-awesome-alt fa-2x"></i
            ></span>
            <span class="sidebar-item-text">Order</span>
            <span class="sidebar-item-icon ml-auto"
              ><i class="fa fa-arrow-down-icon" aria-hidden="true" id="order_icon"></i
            ></span>
          </div>
          <div class="sidebar-child-group" id="order_item">
            <router-link class="sidebar-item-child" to="/dashboard/order">
              <i class="fas fa-plus"></i>List Order
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "sidebar",
  mounted() {
    $("#product_btn").click(function (e) {
      $("#product_item").slideToggle(500);
      $("#product_icon").toggleClass("open");
    });
    $("#order_btn").click(function (e) {
      $("#order_item").slideToggle(500);
      $("#order_icon").toggleClass("open");
    });
  },
};
</script>

<style lang="scss" scoped>
$border-color: rgba(0, 0, 0, 0.0625);
$bg-color: #0b132b;
.sidebar {
  color: white;
  width: 280px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  background-color: $bg-color;
  transform: translateX(-280px);
  flex-direction: column;
  border-right: 1px solid $border-color;
  transition: all 1s;
}
.sidebar.open {
  transform: translateX(0px);
}
.sidebar-brand {
  font-weight: 700;
  font-size: 20px;
  padding: 1em 2em;
  border-bottom: 1px solid $border-color;
  height: 75.8px;
  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    vertical-align: center;
    margin-right: 20px;
  }
}
.sidebar-main {
  display: flex;
  flex-direction: column;
}
.sidebar-item {
  color: #72777a;
  cursor: pointer;
  display: flex;
  color: white;
  padding: 0.5em 2em;
  &:hover {
    background-color: black;
    text-decoration: none;
  }
}
.sidebar-item-child {
  padding: 1em 2em;
  display: flex;
  align-items: center;
  color:white;
  cursor: pointer;
  i {
    margin-right: 2em;
    transition: all 0.3s;
  }
  &:hover {
    text-decoration: none;
    i {
      transform: translateX(-0.5em);
    }
  }
}

.sidebar-child-group {
  display: none;
  &.open {
    display: block;
  }
}
.sidebar-item-icon {
  margin-right: 1em;
  align-self: center;
}
.sidebar-item-text {
  align-self: center;
}
.fa-arrow-down-icon {
  &::before {
    content: "\f107";
  }
  &.open::before {
    content: "\f106";
  }
}
@media(max-width: 767px){
  .sidebar{
    position: fixed;
  }
}
</style>