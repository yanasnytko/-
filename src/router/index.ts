import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginViewVue from "@/views/LoginView.vue";
import RegisterViewVue from "@/views/RegisterView.vue";
import ServiceCategoryViewVue from "@/views/ServiceCategoryView.vue";
import { useAuthStore } from "@/stores/auth.store";
import AllServiceCategoryVue from "@/components/AllServiceCategory.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/about",
            name: "about",
            component: () => import("../views/AboutView.vue"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/login",
            name: "login",
            component: LoginViewVue
        },
        {
            path: "/register",
            name: "register",
            component: RegisterViewVue
        },
        {
            path: "/services_category/",
            name: "services",
            component: AllServiceCategoryVue
        },
        {
            path: "/services_category/:id",
            name: "service",
            component: ServiceCategoryViewVue
        }
    ]
});

router.beforeEach((to, from, next) => {
    const authToken = localStorage.getItem("authToken") ?? "";

    const isTokenExpired = (authToken: string) => { 
        try {
            const expiry = (JSON.parse(atob(authToken.split(".")[1]))).exp;
            return (Math.floor((new Date()).getTime() / 1000)) >= expiry;
        } catch (error) {
            return true;
        }
        
    };
    // const isTokenExpired = Date.now() >= (JSON.parse(atob(authToken.split(".")[1] ?? "{}"))).exp * 1000;

    if (to.matched.some((record) => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (authToken !== "" && isTokenExpired(authToken)) {
            useAuthStore().logout();
        }
        if (!authToken) {
            next({ name: "login" });
        } else {
            next(); // go to wherever I'm going
        }
    } else {
        if (to.matched.some((record) => record.name === "login") && authToken) {
            next({ name: "home" });
        } else {
        	next(); // does not require auth, make sure to always call next()!
        }
    }
});
export default router;
