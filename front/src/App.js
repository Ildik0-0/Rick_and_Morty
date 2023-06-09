import './App.css';
import "./style/app.css";
//Rutas de los Componentes
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import About from './components/about/About.jsx';
import Detail from './components/deatil/Deatil.jsx';
import Forms from './components/form/Forms';
import Favorite from './components/favorite/Favorite';
//Estados 
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
//Importacion Axios
import axios from 'axios';

//import characters, { Rick } from './data.js';

// const URL_BASE = ''
//const API_KEY = ''

const email= 'dai@gmail.com';
const password= '123asd'
const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {
   const location = useLocation()
   const navigate = useNavigate()
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false)
  
   // const login = (userData) =>{
   //    if(userData.email === email && userData.password === password){
   //       setAccess(true)
   //       navigate('/home')
   //    }
   // }
   async function login(userData) {

      try {
         const { email, password } = userData;
         const {data} = await  axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      
      } catch (error) {
         console.log(error.message);
      }

      
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access])


   const onSearch = async (id) => {
      try {
         const {data} = await  axios(`http://localhost:3001/rickandmorty/character/${id}`)
          //axios(`https://rickandmortyapi.com/api/character/${id}`)
       //axios(`http://localhost:3001/rickandmorty/character/${id}`)
       // axios(`http://localhost:3001/rickandmorty/onsearch/${id}`)//peticion a un api
        
      
           if (data.name) {
              setCharacters((oldChars) => [...oldChars, data]);
           }

      } catch (error) {
          alert("No hay personajes con este ID")
      }
     
      // const URL_BASE = 'http://localhost:3001/rickandmorty'
      // if(characters.find((char)=> char.id === id)){
      //    return alert("respetido ")
      // }

      // fetch(`${ URL_BASE}/character/${id}`)
      // .then((response)=> response.json())
      // .then((data)=>{
      //    if(data.name){
      //    setCharacters((oldChars)=> [oldChars, data])
      //    }else{
      //       alert("Algo salio mal")
      //    }
      // })

   }
  

   const onClose = (id) =>{
      const characterFilter = characters.filter(characters => characters.id !== id);
      setCharacters(characterFilter)
   }

   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch}  setAccess={setAccess}/> 
         }
         
         
            <Routes>
               <Route path='/' element={<Forms login={login} />}/>
               <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}></Route>
               <Route path='/about' element={<About/>} />
               <Route path='/detail/:id' element={<Detail/>} />
               <Route path='/favorite' element={<Favorite/>} />
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