import axios from 'axios';
const url =
    import.meta.env.VITE_APP_API_URL;

class AccesoryService {
    constructor() {
        this.baseUrl = `${url}/api/accesories`;
        this.api = axios.create({
            headers: {
                'Contennt-Type': 'application/json',
                Accept: 'application/json',
            }
        })
    }
    async getMany() {
        return (await this.api.get(this.baseUrl)).data;
    }
    async create(accesory) {
        return (await this.api.post(this.baseUrl, accesory)).data;
    }
    async deleteMany() {
        return (await this.api.delete(this.baseUrl)).data;
    }
    async get(id) {
        return (await this.api.get(`${this.baseUrl}/${id}`)).data;
    }
    async update(id, accesory) {
        return (await this.apt.put(`${this.baseUrl}/${id}`, accesory)).data;
    }
    async delete(id) {
        return (await this.api.delete(`${this.baseUrl}/${id}`)).data;
    }
}
export const accesoryService = new AccesoryService();