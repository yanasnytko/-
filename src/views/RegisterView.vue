<!-- RegisterView.vue -->

<template>
    <div class="register-container">
        <div v-if="step === 0" id="step-0">
            <form @submit.prevent="register">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required />

                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required />

                <label for="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" v-model="confirmPassword" required />

                <!-- New fields for registration -->
                <label for="addressStreet">Street Address:</label>
                <input type="text" id="addressStreet" v-model="addressStreet" />

                <label for="addressNumber">Address Number:</label>
                <input type="text" id="addressNumber" v-model="addressNumber" />

                <label for="type">Type:</label>
                <input type="radio" name="type" value="customer" id="customer" v-model="type" >
                <input type="radio" name="type" value="provider" id="provider" v-model="type">

                <!-- Add any other fields you added to the User entity -->

                <a @click="step++; console.log(type)">Continue</a>
                
            </form>
        </div>
        <div v-else-if="step === 1 && type === 'provider'" id="step-1">
            <form @submit.prevent="register">
                <label for="email">provider:</label>
                <input type="email" id="email" v-model="email" required />

                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required />

                <label for="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" v-model="confirmPassword" required />

                <!-- New fields for registration -->
                <label for="addressStreet">Street Address:</label>
                <input type="text" id="addressStreet" v-model="addressStreet" />

                <label for="addressNumber">Address Number:</label>
                <input type="text" id="addressNumber" v-model="addressNumber" />

                <!-- Add any other fields you added to the User entity -->

                <a @click="step++">Continue</a>
            </form>
        </div>
        <div v-else-if="step === 1 && type === 'customer'" id="step-1">
            <form @submit.prevent="register">
                <label for="email">customer:</label>
                <input type="email" id="email" v-model="email" required />

                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required />

                <label for="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" v-model="confirmPassword" required />

                <!-- New fields for registration -->
                <label for="addressStreet">Street Address:</label>
                <input type="text" id="addressStreet" v-model="addressStreet" />

                <label for="addressNumber">Address Number:</label>
                <input type="text" id="addressNumber" v-model="addressNumber" />

                <!-- Add any other fields you added to the User entity -->

                <a @click="step++">Continue</a>
            </form>
        </div>
        
    </div>
</template>

<script lang="ts">
import { useAuthStore } from "@/stores/auth.store";

export default {
    data() {
        return {
            email: "",
            password: "",
            confirmPassword: "",
            addressStreet: "",
            addressNumber: "",
            type: "",
            step: 0,
        };
    },
    methods: {
        register() {
            const authStore = useAuthStore();
            
            // Perform registration logic, you may want to add validation and error handling
            if (this.password === this.confirmPassword) {
                authStore.register({
                    email: this.email,
                    password: this.password,
                    addressStreet: this.addressStreet,
                    addressNumber: this.addressNumber,
                    // Add any other fields you added to the User entity
                });
            } else {
                // Handle password mismatch error
                console.error("Password and Confirm Password must match");
            }
        }
    }
};
</script>

<style scoped>
.register-container {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
/* Add or modify styles as needed for the registration form */
</style>
