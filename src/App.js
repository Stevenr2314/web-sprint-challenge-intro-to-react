import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import './App.css';
import Character from './components/Character'
import lukeImg from './images/LukeSkywalker.png'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState(null)
  const [currentChar, setCurrentChar] = useState('Luke Skywalker')
  const [characterIndex, setCharacterIndex] = useState(0)

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(resp => {
      setCharacters(resp.data)
    })
    .catch(err => console.log(err))
  }, [currentChar, characterIndex])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character characters={characters} currentChar={currentChar} lukeImg={lukeImg} setCurrentChar={setCurrentChar} characterIndex={characterIndex} setCharacterIndex={setCharacterIndex}></Character>
    </div>
  );
}

export default App;
