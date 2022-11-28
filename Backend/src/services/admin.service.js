const knex = require('../database/knex');
class AdminService {
    async deleteAll() {
        return await this.admins.del();
    }

    async delete(phone) {
        return await this.admins.where('sdt', phone).del();
    }

    async update(phone, payload) {
        const update = this.#getUpdate(payload);
        return await this.admins.where('sdt', phone).update(update);
    }

    // async updateAdminname(adminname, payload) {
    //     const update = this.#getAdminname(payload);
    //     return await this.admins.where('admin_name', adminname).update(update);
    // }

    async findByPhone(phone) {
        return await this.admins.where('sdt', phone).select('*').first();
    }

    async findByAdminName(adminname) {
        return await this.admin
            .where('admin_name', 'like', `%${adminname}`)
            .select('*');
    }
    async all() {
        return await this.products.select('*');
    }
   
    constructor() {
        this.products = knex('admin');
    }

    #getUpdate(payload) {
        const admin = {...payload };
        const adminProperties = [
            'pass', 'admin_name'
        ];
        // Remove non-contact properties
        Object.keys(admin).forEach(function(key) {
            if (adminProperties.indexOf(key) == -1) {
                delete admin[key];
            }
        });
        return admin;
    }

    // #getAdminname(payload) {
    //     const admin = {...payload };
    //     const adminProperties = [
    //         "admin_name"
    //     ];
    //     // Remove non-contact properties
    //     Object.keys(admin).forEach(function(key) {
    //         if (adminProperties.indexOf(key) == -1) {
    //             delete admin[key];
    //         }
    //     });
    //     return admin;
    // }

    #getAdmin(payload) {
        const admin = {...payload };
        const adminProperties = [
            "pass", "admin_name", "sdt"
        ];
        // Remove non-contact properties
        Object.keys(admin).forEach(function(key) {
            if (adminProperties.indexOf(key) == -1) {
                delete admin[key];
            }
        });
        return admin;
    }
    //Dang ky admin account
    async create(payload) {
            const admin = this.#getAdmin(payload);
            const [id] = await this.admins.insert(admin);
            return { id, ...admin };
        }
     //Dang nhap   
    async signIn(phone, password) {
            return await this.admins
                .select('sdt')
                .where('sdt', `${phone}`)
                .andWhere('pass', `${password}`).first();
        } 
        // Define methods for accessing the database
}
module.exports = AdminService;