import './App.css';

import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import { useState } from 'react';
import axios from 'axios';
//import characters, { Rick } from './data.js';


function App() {

   const [characters, setCharacters] = useState([]);
  
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)//peticion a un api
      .then(response => response.data)
      .then(( data ) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) =>{
      const characterFilter = characters.filter(characters => characters.id !== Number(id));
      setCharacters(characterFilter)
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose}/>
         
         
      </div>
   );
}

export default App;



/* 
/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> 
import SearchBar from './components/searchbar/SearchBar.jsx';
import Card from './components/card/Card.jsx';
<Card
            // id={Rick.id}
            // name={Rick.name}
            // status={Rick.status}
            // species={Rick.species}
            // gender={Rick.gender}
            // origin={Rick.origin.name}
            // image={Rick.image}
            // onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */