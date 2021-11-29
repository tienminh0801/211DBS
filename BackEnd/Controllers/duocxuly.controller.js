const Duocxuly = require("../Models/duocxuly.model")

exports.getByName = (req, res) => {
    const data = req.params.id
    const result = data => res.send(data)
    Duocxuly.getByName(data, result)
}

exports.insertOne = (req, res) => {
    const data = req.params.id
    const body = req.body
    Duocxuly.insertOne(data, body)
}

exports.updateOne = (req, res) => {
    const data = req.params.id
    const body = req.body
    Duocxuly.updateOne(data, body)
}