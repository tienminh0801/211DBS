const Shipper = require('../Models/shipper.model')

exports.getAll = (req, res) => {
    const result = data => res.send(data)
    Shipper.getAll(result)
}