const EachProduct = require("../Models/each_product.model");

exports.getAll = (req, res) => {
    const result = (data) => res.send(data);

    EachProduct.getAll(result);
};
