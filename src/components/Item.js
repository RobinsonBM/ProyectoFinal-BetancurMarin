import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PokemonServices from '../services/PokeApi.service.ts'
import '../styles/components/Item.scss'

const Item = (props) => {
    const {item} = props
    const pokemonServices = new PokemonServices()
    const [imgPoke, setImgPoke] = useState('')

    useEffect(() => {
        pokemonServices.getImg(item.name).then((resp) => {
            const img = resp.data.sprites.front_default;
            setImgPoke(img);
        })
    }, [])

    return (
        <div className='content'>
            <div className='card-body'>
                <img src={imgPoke} alt='' />
                <h1>{item.name}</h1>
                <Link to={`/pokemons/${item.name}`}>Ver detalle</Link>                
            </div>
        </div>
    )
}
export default Item