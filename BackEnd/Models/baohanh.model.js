const mySql = require("../Config/ConnectMySql");

const BaoHanh = function (bao_hanh) {
    this.ma_so_hang = bao_hanh.ma_so_hang;
    this.ten_dong_sp = bao_hanh.ten_dong_sp;
    this.seri_sp = bao_hanh.seri_sp;
    this.ten_chi_nhanh = bao_hanh.ten_chi_nhanh;
    this.thoi_gian_bao_hanh = bao_hanh.thoi_gian_bao_hanh;
};

BaoHanh.getAll = function (send) {
    let query = "SELECT * FROM bao_hanh";

    mySql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            send(err);
            return;
        }

        // console.log("getAllProduct: ", res);
        send(res);
    });
};

BaoHanh.insertBaoHanh = function (data) {
    let query = "INSERT INTO bao_hanh SET ?";

    mySql.query(query, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }

        console.log("Insert Success");
    });
};

BaoHanh.getBySeri = function (data, send) {
    let query = "SELECT bao_hanh.*\
    FROM bao_hanh\
    WHERE bao_hanh.seri_sp = ?";

    mySql.query(query, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        console.log(res, " Here!!!!!");
        send(res);
    });
};

BaoHanh.updateBaoHanh = function (data, body) {
    let query = "UPDATE bao_hanh SET ? WHERE bao_hanh.seri_sp = ?";

    mySql.query(query, [body, data], (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }

        console.log("Update Success");
    });
};

BaoHanh.removeBaoHanh = function (data, send) {
    let query = "DELETE FROM bao_hanh WHERE bao_hanh.seri_sp = ?";

    mySql.query(query, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        console.log("Remove Success");
    });

    mySql.query("SELECT * FROM bao_hanh", (err, res) => {
        if (err) {
            console.log("error: ", err);
            send(err);
            return;
        }
        send(res);
    });
};

BaoHanh.searchBaoHanh = function (data, send) {
    let query = "SELECT * FROM bao_hanh WHERE bao_hanh.seri_sp REGEXP ? ";

    mySql.query(query, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        console.log(res, " Here!!!!!");
        send(res);
    });
};

module.exports = BaoHanh;
