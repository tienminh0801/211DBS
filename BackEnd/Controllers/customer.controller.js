const Customer = require('../Models/customer.model')

exports.getAll = (req, res) => {
    const result = data => res.send(data)
    Customer.getAll(result)
}