import { useEffect, useState } from "react";
import RestauranteLa44Services from "../services/RestauranteLa44.service.ts";
import RickAndMorthyServices from "../services/rickAndMorthy.service.ts";
import "../styles/components/ItemListContainer.scss";
import ItemList from "./ItemList";
// import platos from '../mock/itemsRest.json'

function ItemListContainer(props) {
  const restauranteLa44Services = new RestauranteLa44Services();
  const [data, setData] = useState([]);

  useEffect(() => {
    const querydb = restauranteLa44Services.querydb();
    const queryCollection = restauranteLa44Services.queryCollection(
      querydb,
      "productos"
    );
    restauranteLa44Services
      .getDocs(queryCollection)
      .then((resp) =>
        setData(
          resp.docs.map((producto) => ({ id: producto.id, ...producto.data() }))
        )
      );
  }, []);

  return (
    <>
      <header>
        <h1>{props.greeting}</h1>
        <ItemList data={data} />
      </header>
    </>
  );
}
export default ItemListContainer;
