import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Nav from './components/Nav'
import Filmes from './components/Filmes'
import Series from './components/Series'
import Busca from './components/Busca'
import DetalhesFilmes from './components/DetalhesFilmes'
import DetalhesSeries from './components/DetalhesSeries'

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Filmes />} />
        <Route path="/series" element={<Series />} />
        <Route path="/busca/:busca" element={<Busca />} />
        <Route path="/detalhesfilmes/:id" element={<DetalhesFilmes />} />
        <Route path="/detalhesseries/:id" element={<DetalhesSeries />} />
      </Routes>
    </>
  )
}

export default App
