import { useState } from 'react'
import './main.css'
import MiApi from './components/MiApi'
import Buscador from './components/Buscador'
import Logo from './components/Logo.png'

const App = () => {
  const [data, setData] = useState([])
  const [characterFilter, setCharacterFilter] = useState([])
  const [search, setSearch] = useState("")
  return (
    <>
    <img src={Logo} alt="got-logo" />
    <h1>Find your favorite GOT Character</h1>
      <Buscador 
      data={data}
      search={search}
      setSearch={setSearch}
      setCharacterFilter={setCharacterFilter}
      />
    <div className='main'>
      <MiApi 
      data={data}
      setData={setData}
      characterFilter={characterFilter}
      setCharacterFilter={setCharacterFilter}
      />
    </div>
    </>
  )
}
export default App
