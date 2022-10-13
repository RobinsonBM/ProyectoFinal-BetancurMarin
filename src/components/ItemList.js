import Item from "./Item"
import '../styles/components/ItemList.scss'

const ItemList = (props) => {
    const { data } = props;

    return (
        <div  className='container'>
            {data.map((item) => {
                return (
                    <Item key={item.name} item={item} />
                )
            })

            }
        </div>
    )
}
export default ItemList