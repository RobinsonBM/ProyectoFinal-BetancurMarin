import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import '../src/styles/App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetail from './components/ItemDetail'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Pokemons' />} />
          <Route path='/pokemons/:detail' element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
