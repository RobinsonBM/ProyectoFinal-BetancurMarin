import { useEffect, useState } from 'react';
import HarryPotterService from '../services/HarryPotter.service.ts';
import '../styles/components/ItemListContainer.scss';
import ItemList from './ItemList';

function ItemListContainer(props) {
    const harryPotterService = new HarryPotterService();
    const [harry, setHarry] = useState({});
    const [personajes, setPersonajes] = useState([])

    useEffect(() => {
        harryPotterService.getAll().then((resp) => {
            console.log(`RobinDev - resp`, resp);
            setTimeout(() => {
                setHarry(resp.data[0]);
                setPersonajes(resp.data);
            }, 2000);
        })
    }, []);

    return (
        <>
            <header>
                <h1>{props.greeting}</h1>
                <ItemList personajes={personajes} />
            </header>
        </>
    )
}
export default ItemListContainer