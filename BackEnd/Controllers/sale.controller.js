const Sale = require('../Models/sale.model')

exports.getAll = (req, res) => {
    const result = data => res.send(data)
    Sale.getAll(result)
}