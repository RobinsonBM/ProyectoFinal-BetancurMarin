import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PokemonServices from "../services/PokeApi.service.ts"
import ItemCount from "./ItemCount"
import '../styles/components/ItemDetail.scss'

const ItemDetail = () => {
  const pokemonServices = new PokemonServices()
  const id = useParams()
  const [abilities, setAbilities] = useState([])
  const [pokemon, setPokemon] = useState({})
  const [imgPoke, setImgPoke] = useState('')
  const areas = [];

  useEffect(() => {
    pokemonServices.getPokemon(id.detail).then((resp) => {
      const pokemon = resp.data;
      setPokemon(pokemon);
      setAbilities(pokemon.abilities)
      console.log(`RobinDev - pokemon.abilities`, pokemon);
    })

    pokemonServices.getImg(id.detail).then((resp) => {
      const img = resp.data.sprites.front_default;
      setImgPoke(img);
    })

  }, [])
  
  useEffect(() => {
    console.log(`RobinDev - areas`, areas);

  }, [areas])

  return (
    <div className="pokeDetail">
      <h1>{pokemon.name}</h1>
      <img src={imgPoke} alt="" />
      <p>Height: <span>{pokemon.height}</span></p>
      <p>Weight: <span>{pokemon.weight}</span></p>
      <h2>abilities</h2>
      <ol>
        {abilities.map((ability) => {
          return (
            <li>{ability.ability.name}</li>
          )
        })
        }
      </ol>
      <ItemCount />
    </div>
  )
}
export default ItemDetail