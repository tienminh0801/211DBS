const mySql = require('../Config/ConnectMySql')

const Duocxuly = function (xuly) {
    this.ma_don_hang = xuly.ma_don_hang
    this.sdt_khach_hang = xuly.sdt_khach_hang
    this.cccd_nv_ban_hang = xuly.cccd_nv_ban_hang
    this.hinh_thuc_thanh_toan = xuly.hinh_thuc_thanh_toan
}

Duocxuly.getByName = function (data, send) {
    let query = "SELECT * FROM duoc_xu_ly WHERE duoc_xu_ly.ma_don_hang = ?";

    mySql.query(query, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        send(res)
    });
} 

Duocxuly.insertOne = function (data, body) {
    let query = "INSERT INTO duoc_xu_ly (`ma_don_hang`, `sdt_khach_hang`, `cccd_nv_ban_hang`, `hinh_thuc_thanh_toan`) VALUES (?, ?, ?, 'Tiền mặt')";

    mySql.query(query, [data, body.sdt_khach_hang, body.cccd_nv_ban_hang], (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }

        console.log("Insert Success");
    });
}

Duocxuly.updateOne = function (data, body) {
    let query = "UPDATE duoc_xu_ly SET ma_don_hang = ?, sdt_khach_hang = ?, cccd_nv_ban_hang = ? WHERE duoc_xu_ly.ma_don_hang = ?";

    mySql.query(query, [data, body.sdt_khach_hang, body.cccd_nv_ban_hang, data], (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }

        console.log("Update Success");
    });
}


module.exports = Duocxuly