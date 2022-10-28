import { useCartContext } from "../context/CartContext";
import "../styles/components/ItemCart.scss";

const ItemCart = ({ producto }) => {
  const { removeProduct } = useCartContext();
  return (
    <div className="content1">
      <div className="card-body">
        <img src={producto.image} alt="" />
        <div className="w-100 d-flex flex-column align-items-center">
          <h1>{producto.name}</h1>
          <p>Cantidad: {producto.cantidad}</p>
          <p>Precio Unidad: {producto.price}</p>
          <p>Subtotal: ${producto.cantidad * producto.price}</p>
          <button onClick={() => removeProduct(producto.id)}>Eliminar</button>
        </div>
      </div>
    </div>
  );
};
export default ItemCart;
