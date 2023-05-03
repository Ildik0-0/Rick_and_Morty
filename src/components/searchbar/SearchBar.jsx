import style from '../searchbar/seachbar.module.css'

export default function SearchBar({onSearch}) {
   return (
      <div className={style.searchbox}>
         
            
            <input className={style.inputsearch} type='search' />
         <button className={style.btnsearch} onClick={onSearch}>Agregar</button> 
         
         
      </div>
   );
}
