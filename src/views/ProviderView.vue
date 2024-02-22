<template>
    <div v-if="!failed">
        <h2>{{ provider.providerName }}</h2>
        <p>{{ provider.email }}</p>
    </div>
    <div v-else>
        <!-- <Error404Component name="provider" /> -->
    </div>
</template>

<script lang="ts">
// import Error404Component from "@/components/Error404Component.vue";
import ProviderService from "@/services/provider.service";

export default {
    data() {
        return {
            provider: {} as Provider,
            failed: 0
        };
    },
    methods: {},
    mounted() {
        const id = this.$route.params.id as unknown as number;
        ProviderService.getProvider(id).then((provider) => {
            console.log(provider);
            this.provider = provider;
        }).catch((error) => {
            this.failed = 1;
        });
    },
    // components: { Error404Component }
};
</script> 