<template>
    <div v-if="!failed">
        <h2>{{ service.serviceCategoryName }}</h2>
        <p>{{ service.description }}</p>
    </div>
    <div v-else>
        <Error404Component name="service" />
    </div>
</template>

<script lang="ts">
import Error404Component from "@/components/Error404Component.vue";
import ServiceCategoryService from "@/services/serviceCategory.service";

export default {
    data() {
        return {
            service: {} as ServiceCategory,
            failed: 0
        };
    },
    methods: {},
    mounted() {
        const id = this.$route.params.id as unknown as number;
        ServiceCategoryService.getService(id).then((service) => {
            this.service = service;
        }).catch((error) => {
            this.failed = 1;
        });
    },
    components: { Error404Component }
};
</script> 