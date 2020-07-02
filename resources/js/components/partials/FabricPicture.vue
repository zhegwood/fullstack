<template>
    <div class="column has-text-centered">
        <div
            class="picture-frame"
            :class="{ 'is-active': is_active }"
            @click="redirect"
        >
            <div class="picture-container">
                <img :src="variation.img_url" :alt="variation.name" />
            </div>
            <div class="picture-text">
                {{ variation.name }}
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    props: {
        variation: {
            type: Object,
            required: true
        }
    },
    computed: {
        is_active() {
            return this.variation.name === this.current_variation.name;
        },
        ...mapState(["current_product", "current_variation"])
    },
    methods: {
        redirect() {
            if (this.variation.name === this.current_variation.name) {
                return;
            }
            this.$router.push({
                path: "/the-sofa/" + this.current_product.id,
                query: {
                    color: this.variation.name
                }
            });
        }
    }
};
</script>
