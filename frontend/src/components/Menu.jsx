import React, { useState } from "react";
import ItemForm from "./ItemForm";

function Menu({ menu }) {
  const [items, setItems] = useState(menu.items || []);
  const [showItems, setShowItems] = useState(false);

  const handleItemAdded = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h2 onClick={() => setShowItems(!showItems)}>{menu.menuName}</h2>
      {showItems && (
        <div>
          <p>{menu.description}</p>
          <ul>
            {items.map((item) => (
              <li key={item.id} style={{ fontSize: "1.5rem" }}>
                {item.itemName}.........${item.price}
                <div style={{ fontSize: "1rem" }}>{item.description}</div>
              </li>
            ))}
          </ul>
          <ItemForm menuId={menu._id} onItemAdded={handleItemAdded} />
        </div>
      )}
    </div>
  );
}

export default Menu;
