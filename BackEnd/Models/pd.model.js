const mySql = require('../Config/ConnectMySql')

const Pd = function (pd) {
    this.ten_san_pham = pd.ten_san_pham
    this.seri_san_pham = pd.seri_san_pham
    this.ten_san_pham_tang_kem = pd.ten_san_pham_tang_kem
    this.loai_san_pham = pd.loai_san_pham
    this.khuyen_mai = pd.khuyen_mai
    this.gia_niem_yet = pd.gia_niem_yet
    this.thoi_gian_bao_hanh = pd.thoi_gian_bao_hanh
}

Pd.getAllByOrderName = function (data, send) {
    let query = "SELECT dong_san_pham.ten_san_pham, san_pham.seri_san_pham, dong_san_pham.ten_san_pham_tang_kem, dong_san_pham.loai_san_pham, dong_san_pham.khuyen_mai, dong_san_pham.gia_niem_yet, dong_san_pham.thoi_gian_bao_hanh FROM dong_san_pham, san_pham WHERE san_pham.ma_don_hang = ? AND san_pham.ten_dong_san_pham = dong_san_pham.ten_san_pham";
    mySql.query(query, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        send(res)
    });
} 

Pd.getBySeri = function (data, send) {
    let query = "SELECT dong_san_pham.ten_san_pham, san_pham.seri_san_pham, dong_san_pham.ten_san_pham_tang_kem, dong_san_pham.loai_san_pham, dong_san_pham.khuyen_mai, dong_san_pham.gia_niem_yet, dong_san_pham.thoi_gian_bao_hanh FROM dong_san_pham, san_pham WHERE san_pham.seri_san_pham = ? AND san_pham.ten_dong_san_pham = dong_san_pham.ten_san_pham";

    mySql.query(query, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        send(res)
    });
} 

Pd.getAllInStock = function (send) {
    let query = "SELECT san_pham.seri_san_pham FROM san_pham WHERE san_pham.ma_don_hang IS NULL;";
    mySql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            send(err)
            return;
        }
        send(res)
    })
}

module.exports = Pd