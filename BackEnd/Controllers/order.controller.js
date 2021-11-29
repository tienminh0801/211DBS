const Order = require('../Models/order.model')

exports.getAll = (req, res) => {
    const result = data => res.send(data)
    Order.getAll(result)
}

exports.insertOrder = (req, res) => {
    const data = req.body
    Order.insertOrder(data)
}

exports.getByName = (req, res) => {
    const data = req.params.id
    const result = data => res.send(data)
    Order.getByName(data, result)
}

exports.removeOrder = (req, res) => {
    const data = req.params.id
    const result = data => res.send(data)
    Order.removeOrder(data, result)
}

exports.updateOrder = (req, res) => {
    const data = req.params.id
    const body = req.body
    Order.updateOrder(data, body)
}

exports.searchOrder = (req, res) => {
    const data = req.params.id
    const result = data => res.send(data)
    Order.searchOrder(data, result)
}