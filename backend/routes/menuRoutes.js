const express = require("express");
const { createMenu, getAllMenus } = require("../controllers/menuController");

const router = express.Router();

router.post("/menus", createMenu);
router.get("/menus", getAllMenus);

module.exports = router;
