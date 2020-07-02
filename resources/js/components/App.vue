<template>
    <div>
        <main-menu></main-menu>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import MainMenu from "./MainMenu.vue";
export default {
    components: {
        MainMenu
    }
};
</script>
