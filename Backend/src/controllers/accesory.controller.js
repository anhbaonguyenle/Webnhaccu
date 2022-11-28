const AccesoryService = require('../services/accesory.service');
const ApiError = require('../api-error');
//Create and Save a new Contact
exports.create = async(req, res, next) => {
    if (!req.body?.tenpk) {
        return next(new ApiError(400, 'Ten phu kien can not be empty'));
    }
    if (!req.body?.giapk) {
        return next(new ApiError(400, 'Gia phu kien can not be empty'));
    } 
    
    try {
        const accesoryService = new AccesoryService();
        const accesory = await accesoryService.create(req.body);
        return res.send(accesory);
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, 'An error occurred while creating the product')
        );
    }
};
exports.findAll = async(req, res, next) => {
    let accesories = [];

    try {
        const accesoryService = new AccesoryService();
        const { name } = req.query;
        if (name) {
            accesories = await accesoryService.findByName(name);
        } else {
            accesories = await accesoryService.all();
        }
    } catch (error) {
        return next(
            new ApiError(500, 'An error occurred while retrieving products')
        );
    }
    return res.send(accesories);
};
//Find a single contact with an id
exports.findOne = async(req, res, next) => {
    try {
        const accesoryService = new ProductService();
        const accesory = await accesoryService.findById(req.params.id);
        if (!accesory) {
            return next(new ApiError(404, 'Accesory not found'));
        }
        return res.send(accesory);
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(
                500,
                `Error retrieving product with id=${req.params.id}`
            )
        );
    }
};

exports.update = async(req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        return next(new ApiError(400, 'Data to update can not be empty'));
    }
    try {
        const accesoryService = new AccesoryService();
        const updated = await accesoryService.update(req.params.id, req.body);
        if (!updated) {
            return next(new ApiError(404, 'Accesory not found'));
        }
        return res.send({ message: 'Updated successfully' });
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, `Error updating accesorywith id=${req.params.id}`)
        );
    }
};
//Delete a contact with the specified id in the request
exports.delete = async(req, res, next) => {
    try {
        const accesoryService = new AccesoryService();
        const deleted = await accesoryService.delete(req.params.id);
        if (!deleted) {
            return next(new ApiError(404, 'Accesory not found'));
        }
        return res.send({ message: 'Accesory was delete successfully' });
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(
                500,
                `Could not delete accesory with id=${req.params.id}`
            )
        );
    }
};

// Delete all contacts of a user from the database
exports.deleteAll = async(req, res, next) => {
    try {
        const accesoryService = new AccesoryService();
        const deleted = await accesoryService.deleteAll();
        return res.send({
            message: `${deleted} All accesories were deleted successfully`,

        });

    } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, 'An error occurred while removing all accesories')

        );

    }
};