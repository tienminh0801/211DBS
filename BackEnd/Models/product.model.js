const mySql = require('../Config/ConnectMySql')

const DongSanPham = function (dongSanPham) {
    this.ten_san_pham = dongSanPham.ten_san_pham
    this.ten_san_pham_tang_kem = dongSanPham.ten_san_pham_tang_kem
    this.loai_san_pham = dongSanPham.loai_san_pham
    this.khuyen_mai = dongSanPham.khuyen_mai
    this.ma_so_hang = dongSanPham.ma_so_hang
    this.gia_niem_yet = dongSanPham.gia_niem_yet
    this.thoi_gian_bao_hanh = dongSanPham.thoi_gian_bao_hanh
    this.chat_lieu = dongSanPham.chat_lieu
    this.thoi_gian_ra_mat = dongSanPham.thoi_gian_ra_mat
}

DongSanPham.getAll = function (send) {
    let query = "SELECT * FROM dong_san_pham";

    mySql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            send(err)
            return;
        }

        // console.log("getAllProduct: ", res);
        send(res)
    });
} 


DongSanPham.insertProduct = function (data) {
    let query = "INSERT INTO dong_san_pham SET ?";

    mySql.query(query, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }

        console.log("Insert Success");
    });
} 

DongSanPham.getByName = function (data, send) {
    let query = "SELECT dong_san_pham.* , hang_san_xuat.ten_hang\
    FROM dong_san_pham, hang_san_xuat\
    WHERE dong_san_pham.ten_san_pham = ? AND hang_san_xuat.ma_so_hang = dong_san_pham.ma_so_hang";

    mySql.query(query, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        console.log(res, ' Here!!!!!')
        send(res)
    });
} 

DongSanPham.updateProduct = function (data, body) {
    let query = "UPDATE dong_san_pham SET ? WHERE dong_san_pham.ten_san_pham = ?";

    mySql.query(query, [body, data], (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }

        console.log("Update Success");
    });
} 

DongSanPham.removeProduct = function (data,send) {
    let query = "DELETE FROM dong_san_pham WHERE dong_san_pham.ten_san_pham = ?";

    mySql.query(query, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        console.log(data)
        console.log("Remove Success");
    });

    mySql.query("SELECT * FROM dong_san_pham", (err, res) => {
        if (err) {
            console.log("error: ", err);
            send(err)
            return;
        }
        send(res)
    });
} 

DongSanPham.searchProduct = function (data, send) {
    let query = "SELECT * FROM dong_san_pham WHERE dong_san_pham.ten_san_pham REGEXP ? ";

    mySql.query(query, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        console.log(res, ' Here!!!!!')
        send(res)
    });
} 

module.exports = DongSanPham