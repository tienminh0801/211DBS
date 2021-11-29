const express = require("express");
const router = express.Router();
const eachproductController = require("../Controllers/each_product.controller");

router.get("/", eachproductController.getAll);

module.exports = router;
