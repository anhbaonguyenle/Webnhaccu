const knex = require('../database/knex');
class AccesoryService {
    #getAccesory(payload) {
        const accesory = {...payload };
        const accesoryProperties = [
            "tenpk", "giapk", "soluong"
        ];
        // Remove non-contact properties
        Object.keys(accesory).forEach(function(key) {
            if (accesoryProperties.indexOf(key) == -1) {
                delete accesory[key];
            }
        });
        return accesory;
    }
    async deleteAll() {
        return await this.accesories.del();
    }

    async delete(id) {
        return await this.accesories.where('id', id).del();
    }


    async update(id, payload) {
        const update = this.#getAccesory(payload);
        return await this.accesories.where('id', id).update(update);
    }

    async findById(id) {
        return await this.accesories.where('id', id).select('*').first();
    }

    async all() {
        return await this.accesories.select('*');
    }
    async findByName(name) {
        return await this.accesories
            .where('tenpk', 'like', `%${name}`)
            .select('*');
    }

    constructor() {
        this.accesories = knex('phukien');
    }



   
    async create(payload) {
            const accesory = this.#getAccesory(payload);
            const [id] = await this.accesories.insert(accesory);
            return { id, ...accesory };
        }
        // Define methods for accessing the database
}
module.exports = AccesoryService;