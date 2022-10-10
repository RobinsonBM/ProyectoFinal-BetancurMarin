import { useEffect, useState } from 'react';
import HarryPotterService from '../services/HarryPotter.service.ts';
import '../styles/components/ItemListContainer.scss';
import ItemCount from './ItemCount';

function ItemListContainer(props) {
    const harryPotterService = new HarryPotterService();
    const [harry, setHarry] = useState({});
    const [personajes, setPersonajes] = useState([])
    
    useEffect(() => {
        harryPotterService.getAll().then((resp) => {
            setHarry(resp.data[0]);
            setPersonajes(resp.data);
        })
    }, []);

    return (
        <>
            <header>
                <h1>{props.greeting}</h1>
                    <ItemCount personajes={personajes}/>
            </header>
        </>
    )
}
export default ItemListContainer