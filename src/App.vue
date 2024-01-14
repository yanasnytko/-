<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { useAuthStore } from "./stores/auth.store";
import { mapState } from "pinia";

export default {
    components: {
        "Hello": HelloWorld,
        "RouterLink": RouterLink,
        "RouterView": RouterView,
    },
    methods: {
        logout() {
            useAuthStore().logout();
        }
    },
    mounted() {
        useAuthStore().init();
    },
    computed: {
        ...mapState(useAuthStore, {
            isLogged: (store) => store.isLogged,
        }),
    },
};

</script>

<template>
	<header>
		<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

		<div class="wrapper">
		<Hello msg="You did it!" />

		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink v-if="isLogged" to="/about">About</RouterLink>
			<a v-if="isLogged" href="#" @click="logout()">Logout</a>
		</nav>
		</div>
	</header>

	<RouterView />
</template>