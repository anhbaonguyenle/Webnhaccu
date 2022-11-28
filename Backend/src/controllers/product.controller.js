const ProductService = require('../services/products.service');
const ApiError = require('../api-error');
//Create and Save a new Contact
exports.create = async(req, res, next) => {
    if (!req.body?.maloai) {
        return next(new ApiError(400, 'Ma loai can not be empty'));
    }
    if (!req.body?.tennc) {
        return next(new ApiError(400, 'Ten nhac cu can not be empty'));
    }
    if (!req.body?.gianc) {
        return next(new ApiError(400, 'Gia nhac cu can not be empty'));
    }
    

    try {
        const productService = new ProductService();
        const product = await productService.create(req.body);
        return res.send(product);
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, 'An error occurred while creating the product')
        );
    }
};
exports.findAll = async(req, res, next) => {
    let products = [];

    try {
        const productService = new ProductService();
        const { name } = req.query;
        if (name) {
            products = await productService.findByName(name);
        } else {
            products = await productService.all();
        }
    } catch (error) {
        return next(
            new ApiError(500, 'An error occurred while retrieving products')
        );
    }
    return res.send(products);
};
//Find a single contact with an id
exports.findOne = async(req, res, next) => {
    try {
        const productService = new ProductService();
        const product = await productService.findById(req.params.id);
        if (!product) {
            return next(new ApiError(404, 'Product not found'));
        }
        return res.send(product);
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
// Update a contact by the id in the request
exports.update = async(req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        return next(new ApiError(400, 'Data to update can not be empty'));
    }
    try {
        const productService = new ProductService();
        const updated = await productService.update(req.params.id, req.body);
        if (!updated) {
            return next(new ApiError(404, 'Product not found'));
        }
        return res.send({ message: 'Product was updated successfully' });
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, `Error updating product with id=${req.params.id}`)
        );
    }
};
//Delete a contact with the specified id in the request
exports.delete = async(req, res, next) => {
    try {
        const productService = new ProductService();
        const deleted = await productService.delete(req.params.id);
        if (!deleted) {
            return next(new ApiError(404, 'Product not found'));
        }
        return res.send({ message: 'Product was delete successfully' });
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(
                500,
                `Could not delete product with id=${req.params.id}`
            )
        );
    }
};

// Delete all contacts of a user from the database
exports.deleteAll = async(req, res, next) => {
    try {
        const productService = new ProductService();
        const deleted = await productService.deleteAll();
        return res.send({
            message: `${deleted} All products were deleted successfully`,

        });

    } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, 'An error occurred while removing all products')

        );

    }
};