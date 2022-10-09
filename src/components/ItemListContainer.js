import '../styles/components/ItemListContainer.scss';
import ItemCount from './ItemCount';

function ItemListContainer(props) {
    return (
        <>
            <header>
                <h1>{props.greeting}</h1>
                <ItemCount />
            </header>
        </>
    )
}
export default ItemListContainer