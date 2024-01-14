import axios from "axios";
import config from "../config/config.json";

export default class UserService {
    /** 
     * Service to retrieve the CurrentUser
     * @returns Current User
     */
    static getCurrentUser = async ():Promise<User> => {
        const result = await axios.get(`${config.API_URL}/getCurrentUser`);
        const user = JSON.parse(result.data.user);

        const currentUser: User = {
            id: user.id || null,
            email: user.email || null,
            roles: user.roles || [],
            password: user.password || null,
            addressStreet: user.addressStreet || null,
            addressNumber: user.addressNumber || null,
            creationDate: user.creationDate ? new Date(user.creationDate) : null,
            tryCount: user.tryCount || 0,
            enabled: user.enabled || true,
            confirmed: user.confirmed || false,
            postalCode: user.postalCode || null,
            isVerified: user.isVerified || false,
        };
        console.log(currentUser);
        return currentUser;
    };
}