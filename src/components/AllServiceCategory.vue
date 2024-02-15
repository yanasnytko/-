<template>
    <div>
        <h2 :key="service.id" v-for="service in services">
            <RouterLink :to="'/services_category/' + service.id">{{ service.serviceCategoryName }}</RouterLink>
        </h2>
    </div>
</template>

<script lang="ts">
import ServiceCategoryService from "@/services/serviceCategory.service";

export default {
    data() {
        return {
            services: [] as ServiceCategory[]
        };
    },
    methods: {
        
    },
    mounted() {
        ServiceCategoryService.getAllServices().then((services) => {
            console.log(services);
            this.services = services;
        });
    },
};
</script>