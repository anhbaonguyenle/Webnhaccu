const AdminService = require('../services/admin.service');
const ApiError = require('../api-error');
//Create and Save a new Account
exports.create = async(req, res, next) => {
    if (!req.body?.sdt) {
        return next(new ApiError(400, 'Phone can not be empty'));
    }
    if (!req.body?.admin_name) {
        return next(new ApiError(400, 'Admin name can not be empty'));
    }
    if (!req.body?.pass) {
        return next(new ApiError(400, 'Password can not be empty'));
    }

    try {
        const adminService = new AdminService();
        const admin = await adminService.create(req.body);
        return res.send(admin);
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, 'An error occurred while creating an Admin')
        );
    }
};
exports.findAll = async(req, res, next) => {
    let admins = [];

    try {
        const adminService = new AdminService();
        const { adminname, phone} = req.query;
        if (adminname) {
            admins = await adminService.findByAdminName(adminname);  
        }
        if (phone) {
            admins = await adminService.findByPhone(phone);  
        }
       else {
            admins = await adminService.all();
        }
    } catch (error) {
        return next(
            new ApiError(500, 'An error occurred while retrieving admin')
        );
    }
    return res.send(admins);
};
//Find a single contact with an id
exports.findOne = async(req, res, next) => {
    try {
        const adminService = new AdminService();
        const admin = await adminService.findByPhone(req.params.phone);
        if (!admin) {
            return next(new ApiError(404, 'Account not found'));
        }
        return res.send(admin);
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(
                500,
                `Error retrieving account with phone number=${req.params.phone}`
            )
        );
    }
};
// Update a contact by the Phone number in the request
exports.updatePhone = async(req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        return next(new ApiError(400, 'Data to update can not be empty'));
    }
    try {
        const adminService = new AdminService();
        const updated = await adminService.update(req.params.phone, req.body);
        if (!updated) {
            return next(new ApiError(404, 'Account not found'));
        }
        return res.send({ message: 'Admin account was updated successfully' });
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, `Error updating admin account with phone number=${req.params.phone}`)
        );
    }
};
//
exports.update = async(req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        return next(new ApiError(400, 'Data to update can not be empty'));
    }
    try {
        const adminService = new AdminService();
        const updated = await adminService.updatePass(req.params.phone, req.body);
        if (!updated) {
            return next(new ApiError(404, 'Account not found'));
        }
        return res.send({ message: 'Admin account was updated successfully' });
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, `Error updating admin account with phone number=${req.params.phone}`)
        );
    }
};
//Delete a contact with the specified id in the request
exports.delete = async(req, res, next) => {
    try {
        const adminService = new AdminService();
        const deleted = await adminService.delete(req.params.phone);
        if (!deleted) {
            return next(new ApiError(404, 'Account not found'));
        }
        return res.send({ message: 'Admin account was delete successfully' });
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(
                500,
                `Could not delete admin account with phone number=${req.params.phone}`
            )
        );
    }
};

// Delete all contacts of a user from the database
exports.deleteAll = async(req, res, next) => {
    try {
        const adminService = new AdminService();
        const deleted = await adminService.deleteAll();
        return res.send({
            message: `${deleted} accounts were deleted successfully`,

        });

    } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, 'An error occurred while removing all accounts')

        );

    }
};