import axios from 'axios';
const url =
    import.meta.env.VITE_APP_API_URL;

class AdminService {
    constructor() {
        this.baseUrl = `${url}/api/admins`;
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
    async create(admin) {
        return (await this.api.post(this.baseUrl, admin)).data;
    }
    async deleteMany() {
        return (await this.api.delete(this.baseUrl)).data;
    }
    async get(phone) {
        return (await this.api.get(`${this.baseUrl}/${phone}`)).data;
    }
    async update(phone, admin) {
        return (await this.apt.put(`${this.baseUrl}/${phone}`, admin)).data;
    }
    async delete(phone) {
        return (await this.api.delete(`${this.baseUrl}/${phone}`)).data;
    }
}
export const adminService = new AdminService();