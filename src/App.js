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
          <Route path='/students' element={<ItemListContainer greeting='Harry Potter' />} />
          <Route path='/students/:id' element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
