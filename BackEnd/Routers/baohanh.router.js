const express = require("express");
const router = express.Router();
const BaoHanhController = require("../Controllers/BaoHanh.controller");

router.get("/:id", BaoHanhController.getBySeri);
router.get("/", BaoHanhController.getAll);
router.get("/search/:id", BaoHanhController.searchBaoHanh);
router.get("/searchMSH/:id", BaoHanhController.searchMSH);
router.post("/remove/:id", BaoHanhController.removeBaoHanh);
router.post("/:id", BaoHanhController.updateBaoHanh);
router.post("/", BaoHanhController.insertBaoHanh);

module.exports = router;
