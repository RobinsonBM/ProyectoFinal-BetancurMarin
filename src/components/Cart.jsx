import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";
import "../styles/components/Cart.scss";

const Cart = () => {
  const { cart, precioTotal } = useCartContext();
  console.log(`RobinDev - cart`, cart);

  if (cart.length === 0) {
    return (
      <div className="container d-flex flex-column align-items-center">
        <p>No hay elementos en el carrito</p>
        <Link className="hacerCompra" to="/personjes">
          <button>Hacer un compra</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container contenedor">
      {cart.map((producto) => {
        return <ItemCart key={producto.id} producto={producto} />;
      })}
    </div>
  );
};
export default Cart;
