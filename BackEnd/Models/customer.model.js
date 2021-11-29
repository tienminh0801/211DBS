const mySql = require('../Config/ConnectMySql')

const Customer = function (customer) {
    this.sdt = customer.sdt
}

Customer.getAll = function(send) {
    let query = "SELECT khach_hang.sdt FROM khach_hang";
    mySql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            send(err)
            return;
        }
        send(res)
    })
}

module.exports = Customer