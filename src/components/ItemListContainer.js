import { useEffect, useState } from 'react';
import PokemonServices from '../services/PokeApi.service.ts';
import '../styles/components/ItemListContainer.scss';
import ItemList from './ItemList';
// import platos from '../mock/itemsRest.json'

const platos = [
    {
        id: 1,
        plato: "Bandeja paisa",
        imagen: "../assets/bandeja-paisa.jpg"
    },
    {
        id: 2,
        plato: "Cañon de cerdo",
        imagen: "../assets/cañon.jpg"
    },
    {
        id: 3,
        plato: "Cazuela de frijoles",
        imagen: "../assets/cazuela.jpg"
    },
    {
        id: 4,
        plato: "Empanadas",
        imagen: "../assets/empanadas.jpg"
    },
    {
        id: 5,
        plato: "Fritos",
        imagen: "../assets/fritos.jpg"
    },
    {
        id: 6,
        plato: "Mondongo",
        imagen: "../assets/mondongo.jpg"
    },
    {
        id: 7,
        plato: "Pechuga",
        imagen: "../assets/mondongo.jpg"
    },
    {
        id: 8,
        plato: "Picadas",
        imagen: "../assets/mondongo.jpg"
    },
    {
        id: 9,
        plato: "Sancocho",
        imagen: "../assets/mondongo.jpg"
    },
    {
        id: 10,
        plato: "Punta de Anca",
        imagen: "../assets/mondongo.jpg"
    },
    {
        id: 11,
        plato: "Solomo",
        imagen: "../assets/mondongo.jpg"
    }
]

function ItemListContainer(props) {
    const pokemonServices = new PokemonServices();
    const [personajes, setPersonajes] = useState([])
    // const [data, setData] = useState([])

    useEffect(() => {
        /* A promise that is resolved after 2 seconds. */
        pokemonServices.getAll().then((resp) => {
            setPersonajes(resp.data.results);
            console.log(`RobinDev - resp.data.results`, resp.data.results);
        })
        // const getData = new Promise(resolve => {
        //     setTimeout(() => {
        //         resolve(platos)
        //     }, 2000)
        // })
        // getData.then((resp) => {
        //     setData(resp)
        // })
    }, []);

    return (
        <>
            <header>
                <h1>{props.greeting}</h1>
                {/* <ItemList data={data} /> */}
                <ItemList data={personajes} />
            </header>
        </>
    )
}
export default ItemListContainer