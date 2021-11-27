const mySql = require('../Config/ConnectMySql')

const HangSanXuat = function (hangSanXuat) {
    this.ma_so_hang = hangSanXuat.ma_so_hang
    this.ten_hang = hangSanXuat.ten_hang
    this.xuat_xu = hangSanXuat.xuat_xu
}

HangSanXuat.getAll = function (send) {
    let query = "SELECT * FROM hang_san_xuat";

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

module.exports = HangSanXuat