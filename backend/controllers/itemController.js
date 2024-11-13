const Menu = require("../models/menuModel");

exports.addItemToMenu = async (req, res) => {
  const { menuId } = req.params;
  const { itemName, description, price } = req.body;

  try {
    const menu = await Menu.findById(menuId);
    if (!menu) return res.status(404).json({ error: "Menu not found" });

    menu.items.push({ itemName, description, price });
    await menu.save();

    res.status(201).json(menu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
