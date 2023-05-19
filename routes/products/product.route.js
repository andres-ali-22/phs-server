const { Router } = require('express');

// IMPORT MIDDLEWARE
const { requestLogger } = require('../../middlewares/requestLogger.middleware');

//IMPORT Controller
const {
    productGet,
    productByIdGet,
    productPost,
    productPut,
    productDelete
} = require('../../controllers/products/product.controller');

const router = Router();

router.get('/', [
    requestLogger
], productGet);

router.get('/:name', [
    requestLogger
], productGet);

router.get('/id/:idProduct', [
    requestLogger
], productByIdGet);

router.post('/', [
    requestLogger
], productPost);

router.put('/:idProduct', [
    requestLogger
], productPut);

router.delete('/:idProduct', [
    requestLogger
], productDelete);

module.exports = router;