import { Link, useParams } from 'react-router-dom'
import '../styles/components/Item.scss'

const Item = (props) => {
    const {personaje, index} = props

    return (
        <div className='content'>
            <div className='card-body'>
                <img src={personaje.image} alt='' />
                <h1>{personaje.name}</h1>
                <Link to={`/students/${index}`}>Ver detalle</Link>                
            </div>
        </div>
    )
}
export default Item