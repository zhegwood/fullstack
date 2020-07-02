<template>
    <div v-if="current_variation !== null" class="product-image-container">
        <img :src="current_variation.img_url" :alt="current_variation.name" />
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState(["current_variation"])
    }
};
</script>
