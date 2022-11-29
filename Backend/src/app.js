const express = require('express');
const cors = require('cors');
//step 4
const adminController = require('./controllers/admin.controller');
const productController = require('./controllers/product.controller');
const accesoryController = require('./controllers/accesory.controller');


//step 5
const ApiError = require('./api-error');


const app = express();
app.use(cors());
app.use(express.json());


app.use('/img', express.static('img'));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to contact book application.' });
});

app.route('/api/admins')
    .get(adminController.findAll)
    .post(adminController.create)
    .delete(adminController.deleteAll);

app.route('/api/admins/:phone')
    .get(adminController.findOne)
    .put(adminController.update)
    .delete(adminController.delete)
///////////////////////////////////////////   

app.route('/api/products')
    .get(productController.findAll)
    .post(productController.create)
    .delete(productController.deleteAll);  

app.route('/api/products/:id')
    .get(productController.findOne)
    .put(productController.update)
    .delete(productController.delete)
/////////////////////////////////////////

app.route('/api/accesories')
    .get(accesoryController.findAll)
    .post(accesoryController.create)
    .delete(accesoryController.deleteAll);  

app.route('/api/accesories/:id')
    .get(accesoryController.findOne)
    .put(accesoryController.update)
    .delete(accesoryController.delete)

//Handle 404 response
app.use((req, res, next) => {
    //Handle for unknown route.
    //  Call next() to pass to the error handling middleware
    return next(new ApiError(404, 'Resource not found'));
});
// Define error-handling middleware last, after other app.use() and routes calls.
app.use((err, req, res, next) => {
    //The centralized error handling middleware
    // In any route handler, calling next(error)
    //  will pass to this error handling middleware
    return res.status(err.statusCode || 500).json({
        message: err.message || 'Internal Server Error',
    });
});

module.exports = app;