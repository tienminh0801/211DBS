const NhanVien = require('../Models/employee.model')

exports.getAll = (req, res) => {
    const result = data => res.send(data)
    NhanVien.getAll(result)
}


exports.getByCccd = (req, res) => {
    const data = req.params.id
    const result = data => res.send(data)
    console.log(data)
    NhanVien.getByCccd(data, result)
}

exports.insertEmployee = (req, res) => {
    const data = req.body
    // console.log(data)
    NhanVien.insertEmployee(data)
}
exports.removeEmployee = (req, res) => {
    const data = req.params.id
    const result = data => res.send(data)
    NhanVien.removeEmployee(data,result)

}
exports.updateEmployee = (req, res) => {
    const data = req.params.id
    const body = req.body
    NhanVien.updateEmployee(data, body)
}
exports.searchEmployee = (req, res) => {
    const data = req.params.id
    const result = data => res.send(data)
    NhanVien.searchEmployee(data,result)

}