<template>
  <div>
      <div class="alert alert-danger alert-fixed" v-if="message">{{ message }} <a class="fas fa-times" href='#' @click.prevent="delmessage"></a></div>
  </div>
</template>

<script>
export default {
  name: "alert",
  data(){
      return {
          message:""
      }
  },
  methods: {
      delmessage(){
          this.message = "";

      }
  },
  created() {
    var vm = this;
    this.$bus.$on("alert:message", msg => {
      vm.message = msg;
      setTimeout(vm.delmessage,3000);
    });
  },
  beforeDestroy: function() {
    this.$bus.$off("alert:message");
  }
};
</script>
<style lang="scss" scoped>
    .alert-fixed{
        position: fixed;
        right:40px;
        top:80px;
        z-index: 1;
        a{
            color:black;
        }
        a:hover{
            text-decoration: none;
        }
    }
</style>