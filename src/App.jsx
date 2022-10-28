import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "../src/styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";
import Cart from "./components/Cart";
import CartProvider from "./context/CartContext";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Productos" />}
            />
            <Route
              path="/personjes"
              element={<ItemListContainer greeting="Productos" />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/personajes/:detail" element={<ItemDetail />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}
