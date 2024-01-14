<!-- LoginView.vue -->

<template>
    <div class="login-container">
        <form @submit.prevent="login">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required />

            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required />

            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script lang="ts">
import { useAuthStore } from "@/stores/auth.store";

export default {
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        login() {
            const authStore = useAuthStore();
            authStore.login(this.email, this.password);
        }
    }
};
</script>

<style scoped>
.login-container {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
label {
    display: block;
    margin-bottom: 5px;
}
input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
}
button {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
button:hover {
    background-color: #45a049;
}
</style>
