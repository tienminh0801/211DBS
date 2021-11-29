const ChiNhanh = require('../Models/branch.model')

exports.getAll = (req, res) => {
    const result = data => res.send(data)

    ChiNhanh.getAll(result)
}