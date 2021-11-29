const mySql = require('../Config/ConnectMySql')

const NhanVien = function (nhanVien) {
    this.cccd = nhanVien.cccd
    this.ho = nhanVien.ho
    this.ten_dem = nhanVien.ten_dem
    this.ten = nhanVien.ten
    this.luong = nhanVien.luong
    this.sdt = nhanVien.sdt
    this.ngay_sinh = nhanVien.ngay_sinh
    this.ca_lam_viec = nhanVien.ca_lam_viec
    this.dia_chi = nhanVien.dia_chi
    this.gioi_tinh = nhanVien.gioi_tinh
    this.ten_chi_nhanh = nhanVien.ten_chi_nhanh
    this.ngay_bat_dau_lam_viec = nhanVien.ngay_bat_dau_lam_viec
    this.cccd_nguoi_giam_sat = nhanVien.cccd_nguoi_giam_sat
    this.loai_nhan_vien = nhanVien.loai_nhan_vien
}

NhanVien.getAll = function (send) {
    let query = "SELECT * FROM nhan_vien GROUP BY nhan_vien.ten_chi_nhanh, nhan_vien.cccd ORDER BY nhan_vien.ten_chi_nhanh";

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


NhanVien.updateEmployee = function (data, body) {
    let query = "UPDATE nhan_vien SET ? WHERE nhan_vien.cccd = ?";

    mySql.query(query, [body, data], (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }

        console.log("Update Success");
    });
} 

NhanVien.getMgr = function (data, send) {
    let query = "SELECT * FROM nhan_vien WHERE nhan_vien.cccd_nguoi_giam_sat IS NULL ";

    mySql.query(query, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        send(res)
    });
}

NhanVien.insertEmployee = function (data) {
    let query = "INSERT INTO nhan_vien SET ?";

    mySql.query(query, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }

        console.log("Insert Success");
    });
} 

NhanVien.removeEmployee = function (data,send) {
    let query = "DELETE FROM nhan_vien WHERE nhan_vien.cccd = ?";

    mySql.query(query, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        console.log("Remove Success");
    });

    mySql.query("SELECT * FROM nhan_vien GROUP BY nhan_vien.ten_chi_nhanh, nhan_vien.cccd ORDER BY nhan_vien.ten_chi_nhanh", (err, res) => {
        if (err) {
            console.log("error: ", err);
            send(err)
            return;
        }
        send(res)
    });
} 

NhanVien.getByCccd = function (data, send) {
    let query = "SELECT * FROM nhan_vien WHERE nhan_vien.cccd = ?";

    mySql.query(query, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        send(res)
    });
} 

NhanVien.searchProduct = function (data, send) {
    let query = "SELECT * FROM nhan_vien WHERE nhan_vien.cccd REGEXP ? ";

    mySql.query(query, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        console.log(res, ' Here!!!!!')
        send(res)
    });
} 

module.exports = NhanVien