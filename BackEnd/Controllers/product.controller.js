const DongSanPham = require('../Models/product.model')

exports.getAll = (req, res) => {
    const result = data => res.send(data)

    DongSanPham.getAll(result)
}

exports.insertProduct = (req, res) => {
    const data = req.body
    // console.log(data)
    DongSanPham.insertProduct(data)
}

exports.getByName = (req, res) => {
    const data = req.params.id
    const result = data => res.send(data)
    // console.log(data)
    DongSanPham.getByName(data, result)

}

exports.updateProduct = (req, res) => {
    const data = req.params.id
    const body = req.body
    DongSanPham.updateProduct(data, body)

}

exports.removeProduct = (req, res) => {
    const data = req.params.id
    console.log(data)
    const result = data => res.send(data)
    DongSanPham.removeProduct(data,result)

}

exports.searchProduct = (req, res) => {
    const data = req.params.id
    const result = data => res.send(data)
    DongSanPham.searchProduct(data,result)

}




