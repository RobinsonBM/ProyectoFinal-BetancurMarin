import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  return (
    <div className="pokeDetail">
      <img src={personaje.image}></img>
      <h1>{personaje.name}</h1>
      <p>Species: {personaje.species}</p>
      <p>Gender: {personaje.gender}</p>
      <p>Location: {personaje.location?.name}</p>
      <p>Origin: {personaje.origin?.name}</p>
      <p>Status: {personaje.status}</p>
      <ItemCount />
    </div>
  );
};
export default ItemDetail;
