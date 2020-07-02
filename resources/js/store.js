import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        current_product: null,
        current_variation: null
    },
    getters: {},
    mutations: {
        current_product(state, data) {
            state.current_product = data;
        },
        current_variation(state, data) {
            state.current_variation = data;
        }
    },
    actions: {
        productGet(context, params) {
            context.commit("current_product", null);
            axios.post("/api/product/get", params).then(response => {
                context.commit("current_product", response.data);
            });
        }
    }
});
