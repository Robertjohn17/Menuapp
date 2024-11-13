import React, { useContext } from "react";
import MenuForm from "./MenuForm";
import Menu from "./Menu";
import MyContext from "./Context";

function MenuList() {
  const { menus, setMenus } = useContext(MyContext);

  const handleMenuCreated = (newMenu) => {
    setMenus([...menus, newMenu]);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", fontSize: "3rem" }}>Menu</h2>
      <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
        Please Take a look at our Menu
      </p>
      <div style={{ textAlign: "center" }}>
        <MenuForm onMenuCreated={handleMenuCreated} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          textTransform: "capitalize",
        }}
      >
        {menus.map((menu) => (
          <div>
            <Menu key={menu._id} menu={menu} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuList;
