import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "../src/styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";
import Cart from "./components/Cart";
import CartProvider from "./context/CartContext";
import Home from "./components/home/Home";
import Footer from "./components/shared/Footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  greeting={{
                    title: "Restaurante la 44",
                    nota: "Chorizo casero, si no le gusta no lo paga",
                  }}
                />
              }
            />
            <Route
              path="/productos"
              element={<ItemListContainer greeting="Productos" />}
            />
            <Route path="/:categoryId" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/personajes/:detail" element={<ItemDetail />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}
