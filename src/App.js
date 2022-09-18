import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import '../src/styles/App.scss'

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting='Hola Mundo'/>
    </>
  )
}
