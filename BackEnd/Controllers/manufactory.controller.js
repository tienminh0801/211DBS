const HangSanXuat = require('../Models/manufactory.model')

exports.getAll = (req, res) => {
    const result = data => res.send(data)

    HangSanXuat.getAll(result)
}