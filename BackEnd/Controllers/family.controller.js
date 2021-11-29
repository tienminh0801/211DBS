const NguoiThan = require('../Models/family.model')

exports.getAll = (req, res) => {
    const result = data => res.send(data)

    NguoiThan.getAll(result)
}