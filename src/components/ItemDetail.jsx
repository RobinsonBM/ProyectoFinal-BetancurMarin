import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import RickAndMorthyServices from "../services/rickAndMorthy.service.ts";
import "../styles/components/ItemDetail.scss";

const ItemDetail = () => {
  const id = useParams();
  const rickAndMorthyServices = new RickAndMorthyServices();
  const [personaje, setPersonaje] = useState({});
  const [goCart, setGoCart] = useState(false);

  useEffect(() => {
    rickAndMorthyServices.getPersonaje(id.detail).then((resp) => {
      const item = resp.data;
      setPersonaje(item);
      console.log(`RobinDev - personaje`, item);
    });
  }, []);

  const onAdd = (cantidad) => {
    setGoCart(true);
    console.log(cantidad);
  };

  return (
    <div className="pokeDetail">
      <img src={personaje.image}></img>
      <h1>{personaje.name}</h1>
      <p>Species: {personaje.species}</p>
      <p>Gender: {personaje.gender}</p>
      <p>Location: {personaje.location?.name}</p>
      <p>Origin: {personaje.origin?.name}</p>
      <p>Status: {personaje.status}</p>
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
