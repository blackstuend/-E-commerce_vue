<template>
  <div>
    <div class="navbar">
      <div
        class="container d-flex align-items-center justify-content-between navbar-flex"
      >
        <router-link class="navbar-brand" to="/">
          <img :src="logo_src" alt="" />
        </router-link>
        <div class="navbar-group">
          <router-link class="navbar-item" to="/story">
            <span>品牌故事</span>
          </router-link>
          <router-link class="navbar-item" to="/product">
            <span>線上商城</span>
          </router-link>
          <router-link class="navbar-item" to="/position">
            <span>聯絡我們</span>
          </router-link>
          <router-link class="navbar-item navbar-icon" to="/cart">
            <i class="fas fa-shopping-cart"></i>
            <span class="badge badge-black" v-if="cart.length != 0">{{cart_count}}</span>
          </router-link>
          <a class="navbar-item navbar-icon" href="#">
            <i class="fas fa-search"></i>
          </a>
        </div>
        <a class="navbar-bar" href="#" @click="open_side()">
          <i class="fas fa-bars fa-2x"></i>
        </a>
      </div>
    </div>
    <div class="navbar-body" :class="{ open: open }">
      <div class="navbar-side">
        <router-link class="navbar-side-brand text-center" to="/">
          <img :src="logo_src" alt="" />
        </router-link>
        <div class="navbar-side-cancel">&#215;</div>
        <router-link
          to="/story"
          class="navbar-side-item"
        >
          品牌故事
        </router-link>
        <router-link to="/product" class="navbar-side-item">
          線上商城
        </router-link>
        <router-link to="/position" class="navbar-side-item">
          聯絡我們
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { mapState } from "vuex";
export default {
  data() {
    return {
      open: false,
      logo_src:"",
    };
  },
  computed: {
    ...mapState(["cart"]),
    cart_count(){
      let data = 0;
      this.cart.forEach(function(item){
        data+=item.qty;
      })
      return data;
    },
  },
  methods: {
    open_side() {
      this.open = !this.open;
      setTimeout(function () {
        $(".navbar-side").toggleClass("open");
      }, 100);
    },
    cancel_side() {
      let vm = this;
      $(".navbar-side").toggleClass("open");
      setTimeout(function () {
        vm.open = !vm.open;
      }, 1000);
    },
  },
  created(){
    this.logo_src = `${process.env.WEBSERVER}/images/logo.jpg`;
  },
  mounted() {
    
    let vm = this;
    $(".navbar-body").click(function () {
      vm.cancel_side();
    });
    $(".navbar-side").click(function (event) {
      event.stopPropagation();
    });
    $(".navbar-side-cancel").click(function(){
        vm.cancel_side();
    })
    this.$store.dispatch("getCart");
  },
};
</script>
<style lang="scss" scoped>
$theme-color: #ff674f;
$text-color: #565656;
.navbar {
  color: #fff;
  background-color: #000;
  .navbar-item {
    color: $text-color;
    &:hover {
      text-decoration: none;
    }
  }
}
.navbar-bar {
  display: none;
  color: #fff;
}
.navbar-group {
  display: flex;
  margin-left: 50px;
}
.navbar-brand {
  img {
    width: auto;
    height: 80px;
  }
}
.navbar-item {
  padding: 0px 20px;
  border-right: 1px solid $text-color;
  i {
    color: #fff;
  }
  span {
    color: #fff;
    padding: 5px 0;
    &:hover {
      border-bottom: 1px solid $theme-color;
    }
  }
}
.navbar-item:nth-child(6) {
  border-right: 0;
}
.navbar-body {
  display: none;
}
@media (max-width: 1000px) {
  .navbar-item {
    display: none;
  }
  .navbar-bar {
    display: block;
    order: 1;
  }
  .navbar-icon {
    display: block;
  }
  .navbar-group {
    order: 10;
  }
  .navbar-brand {
    order: 2;
    transform: translateX(27px);
  }
  .navbar-flex {
    justify-content: space-between !important;
  }
  .container {
    margin: 0;
    max-width: 1000px;
  }
  .navbar-body {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
    display: none;
    transition: all 0.5s;
    &.open {
      display: block;
    }
  }
  .navbar-side {
    display: flex;
    flex-direction: column;
    background-color: #000;
    width: 280px;
    position: fixed;
    top: 0;
    bottom: 0;
    transform: translateX(-280px);
    transition: all 2s;
    &.open {
      transform: translateX(0px);
    }
    z-index: 100;
  }
  .navbar-side-item {
    z-index: 1;
    text-align: center;
    color: #fff;
    padding: 1em 0;
    border-bottom: 1px #fff dashed;
    &:hover {
      text-decoration: none;
    }
  }
  .navbar-side-cancel {
    position: fixed;
    top: 15px;
    right: 20px;
    color: #fff;
    font-size: 40px;
    cursor: pointer;
  }
}
</style>