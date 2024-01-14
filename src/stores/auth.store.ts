import { ref, computed } from "vue";
import { defineStore } from "pinia";
import AuthService from "@/services/auth.service";
import axios from "axios";
import router from "@/router";
import UserService from "@/services/user.service";

export const useAuthStore = defineStore("auth", {
    state: () => ({ 
        isLogged: false,
        token: "", 
        user: {}
    }),
    getters: {
    //   doubleCount: (state) => state.count * 2,
    },
    actions: {
        async init() {
            console.log("hello1");
            this.token = localStorage.getItem("authToken") ?? "";
            if (this.token) {
                axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;
                this.user = await UserService.getCurrentUser();
            }
        },

        login(email:string, password:string) {
            return AuthService.login(email, password)
                .then((response) => {
                    localStorage.setItem("authToken", response.data.token);
                    router.push("/");
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        
        logout() {
            localStorage.removeItem("authToken");
            router.push("/");
        }
    },
});
