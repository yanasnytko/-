import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginViewVue from "@/views/LoginView.vue";

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
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/AboutView.vue"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/login",
            name: "login",
            component: LoginViewVue
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!localStorage.getItem("authToken")) {
            next({ name: "login" });
        } else {
            next(); // go to wherever I'm going
        }
    } else {
        if (to.matched.some((record) => record.name === "login") && localStorage.getItem("authToken")) {
            next({ name: "home" });
        } else {
        	next(); // does not require auth, make sure to always call next()!
        }
    }
});
export default router;
