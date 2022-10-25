import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "../src/styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";
import Cart from "./components/Cart";
import { createContext } from "react";

export const CartContext = createContext("");
console.log(`RobinDev - cartContext`, CartContext);

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <CartContext.Provider value={{ nombre: "Robinson" }}>
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Personajes" />}
            />
            <Route
              path="/personjes"
              element={<ItemListContainer greeting="Personajes" />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/personajes/:detail" element={<ItemDetail />} />
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </>
  );
}
