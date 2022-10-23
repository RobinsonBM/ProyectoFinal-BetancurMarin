import { useEffect, useState } from "react";
import RickAndMorthyServices from "../services/rickAndMorthy.service.ts";
import "../styles/components/ItemListContainer.scss";
import ItemList from "./ItemList";
// import platos from '../mock/itemsRest.json'

function ItemListContainer(props) {
  const rickAndMorthyServices = new RickAndMorthyServices();
  const [personajes, setPersonajes] = useState([]);
  // const [data, setData] = useState([])

  useEffect(() => {
    /* A promise that is resolved after 2 seconds. */
    rickAndMorthyServices.getAll().then((resp) => {
      setPersonajes(resp.data.results);
      console.log(`RobinDev - setPersonajes`, personajes);
    });
  }, []);

  return (
    <>
      <header>
        <h1>{props.greeting}</h1>
        <ItemList data={personajes} />
      </header>
    </>
  );
}
export default ItemListContainer;
