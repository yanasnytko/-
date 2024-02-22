<template>
    <div>
        <input type="text" v-model="searchTerm" placeholder="Rechercher une catégorie">
        <div v-if="!failed">
            <!-- <div v-for="category in filteredCategories" :key="category.id">
                <h2>{{ service.serviceCategoryName }}</h2>
                <p>{{ service.description }}</p>
            </div> -->
            <h2>{{ service.serviceCategoryName }}</h2>
            <p>{{ service.description }}</p>
        </div>
        <div v-else>
            <Error404Component name="service" />
        </div>
    </div>
    
</template>

<script lang="ts">
// import Error404Component from "@/components/Error404Component.vue";
import ServiceCategoryService from "@/services/serviceCategory.service";
// import { ServiceCategory } from "ser";

export default {
    data() {
        return {
            service: {} as ServiceCategory,
            failed: 0,
            searchTerm: ""
        };
    },
    methods: {
        // filterCategories() {
        //     return this.categories.filter(category => {
        //         return category.serviceCategoryName.toLowerCase().includes(this.searchTerm.toLowerCase());
        //     });
        // }
    },
    mounted() {
        const id = this.$route.params.id as unknown as number;
        ServiceCategoryService.getService(id).then((service) => {
            this.service = service;
        }).catch((error) => {
            this.failed = 1;
        });
    },
    computed: {
        // filteredCategories() {
        //     return this.filterCategories();
        // }
    }
    // components: { Error404Component }
};
</script> 