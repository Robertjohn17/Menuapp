import React, { useState } from "react";
import axios from "axios";

function MenuForm({ onMenuCreated }) {
  const [menuName, setMenuName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMenu = { menuName, description };
    const res = await axios.post("http://localhost:5000/api/menus", newMenu);
    onMenuCreated(res.data);
    setMenuName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={menuName}
        onChange={(e) => setMenuName(e.target.value)}
        placeholder="Menu Name"
        required
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Create Menu</button>
    </form>
  );
}

export default MenuForm;