<template>
    <div v-if="current_variation" class="columns mt-4 mb-4">
        <div class="column with-border-right">
            <div class="has-text-centered">
                <span class="big-text">Pay Now</span>
                <h2 class="title is-2 pricing-text nowrap">
                    {{ (current_variation.full_price - 200) | currency }}
                </h2>
                <span class="big-text strikethrough">
                    {{ current_variation.full_price | currency }}
                </span>
                <br />
                <span class="small-text">$200 OFF with code</span>
            </div>
        </div>
        <div class="column">
            <div class="pricing-container has-text-centered">
                <span class="big-text nowrap">Pay as low as</span>
                <h2 class="title is-2 pricing-text nowrap">
                    {{ current_variation.monthly_price | currency
                    }}<small>/month</small>
                </h2>
                <span class="big-text">
                    with Klarna
                </span>
                <br />
                <a
                    href="javascript: void(0);"
                    class="gray-link small-text"
                    title="learn more"
                >
                    Learn More
                </a>
            </div>
        </div>
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
