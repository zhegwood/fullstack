(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{0:function(t,a,s){"use strict";function e(t,a,s,e,n,r,i,o){var c,l="function"==typeof t?t.options:t;if(a&&(l.render=a,l.staticRenderFns=s,l._compiled=!0),e&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):n&&(c=o?function(){n.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:n),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,a){return c.call(a),u(t,a)}}else{var v=l.beforeCreate;l.beforeCreate=v?[].concat(v,c):[c]}return{exports:t,options:l}}s.d(a,"a",(function(){return e}))},63:function(t,a,s){"use strict";s.r(a);var e={data:function(){return{is_active:!1}},computed:{route_name:function(){return this.$route.name}}},n=s(0),r={components:{MainMenu:Object(n.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"navbar-brand"},[s("router-link",{staticClass:"navbar-item is-hidden-desktop",attrs:{to:"/"}},[s("img",{attrs:{src:"https://helixsleep-code-challenge.s3.amazonaws.com/logo.svg"}})]),t._v(" "),s("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"MainNav"},on:{click:function(a){t.is_active=!t.is_active}}},[s("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{attrs:{"aria-hidden":"true"}})])],1),t._v(" "),s("div",{staticClass:"navbar-menu",class:{"is-active":t.is_active},attrs:{id:"MainNav"}},[s("div",{staticClass:"navbar-start"},[s("router-link",{staticClass:"navbar-item",class:{current:"the_sofa"===t.route_name},attrs:{to:"/the-sofa/1"}},[s("span",{staticClass:"menu-text"},[t._v("The Sofa")])]),t._v(" "),s("router-link",{staticClass:"navbar-item",class:{current:"reviews"===t.route_name},attrs:{to:"/reviews"}},[s("span",{staticClass:"menu-text"},[t._v("Reviews")])]),t._v(" "),s("router-link",{staticClass:"navbar-item",class:{current:"about_us"===t.route_name},attrs:{to:"/about-us"}},[s("span",{staticClass:"menu-text"},[t._v("About Us")])])],1),t._v(" "),s("router-link",{staticClass:"navbar-item is-hidden-touch",attrs:{to:"/"}},[s("img",{attrs:{src:"https://helixsleep-code-challenge.s3.amazonaws.com/logo.svg"}})]),t._v(" "),s("div",{staticClass:"navbar-end"},[s("router-link",{staticClass:"navbar-item",class:{current:"showroom"===t.route_name},attrs:{to:"/showroom"}},[s("span",{staticClass:"menu-text"},[t._v("Showroom")])]),t._v(" "),s("router-link",{staticClass:"navbar-item",class:{current:"swatches"===t.route_name},attrs:{to:"/swatches"}},[s("span",{staticClass:"menu-text"},[t._v("Swatches")])])],1)],1)])}),[],!1,null,null,null).exports}},i=Object(n.a)(r,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("main-menu"),this._v(" "),a("div",{staticClass:"container"},[a("router-view")],1)],1)}),[],!1,null,null,null);a.default=i.exports}}]);