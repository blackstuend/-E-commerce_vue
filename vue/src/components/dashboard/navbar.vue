<template>
    <div>
        <div class="nav open" >
            <div class="nav-bar" >
                <i class="fas fa-bars"></i>
            </div>
            <div class="nav-bar" >
                <i class="fas fa-search"></i>
            </div>
            <div class="nav-admin ml-auto">
                <img src="https://picsum.photos/200/300?grayscale" alt="" class="mr-2">
                Admin
            </div>
        </div>
    </div>
</template>

<script>
    import $ from "jquery";
    export default {
        mounted(){
            $('.nav-bar').click(function(){
                $(".sidebar").toggleClass("open");
                $(".nav").toggleClass("open");
                $(".main").toggleClass("open");
            })
        }
    }
</script>

<style lang="scss" scoped>
    $border-color:rgba(0,0,0,.0625);
    .nav{
        width: 100%;
        padding:1.4em;
        display: flex;
        transform: translateX(0px);
        border-bottom: 1px $border-color solid;
        transition: all 1s;
        max-width: 100%;
    }
    .nav.open{
        transform: translateX(280px);
        width: calc(100% - 280px);  
    }
    .nav-admin{
        display:flex;
        img{
            border-radius: 15px;
            width: 30px;
            height: 30px;
            vertical-align: center;
        }
    }
    .nav-bar{
        color:#313435;
        cursor: pointer;
        margin-right: 30px;
        i{
            font-weight: 100;
        }
    }
    @media (max-width:767px){
        .nav{
            transform: translateX(0px);
        }
    }
</style>