<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item is-hidden-desktop">
                <img
                    src="https://helixsleep-code-challenge.s3.amazonaws.com/logo.svg"
                />
            </router-link>
            <a
                @click="is_active = !is_active"
                role="button"
                class="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="MainNav"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div
            id="MainNav"
            class="navbar-menu"
            :class="{ 'is-active': is_active }"
        >
            <div class="navbar-start">
                <router-link
                    to="/the-sofa/1"
                    class="navbar-item"
                    :class="{ current: route_name === 'the_sofa' }"
                >
                    <span class="menu-text">The Sofa</span>
                </router-link>

                <router-link
                    to="/reviews"
                    class="navbar-item"
                    :class="{ current: route_name === 'reviews' }"
                >
                    <span class="menu-text">Reviews</span>
                </router-link>

                <router-link
                    to="/about-us"
                    class="navbar-item"
                    :class="{ current: route_name === 'about_us' }"
                >
                    <span class="menu-text">About Us</span>
                </router-link>
            </div>
            <router-link to="/" class="navbar-item is-hidden-touch">
                <img
                    src="https://helixsleep-code-challenge.s3.amazonaws.com/logo.svg"
                />
            </router-link>

            <div class="navbar-end">
                <router-link
                    to="/showroom"
                    class="navbar-item"
                    :class="{ current: route_name === 'showroom' }"
                >
                    <span class="menu-text">Showroom</span>
                </router-link>
                <router-link
                    to="/swatches"
                    class="navbar-item"
                    :class="{ current: route_name === 'swatches' }"
                >
                    <span class="menu-text">Swatches</span>
                </router-link>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            is_active: false
        };
    },
    computed: {
        route_name() {
            return this.$route.name;
        }
    }
};
</script>
