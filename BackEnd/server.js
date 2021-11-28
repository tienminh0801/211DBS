const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());

const productRouter = require("./Routers/product.router");
const manufactoryRouter = require("./Routers/manufactory.router");
const baohanhRouter = require("./Routers/baohanh.router");

const connection = require("./Config/ConnectMySql");

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

app.use("/san_pham", productRouter);
app.use("/hang_san_xuat", manufactoryRouter);
app.use("/bao_hanh", baohanhRouter);

app.get("/", (req, res) => {
    res.send("Hello DBS");
});

const PORT = 8080;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
