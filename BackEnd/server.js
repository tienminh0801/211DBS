const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());

const productRouter = require('./Routers/product.router')
const manufactoryRouter = require('./Routers/manufactory.router')
const orderRouter = require('./Routers/order.router')
const pdRouter = require('./Routers/pd.router')
const shipperRouter = require('./Routers/shipper.router')

const connection = require('./Config/ConnectMySql')
const baohanhRouter = require("./Routers/baohanh.router");
const eachproductRouter = require("./Routers/each_product.router");


app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

app.use('/hang_san_xuat',manufactoryRouter)
app.use('/order', orderRouter)
app.use('/product', pdRouter)
app.use('/shipper', shipperRouter)
app.use("/san_pham", productRouter);
app.use("/bao_hanh", baohanhRouter);
app.use("/eachproduct", eachproductRouter);

app.get("/", (req, res) => {
});

const PORT = 5000

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
