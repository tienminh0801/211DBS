const mySql = require('../Config/ConnectMySql')

const Sale = function (sale) {
    this.cccd = sale.cccd
}

Sale.getAll = function(send) {
    let query = "SELECT nv_ban_hang.cccd FROM nv_ban_hang";
    mySql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            send(err)
            return;
        }
        send(res)
    })
}

module.exports = Sale