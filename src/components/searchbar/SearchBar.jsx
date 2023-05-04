import style from '../searchbar/seachbar.module.css'
import { useState } from 'react';


export default function SearchBar({onSearch}) {

   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)

   }

   return (
      <div className={style.searchbox}>
         
            
         <input className={style.inputsearch} onChange={handleChange} value={id} type='search' />
         <button className={style.btnsearch} onClick={ ()=> {onSearch(id); setId('')}}>Agregar</button> 
         
         
      </div>
   );
}
