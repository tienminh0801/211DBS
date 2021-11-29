const mySql = require('../Config/ConnectMySql')

const ChiNhanh = function (chiNhanh) {
    this.ten_chi_nhanh = chiNhanh.ten_chi_nhanh
    this.dia_chi = chiNhanh.dia_chi
    this.cccd_quan_ly = chiNhanh.cccd_quan_ly
    this.ngay_bat_dau_quan_ly = chiNhanh.ngay_bat_dau_quan_ly
    this.tong_luong_chi_tra = chiNhanh.tong_luong_chi_tra
}

ChiNhanh.getAll = function (send) {
    let query = "SELECT * FROM chi_nhanh";

    mySql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err);
            return;
        }

        // console.log("Hãng sản xuất: ", res);
        send(res)
    });
} 

module.exports = ChiNhanh