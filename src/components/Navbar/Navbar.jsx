import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase/client";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "categorias"));
        const fetchedCategories = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error al cargar las categorías:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          {categories.map((category) => (
            <Button key={category.id}>
              <NavLink to={`/category/${category.id}`} style={{ textDecoration: "none", color: "white" }}>
                {category.name}
              </NavLink>
            </Button>
          ))}
        </Box>
        <CartWidget />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

