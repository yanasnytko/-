<template>
    <div>
        <h2 :key="provider.id" v-for="provider in providers">
            <RouterLink :to="'/providers/' + provider.id">{{ provider.providerName }}</RouterLink>
        </h2>
    </div>
</template>

<script lang="ts">
import ProviderService from "@/services/provider.service";

export default {
    data() {
        return {
            providers: [] as Provider[]
        };
    },
    methods: {
        
    },
    mounted() {
        ProviderService.getAllProviders().then((providers) => {
            console.log(providers);
            this.providers = providers;
        });
    },
};
</script>