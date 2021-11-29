const BaoHanh = require("../Models/baohanh.model");

exports.getAll = (req, res) => {
    const result = (data) => res.send(data);

    BaoHanh.getAll(result);
};

exports.insertBaoHanh = (req, res) => {
    const data = req.body;
    // console.log(data)
    BaoHanh.insertBaoHanh(data);
};

exports.getBySeri = (req, res) => {
    const data = req.params.id;
    const result = (data) => res.send(data);
    // console.log(data)
    BaoHanh.getBySeri(data, result);
};

exports.updateBaoHanh = (req, res) => {
    const data = req.params.id;
    const body = req.body;
    BaoHanh.updateBaoHanh(data, body);
};

exports.removeBaoHanh = (req, res) => {
    const data = req.params.id;
    const result = (data) => res.send(data);
    BaoHanh.removeBaoHanh(data, result);
};

exports.searchBaoHanh = (req, res) => {
    const data = req.params.id;
    const result = (data) => res.send(data);
    BaoHanh.searchBaoHanh(data, result);
};

exports.searchMSH = (req, res) => {
    const data = req.params.id;
    const result = (data) => res.send(data);
    BaoHanh.searchMSH(data, result);
};
