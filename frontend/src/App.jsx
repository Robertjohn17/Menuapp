import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import MyContext from "./components/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuList from "./components/MenuList";
import Header from "./components/Header";

const backend_url =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

function App() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchMenus = async () => {
      const res = await axios.get(`${backend_url}/api/menus`);
      setMenus(res.data);
    };
    fetchMenus();
  }, []);

  return (
    <MyContext.Provider value={{ menus, setMenus }}>
      <BrowserRouter>
        <Header />
        <div style={{ paddingTop: "60px", paddingBottom: "60px" }}>
          <MenuList />
          <Routes></Routes>
        </div>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
