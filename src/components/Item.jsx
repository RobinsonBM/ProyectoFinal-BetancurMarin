import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";
import "../styles/components/Item.scss";

const Item = (props) => {
  const nombre = useContext(CartContext);
  console.log(`RobinDev - nombre`, nombre);
  const { item } = props;

  useEffect(() => {}, []);

  return (
    <div className="content">
      <div className="card-body">
        <img src={item.image} alt="" />
        <div className="w-100 d-flex flex-column align-items-center">
          <h1>{item.name}</h1>
          <Link to={`/personajes/${item.id}`}>Ver detalle</Link>
        </div>
      </div>
    </div>
  );
};
export default Item;
