const mySql = require('../Config/ConnectMySql')

const Order = function (order) {
    this.ma_don_hang = order.ma_don_hang
    this.cccd_nv_giao_hang = order.cccd_nv_giao_hang
    this.thoi_gian_giao = order.thoi_gian_giao
    this.phi_giao = order.phi_giao
    this.tinh_trang = order.tinh_trang
}

Order.getAll = function(send) {
    let query = "SELECT * FROM don_hang";
    mySql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            send(err)
            return;
        }
        send(res)
    })
}

Order.insertOrder = function(data) {
    let query = "INSERT INTO don_hang SET ?";

    mySql.query(query, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }

        console.log("Insert Success");
    });
}

Order.getByName = function (data, send) {
    let query = "SELECT * FROM don_hang WHERE don_hang.ma_don_hang = ?";

    mySql.query(query, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        send(res)
    });
} 

Order.removeOrder = function (data,send) {
    let query = "DELETE FROM don_hang WHERE don_hang.ma_don_hang = ?";

    mySql.query(query, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        console.log("Remove Success");
    });

    mySql.query("SELECT * FROM don_hang", (err, res) => {
        if (err) {
            console.log("error: ", err);
            send(err)
            return;
        }
        send(res)
    });
} 

Order.updateOrder = function (data, body) {
    let query = "UPDATE don_hang SET ? WHERE don_hang.ma_don_hang = ?";

    mySql.query(query, [body, data], (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }

        console.log("Update Success");
    });
}

module.exports = Order