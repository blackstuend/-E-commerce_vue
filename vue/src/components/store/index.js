import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoading: false,
        products: [],
        delProduct: {},
        tempProduct: {},
        cart: [],
    },
    actions: {
        UpdateLoading(context, payload) {
            context.commit("LOADING", status);
        },
        GetProduct(context) {
            let api = `${process.env.WEBSERVER}/admin/getProduct`;
            context.commit("LOADING", true);
            Vue.axios.get(api).then((res) => {
                context.commit("LOADING", false);
                context.commit("UPDATE_PRODUCT", res.data);
            })
        },
        uploadDelProduct(context, payload) {
            context.commit("DELPRODUCT", payload);
        },
        addCart(context, payload) {
            context.commit("ADDCART", payload);
        },
        getCart(context) {
            context.commit("GETCART");
        },
        ClearCart(context) {
            context.commit("CLEARCART");
        }
    },
    mutations: {
        LOADING(state, payload) {
            state.isLoading = payload;
        },
        UPDATE_PRODUCT(state, payload) {
            state.products = payload;
        },
        DELPRODUCT(state, payload) {
            state.delProduct = payload;
        },
        CLEARCART(state) {
            localStorage.clear();
        },
        ADDCART(state, payload) {
            let find_index = undefined;
            if (state.cart.length) {    
                for(let i = 0;i<state.cart.length;i++){
                    if(state.cart[i]._id == payload._id){
                        find_index = i;
                        break;
                    }
                }
            }
            console.log("index:",find_index);
            if (find_index != undefined)
            {
                state.cart[find_index].qty += payload.qty;
            }
            else
                state.cart.push(payload);
            localStorage.setItem("product", JSON.stringify(state.cart));
        },
        GETCART(state) {
            let data = JSON.parse(localStorage.getItem("product"));
            if (data == null)
                data = [];
            state.cart = data;
        }
    }
})