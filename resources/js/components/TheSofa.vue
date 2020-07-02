<template>
    <div v-if="current_product" class="columns">
        <div class="column is-two-thirds">
            <secure-checkout></secure-checkout>
            <product-image></product-image>
            <image-roll></image-roll>
        </div>
        <div class="column is-one-third">
            <h1 class="title is-2 page-heading">
                {{ current_product.title }}
            </h1>
            <p>{{ current_product.description }}</p>
            <pricing></pricing>
            <button class="button is-fullwidth mb-1 add-to-cart-button">
                Add To Cart
            </button>
            <div class="save-for-later has-text-centered">
                <a href="javascript: void(0);" title="save for later">
                    Save Design for Later
                </a>
            </div>
            <hr class="divider" />
            <fabric-picker></fabric-picker>
        </div>
    </div>
</template>
<script>
import FabricPicker from "./partials/FabricPicker";
import ImageRoll from "./partials/ImageRoll";
import Pricing from "./partials/Pricing";
import ProductImage from "./partials/ProductImage";
import SecureCheckout from "./partials/SecureCheckout";
import { mapState } from "vuex";
export default {
    components: {
        FabricPicker,
        ImageRoll,
        Pricing,
        ProductImage,
        SecureCheckout
    },
    computed: {
        product_id() {
            return this.$route.params.product_id;
        },
        ...mapState(["current_product"])
    },
    watch: {
        current_product(new_val) {
            this.setCurrentVariation();
        },
        "$route.query.color": function(new_val, old_val) {
            this.setCurrentVariation();
        }
    },
    created() {
        this.$store.dispatch("productGet", { id: this.product_id });
    },
    methods: {
        setCurrentVariation() {
            if (this.current_product === null) {
                return;
            }

            if (!this.$route.query.color) {
                this.$store.commit(
                    "current_variation",
                    this.current_product.variations[0]
                );
                return;
            }

            let variation = this.current_product.variations.find(variation => {
                return variation.name === this.$route.query.color;
            });

            if (!variation) {
                //I would probably throw not found here, but I don't think it's within the scope of this exercise.
                this.$store.commit(
                    "current_variation",
                    this.current_product.variations[0]
                );
                return;
            }

            this.$store.commit("current_variation", variation);
        }
    }
};
</script>
