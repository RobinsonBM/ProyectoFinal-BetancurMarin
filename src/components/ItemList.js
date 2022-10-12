import Item from "./Item"
import '../styles/components/ItemList.scss'

const ItemList = (props) => {
    const { personajes } = props;

    return (
        <div  className='container'>
            {personajes.map((personaje, index) => {
                return (
                    <Item personaje={personaje} index={index} />
                )
            })

            }
        </div>
    )
}
export default ItemList