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