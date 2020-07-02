import router from "./router";
import store from "./store";
require("./axios");

window.Vue = require("vue");

require("./filters");

const app = new Vue({
    el: "#app",
    store,
    router,
    components: {
        App: () => import("./components/App.vue")
    }
});
