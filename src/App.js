import './App.css';
//Rutas de los Componentes
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import About from './components/about/About.jsx';
import Detail from './components/deatil/Deatil.jsx';
//Estados 
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
//Importacion Axios
import axios from 'axios';

//import characters, { Rick } from './data.js';

// const URL_BASE = ''
//const API_KEY = ''

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
         
            <Routes>
               <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}></Route>
               <Route path='/about' element={<About/>} />
               <Route path='/detail/:id' element={<Detail/>} />
            </Routes>
   
         
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