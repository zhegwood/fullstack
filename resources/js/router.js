import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/the-sofa/:product_id",
            name: "the_sofa",
            component: () => import("./components/TheSofa.vue")
        },
        {
            path: "/reviews",
            name: "reviews",
            component: () => import("./components/Reviews.vue")
        },
        {
            path: "/about-us",
            name: "about_us",
            component: () => import("./components/AboutUs.vue")
        },
        {
            path: "/showroom",
            name: "showroom",
            component: () => import("./components/Showroom.vue")
        },
        {
            path: "/swatches",
            name: "swatches",
            component: () => import("./components/Swatches.vue")
        },
        {
            path: "*",
            redirect: to => {
                return {
                    path: "/the-sofa/1",
                    query: {
                        color: "Amber"
                    }
                };
            }
        }
    ]
});
