import React, { useState } from "react";
import axios from "axios";

const backend_url =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

function ItemForm({ menuId, onItemAdded }) {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = { itemName, description, price };
    await axios.post(`${backend_url}/api/menus/${menuId}/items`, newItem);
    onItemAdded(newItem);
    setItemName("");
    setDescription("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Item Name"
        required
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        type="number"
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;
