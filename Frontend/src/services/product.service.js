import axios from 'axios';
const url =
    import.meta.env.VITE_APP_API_URL;

class ProductService {
    constructor() {
        this.baseUrl = `${url}/api/products`;
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
    async create(product) {
        return (await this.api.post(this.baseUrl, product)).data;
    }
    async deleteMany() {
        return (await this.api.delete(this.baseUrl)).data;
    }
    async get(id) {
        return (await this.api.get(`${this.baseUrl}/${id}`)).data;
    }
    async update(id, product) {
        return (await this.api.put(`${this.baseUrl}/${id}`, product)).data;
    }
    async delete(id) {
        return (await this.api.delete(`${this.baseUrl}/${id}`)).data;
    }
}
export const productService = new ProductService();