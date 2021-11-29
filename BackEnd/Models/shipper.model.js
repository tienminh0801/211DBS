const mySql = require('../Config/ConnectMySql')

const Shipper = function (shipper) {
    this.Shipper = shipper.cccd
}

Shipper.getAll = function(send) {
    let query = "SELECT nv_giao_hang.cccd FROM nv_giao_hang";
    mySql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            send(err)
            return;
        }
        send(res)
    })
}


module.exports = Shipper