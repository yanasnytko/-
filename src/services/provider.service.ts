import axios from "axios";
import config from "../config/config.json";

export default class ProviderService {
    static getAllProviders = async ():Promise<Provider[]> => {
        const result = await axios.get(`${config.API_URL}/provider/getAllProviders`);
        console.log(result);
        const providers = result.data.providers;

        return providers;
    };

    static getProvider = async (id: number):Promise<Provider> => {
        const result = await axios.get(`${config.API_URL}/provider/getProvider/${id}`);
        console.log(result);
        const provider = result.data;
        return provider;
    };
}