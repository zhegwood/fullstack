<template>
    <div v-if="current_product !== null">
        <h3 class="title is-6 choose-fabric">1. Choose a Fabric</h3>
        <p class="mb-5">Choose your choice from fabrics to leather.</p>
        <p><strong>Fabric Choices</strong></p>
        <div class="columns is-mobile mt-1">
            <fabric-picture
                v-for="variation in current_product.variations"
                :key="variation.id"
                :variation="variation"
            ></fabric-picture>
        </div>
    </div>
</template>
<script>
import FabricPicture from "./FabricPicture";
import { mapState } from "vuex";
export default {
    components: {
        FabricPicture
    },
    computed: {
        ...mapState(["current_product"])
    }
};
</script>
