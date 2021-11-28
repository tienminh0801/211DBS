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





module.exports = Order