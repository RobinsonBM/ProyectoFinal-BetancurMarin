import { useEffect, useState } from "react";
import RestauranteLa44Services from "../services/RestauranteLa44.service.ts";
import "../styles/components/ItemListContainer.scss";
import ItemList from "./ItemList";
import { query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

// import platos from '../mock/itemsRest.json'

function ItemListContainer(props) {
  const restauranteLa44Services = new RestauranteLa44Services();
  const [data, setData] = useState([]);
  const { categoryId } = useParams();
  const [category, setCategory] = useState("");
  console.log(`RobinDev - categoryId`, categoryId);

  useEffect(() => {
    const querydb = restauranteLa44Services.querydb();
    const queryCollection = restauranteLa44Services.queryCollection(
      querydb,
      "productos"
    );
    if (categoryId) {
      const queryFilter = query(
        queryCollection,
        where("category", "==", categoryId)
      );
      restauranteLa44Services.getDocs(queryFilter).then((resp) =>
        setData(
          resp.docs.map((producto) => {
            return {
              id: producto.id,
              ...producto.data(),
            };
          })
        )
      );
    } else {
      restauranteLa44Services.getDocs(queryCollection).then((resp) =>
        setData(
          resp.docs.map((producto) => ({
            id: producto.id,
            ...producto.data(),
          }))
        )
      );
    }
    getCategory();
  }, [categoryId]);

  const getCategory = () => {
    switch (categoryId) {
      case "platos-tipicos":
        setCategory("Platos Tipicos");
        break;
      case "carnes-asadas":
        setCategory("Carnes Asadas");
        break;
      case "pescados":
        setCategory("Pescados");
        break;
      case "hamburguesas":
        setCategory("Hamburguesas");
        break;
      case "desayunos":
        setCategory("Desayunos");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <header>
        {categoryId ? <h1>{category}</h1> : <h1>{props.greeting}</h1>}
        <ItemList data={data} />
      </header>
    </>
  );
}
export default ItemListContainer;
