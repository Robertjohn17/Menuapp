const express = require("express");
const { addItemToMenu } = require("../controllers/itemController");

const router = express.Router();

router.post("/menus/:menuId/items", addItemToMenu);

module.exports = router;
