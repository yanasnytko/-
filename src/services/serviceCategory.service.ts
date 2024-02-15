import axios from "axios";
import config from "../config/config.json";

export default class ServiceCategoryService {
    static getAllServices = async ():Promise<ServiceCategory[]> => {
        const result = await axios.get(`${config.API_URL}/service/getAllServices`);
        // console.log(result.data.services);
        const services = result.data.services;

        // const currentUser: User = {
        //     id: services.id || null,
        //     serviceCategoryName: services.serviceCategoryName || null,
        //     roles: services.roles || [],
        //     password: user.password || null,
        //     addressStreet: user.addressStreet || null,
        //     addressNumber: user.addressNumber || null,
        //     creationDate: user.creationDate ? new Date(user.creationDate) : null,
        //     tryCount: user.tryCount || 0,
        //     enabled: user.enabled || true,
        //     confirmed: user.confirmed || false,
        //     postalCode: user.postalCode || null,
        //     isVerified: user.isVerified || false,
        // };
        // console.log(currentUser);
        return services;
    };

    static getService = async (id: number):Promise<ServiceCategory> => {
        const result = await axios.get(`${config.API_URL}/service/getService/${id}`);
        const service = result.data.service;
        return service;
    };
}