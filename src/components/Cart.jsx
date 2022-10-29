import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";
import "../styles/components/Cart.scss";
import RestauranteLa44Services from "../services/RestauranteLa44.service.ts";

const Cart = () => {
  const restauranteLa44Services = new RestauranteLa44Services();
  const { cart, precioTotal, cleanCart } = useCartContext();
  const orden = {
    cliente: {
      nombre: "Robinson Betancur Marin",
      email: "robetancur.mv@gmail.com",
      telefono: "+573175030867",
      direccion: "sabaneta, Ant",
    },
    item: cart.map((producto) => ({
      id: producto.id,
      titulo: producto.title,
      precio: producto.price,
      cantidad: producto.cantidad,
    })),
    total: precioTotal(),
  };

  const handleClick = () => {
    const db = restauranteLa44Services.querydb();
    const ordersCollection = restauranteLa44Services.queryCollection(
      db,
      "orders"
    );
    restauranteLa44Services.postDoc(ordersCollection, orden).then(({ id }) => {
      console.log(id);
      cleanCart();
    });
  };

  if (cart.length === 0) {
    return (
      <div className="container d-flex flex-column align-items-center mt-3">
        <p>No hay elementos en el carrito</p>
        <Link className="hacerCompra" to="/">
          <button className="boton">Hacer un compra</button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="container d-flex flex-column align-items-center mt-3 mb-3">
        <p>
          Total: $
          {new Intl.NumberFormat("locales", {
            style: "currency",
            currency: "COP",
          }).format(precioTotal())}
        </p>
        <button className="boton" onClick={handleClick}>
          <Link to="/">Generar Orden</Link>
        </button>
      </div>
      <div className="container contenedor">
        {cart.map((producto) => {
          return <ItemCart key={producto.id} producto={producto} />;
        })}
      </div>
    </>
  );
};
export default Cart;
