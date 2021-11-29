const Pd = require('../Models/pd.model')

exports.getAllByOrderName = (req, res) => {
    const data = req.params.id
    const result = data => res.send(data)
    Pd.getAllByOrderName(data, result)
}