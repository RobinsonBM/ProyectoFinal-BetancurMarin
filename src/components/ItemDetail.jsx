import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import "../styles/components/ItemDetail.scss";
import { useCartContext } from "../context/CartContext";
import RestauranteLa44Services from "../services/RestauranteLa44.service.ts";

const ItemDetail = () => {
  const id = useParams();
  console.log(`RobinDev - id`, id);
  const restauranteLa44Services = new RestauranteLa44Services();
  const [data, setData] = useState({});
  const [goCart, setGoCart] = useState(false);
  const { addProduct } = useCartContext();

  useEffect(() => {
    const querydb = restauranteLa44Services.querydb();
    const queryDoc = restauranteLa44Services.queryDoc(
      querydb,
      "productos",
      id.detail
    );
    restauranteLa44Services
      .getDoc(queryDoc)
      .then((resp) => setData({ id: resp.id, ...resp.data() }));
  }, []);

  const onAdd = (cantidad) => {
    setGoCart(true);
    addProduct(data, cantidad);
  };

  return (
    <div className="pokeDetail">
      <img src={data.image}></img>
      <h1>{data.title}</h1>
      <p>Categoria : {data.category}</p>
      <p>Descripcion: {data.description}</p>
      <p>Precio: {data.price}</p>
      {goCart ? (
        <Link className="terminar" to="/cart">
          Terminar compra
        </Link>
      ) : (
        <ItemCount inicial={1} stock={10} onAdd={onAdd} />
      )}
    </div>
  );
};
export default ItemDetail;
