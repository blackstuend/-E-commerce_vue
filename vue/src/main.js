// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay';
import "bootstrap";
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
import store from "./components/store";
import VueCarousel from 'vue-carousel';
import VueNumberInput from '@chenfengyuan/vue-number-input';

Vue.use(VueNumberInput);


// Init plugin
Vue.component("Loading",Loading)
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.use(VueCarousel);
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})

router.beforeEach((to,from,next)=>{
  if(to.meta.requiresAuth){
    let api  = `${process.env.WEBSERVER}/admin/check_admin`;
    Vue.axios.get(api).then((res)=>{
      if(res.data.success){
        return next();
      }
      else{
        next({path:"/login"});
      }
    })
  }else
  next();
})