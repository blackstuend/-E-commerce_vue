<template>
  <div>
    <Navbar></Navbar>
    <div class="main">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/home/navbar';
import Footer from '@/components/home/footer';
export default {
  name: 'index',
  data () {
    return {
      
    }
  },
  components:{
    Navbar,
    Footer,
  }
}
</script>

<style scoped>

</style>
