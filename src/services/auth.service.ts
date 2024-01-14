import axios from "axios";
import config from "../config/config.json";

export default class AuthService {
    /** 
     * Service to auth
     * @param {string} email 
     * @param {string} password 
     * @returns JWT Token
     */
    static login = async (email:string, password:string) => {
        return axios.post(`${config.API_URL}/login_check`, {
            username: email,
            password: password
        });
    };
}