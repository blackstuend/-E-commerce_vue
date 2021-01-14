<template>
    <div>
        <Modal></Modal>
        <Alert></Alert>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <div class="main open">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
import Navbar from "./dashboard/navbar"
import Sidebar from "./dashboard/sidebar"
import Alert from "./alert";
import Modal from "./dashboard/modal"
export default {
  name: "HelloWorld",
  data() {
    return {
        
    };
  },
  computed:{
  },
  created(){
    let token = window.localStorage.getItem('token');
    this.$http.defaults.headers.common.Authorization = token;
  },
  mounted() {
    $("body").removeClass("bg-info");
  },
    methods:{
        logout(){
            let vm = this;
            let api =  `${process.env.WEBSERVER}/admin/logout`
            console.log(api)
            vm.$http.get(api).then((res)=>{
                console.log(res);
                if(res.data.success)
                {
                    localStorage.setItem('token', "not login");
                    console.log("not login");
                    vm.$router.push("/login");
                }
                else
                    console.log("server error");
            })
        }
    },
    components:{
        Navbar,
        Sidebar,
        Alert,
        Modal,
    },
};
</script>

<style lang="scss" scoped>
    .main{
        transition: all 1s;
        max-width: 100%; 
        background-color: #f9fafb;
        height: 100vh;
    }
    .main.open{
        transform: translateX(280px);
        max-width: calc(100% - 280px);  
    }
    @media (max-width:767px){
        .main{
            transform: translateX(0);
            max-width: 100%;  
        }
    }
</style>