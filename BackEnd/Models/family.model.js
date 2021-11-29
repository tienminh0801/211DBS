const mySql = require('../Config/ConnectMySql')

const NguoiThan = function (nguoiThan) {
    this.cccd_nv = nguoiThan.cccd_nv
    this.ho_ten = nguoiThan.ho_ten
    this.gioi_tinh = nguoiThan.gioi_tinh
    this.ngay_sinh = nguoiThan.ngay_sinh
    this.moi_quan_he = nguoiThan.moi_quan_he
}

NguoiThan.getAll = function (send) {
    let query = "SELECT * FROM nguoi_than";

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

module.exports = NguoiThan