const mySql = require("../Config/ConnectMySql");

const EachProduct = function (eachProduct) {
    this.ten_dong_san_pham = eachProduct.ten_dong_san_pham;
    this.seri_san_pham = eachProduct.seri_san_pham;
    this.tinh_trang = eachProduct.tinh_trang;
    this.ma_don_hang = eachProduct.ma_don_hang;
    this.ngay_giao_dich = eachProduct.ngay_giao_dich;
    this.ten_chi_nhanh = eachProduct.ten_chi_nhanh;
};

EachProduct.getAll = function (send) {
    let query = "SELECT * FROM san_pham";

    mySql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err);
            return;
        }

        // console.log("Hãng sản xuất: ", res);
        send(res);
    });
};

module.exports = EachProduct;
