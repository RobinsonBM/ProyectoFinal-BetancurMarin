import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item, cantidad) => {
    const newCart = cart.filter((producto) => producto.id !== item.id);
    newCart.push({ ...item, cantidad });
    setCart(newCart);
  };
  console.log(`RobinDev - cart`, cart);

  const cleanCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const removeProduct = (id) => {
    const product = cart.filter((product) => product.id !== id);
    setCart(product);
  };

  const precioTotal = () => {
    return cart.reduce((prev, act) => prev + act.cantidad * act.price, 0);
  };

  const totalProductos = () =>
    cart.reduce(
      (acumulador, productoActual) => acumulador + productoActual.cantidad,
      0
    );

  return (
    <CartContext.Provider
      value={{
        cleanCart,
        isInCart,
        removeProduct,
        addProduct,
        precioTotal,
        totalProductos,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
