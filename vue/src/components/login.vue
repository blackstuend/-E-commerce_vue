<template>
  <div>
    <div class="login">
      <h1 class="text-center text-white mb-3">Admin 登入</h1>
      <div class="layout-card p-5 bg-white">
          <div class="alert alert-danger text-center" v-if="login_fail">登入失敗</div>
        <form @submit.prevent="login">
          <input
            type="text"
            placeholder="username"
            class="form-control mb-3"
            name="account"
            v-model="user.username"
          />
          <input
            type="password"
            placeholder="password"
            class="form-control mb-3"
            name="password"
            v-model="user.password"
            @keyup.enter="login"
          />
          <button class="btn btn-info w-100" type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "HelloWorld",
  data() {
    return {
      user:{
          username:"",
          password:"",
      },
      login_fail:false,
    };
  },
  methods:{
      login(){
          let vm = this;
          let api =  `${process.env.WEBSERVER}/admin/login`
          vm.$http.post(api,vm.user).then((res)=>{
              if(res.data.success)
              {
                vm.login_fail = false;
                localStorage.setItem('token', res.data.token);
                this.$http.defaults.headers.common.Authorization = res.data.token;
                vm.$router.push("/dashboard");
              }
              else
              vm.login_fail = true;
          })
      }
  },
  created(){
    
  },
  mounted() {
    $("body").addClass("bg-info");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  margin: 0 auto;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
