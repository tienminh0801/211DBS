const Pd = require('../Models/pd.model')

exports.getAllByOrderName = (req, res) => {
    const data = req.params.id
    const result = data => res.send(data)
    Pd.getAllByOrderName(data, result)
}
exports.getBySeri = (req, res) => {
    const data = req.params.id
    const result = data => res.send(data)
    Pd.getBySeri(data, result)
}
exports.getAllInStock = (req, res) => {
    const result = data => res.send(data)
    Pd.getAllInStock(result)
}

exports.updateProductOrder = (req, res) => {
    const data = req.params.id
    const body = req.body
    Pd.updateProductOrder(data, body)
}

exports.deleleProductOrder = (req, res) => {
    const data = req.params.id
    const body = req.body
    Pd.deleteProductOrder(data, body)
}