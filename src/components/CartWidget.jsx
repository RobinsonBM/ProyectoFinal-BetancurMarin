import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/CartWidget.scss";
import { useCartContext } from "../context/CartContext";

function CartWidget() {
  const { totalProductos } = useCartContext();
  console.log(`RobinDev - totalProductos`, totalProductos());
  return (
    <div className="carButton">
      <FontAwesomeIcon className="carShopping" icon={faCartShopping} />
      {totalProductos() ? (
        <div className="noti">{totalProductos()}</div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default CartWidget;
