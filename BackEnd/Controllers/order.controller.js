const Order = require('../Models/order.model')

exports.getAll = (req, res) => {
    const result = data => res.send(data)
    Order.getAll(result)
}