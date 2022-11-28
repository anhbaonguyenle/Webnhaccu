const knex = require('../database/knex');
class ProductService {
    #getProduct(payload) {
        const product = {...payload };
        const productProperties = [
            "maloai", "tennc", "gia", "soluong", "url", "mota"
        ];
        // Remove non-contact properties
        Object.keys(product).forEach(function(key) {
            if (productProperties.indexOf(key) == -1) {
                delete product[key];
            }
        });
        return product;
    }
    async deleteAll() {
        return await this.products.del();
    }

    async delete(id) {
        return await this.products.where('id', id).del();
    }


    async update(id, payload) {
        const update = this.#getProduct(payload);
        return await this.products.where('id', id).update(update);
    }

    async findById(id) {
        return await this.products.where('id', id).select('*').first();
    }

    async all() {
        return await this.products.select('*');
    }
    async findByName(name) {
        return await this.products
            .where('tennc', 'like', `%${name}`)
            .select('*');
    }

    constructor() {
        this.products = knex('nhaccu');
    }



   
    async create(payload) {
            const product = this.#getProduct(payload);
            const [id] = await this.products.insert(product);
            return { id, ...product };
        }
        // Define methods for accessing the database
}
module.exports = ProductService;