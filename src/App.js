import SearchBar from './components/SearchBar';
import PokeCard from './components/PokeCard';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState('pikachu')
  const [img, setImg] = useState('')
  const [info, setInfo] = useState('')
  useEffect(() => {
    getImage()
    getInfo()
  }, [])

  async function getImage() {
    try {
        const response = await axios.get(`http://localhost:3001/get-pokemon-image/${pokemon}`)
        console.log(response.data)
        setImg(response.data)

    } catch (error) {
        throw new Error(`oopsie daisy ${error}`)
    }
}

async function getInfo() {
  try {
      const response = await axios.get(`http://localhost:3001/get-pokemon-by-name/${pokemon}`)
      console.log(response.data)
      setInfo(response.data)

  } catch (error) {
      throw new Error(`oopsie daisy ${error}`)
  }
}

  const choosePokemon = (mon) => {
    setPokemon(mon)
    console.log('im doing something')
    //when logging the value it seems to be one iteration behind, however it still seems to be updating. not sure yet
  }

  //TODO: or how about just having the image gathering functions here and pass it down as a prop? maybe that makes more sense

  return (
    <div className="App">
      <SearchBar choosePokemon={choosePokemon} getImage={getImage} getInfo={getInfo}></SearchBar>
      <PokeCard image={img} info={info}></PokeCard>
    </div>
  );
}

export default App;
