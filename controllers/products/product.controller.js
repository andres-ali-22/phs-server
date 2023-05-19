const { response, request } = require('express');

const Product = require('../../models/products/product.model');

const productGet = (req = request, res = response) => {

    const name = req.params['name'];

    Product.findAndCountAll({
        where: name ? { name } : {},
    }).then(resp => {
        const code = (resp.count > 0) ? 200 : 404;
        res.status(code).json({
            ok: true,
            data: resp.rows
        });
    }).catch(error => {
        res.status(500).json({
            ok: false,
            msg: String(error)
        });
    });

}

const productByIdGet = (req = request, res = response) => {

    const idProduct = req.params['idProduct'];

    Product.findAndCountAll({
        where: idProduct ? { idProduct } : {},
    }).then(resp => {
        const code = (resp.count > 0) ? 200 : 404;
        res.status(code).json({
            ok: true,
            data: resp.rows[0]
        });
    }).catch(error => {
        res.status(500).json({
            ok: false,
            msg: String(error)
        });
    });

}

const productPost = (req = request, res = response) => {

    const { name, description, price, condition, category, available, publication } = req.body;

    Product.create({ name, description, price, condition, category, available, publication }).then(resp => {
        res.status(201).json({
            ok: true,
            data: resp
        });
    }).catch(error => {
        res.status(500).json({
            ok: false,
            msg: String(error)
        });
    });

}

const productPut = (req = request, res = response) => {

    const { idProduct } = req.params;

    const { name, description, price, condition, category, available, publication } = req.body;

    Product.update({ name, description, price, condition, category, available, publication }, { where: { idProduct } }).then(async resp => {
        const product = await Product.findOne({ where: { idProduct } });
        res.status(200).json({
            ok: true,
            data: product
        });
    }).catch(error => {
        res.status(500).json({
            ok: false,
            msg: String(error)
        });
    });

}

const productDelete = (req = request, res = response) => {

    const { idProduct } = req.params;

    Product.destroy({
        where: {
            idProduct
        }
    }).then(resp => {
        if (resp <= 0) throw Error("El producto no existe.");
        res.status(200).json({
            ok: true
        });
    }).catch(error => {
        res.status(500).json({
            ok: false,
            msg: String(error)
        });
    });
}

module.exports = {
    productGet,
    productByIdGet,
    productPost,
    productPut,
    productDelete
}